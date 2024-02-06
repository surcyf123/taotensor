import asyncio
import operator
import time
from typing import Union

import bittensor
import cachetools
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.calculate_apr import calculate_apr

from .sync_metagraph import sync_continuously

app = FastAPI()


# app startup event
@app.on_event("startup")
async def startup_event():
    # Sync metagraphs on a loop
    sync_continuously()


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://taotensor.netlify.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


allowed_netuids = [1, 3, 11]


@app.get("/metagraph/{netuid}")
async def read_metagraph(netuid: int):
    if netuid not in allowed_netuids:
        return {"error": "netuid not allowed"}

    # load from db
    from .db.metagraph import Metagraph

    # Get the latest
    json_text = (
        Metagraph.select()
        .where(Metagraph.netuid == netuid)
        .order_by(Metagraph.id.desc())
        .get()
        .json_data
    )
    import json

    return json.loads(json_text)


def timeit(func):
    def timed(*args, **kwargs):
        ts = time.time()
        result = func(*args, **kwargs)
        te = time.time()
        print(func.__name__, "took", round((te - ts) * 1000, 1), "ms")
        return result

    return timed


class BittensorApi:
    def __init__(self):
        self.subtensor = bittensor.subtensor()

        # Separate cache for each method
        self.transfer_fee_cache = cachetools.TTLCache(maxsize=1, ttl=300)
        self.total_stake_cache = cachetools.TTLCache(maxsize=1, ttl=300)
        self.total_issuance_cache = cachetools.TTLCache(maxsize=1, ttl=300)
        self.total_delegated_stake_cache = cachetools.TTLCache(maxsize=1, ttl=300)

    @timeit
    @cachetools.cachedmethod(operator.attrgetter("transfer_fee_cache"))
    def transfer_fee(self):
        return int(
            self.subtensor.get_transfer_fee(
                wallet=bittensor.wallet(),
                dest=bittensor.wallet().hotkey.ss58_address,
                value=1,
            )
        )

    @timeit
    @cachetools.cachedmethod(operator.attrgetter("total_stake_cache"))
    def total_stake(self):
        return int(self.subtensor.total_stake())

    @timeit
    @cachetools.cachedmethod(operator.attrgetter("total_issuance_cache"))
    def total_issuance(self):
        return int(self.subtensor.total_issuance())

    def delegates(self):
        return self.subtensor.get_delegates()

    # computed
    @timeit
    def total_stake_percentage(self):
        return self.total_stake() / self.total_issuance() * 100

    @timeit
    @cachetools.cachedmethod(operator.attrgetter("total_delegated_stake_cache"))
    def total_delegated_stake(self):
        delegates = self.delegates()
        delegates.sort(key=lambda delegate: delegate.total_stake, reverse=True)
        total_owner_stake = 0
        total_delegated_stake = 0
        for i, delegate in enumerate(delegates):
            # print("\n")
            # print(delegate)
            owner_stake = next(
                map(
                    lambda x: x[1],  # get stake
                    filter(
                        lambda x: x[0] == delegate.owner_ss58, delegate.nominators
                    ),  # filter for owner
                ),
                bittensor.Balance.from_rao(0),  # default to 0 if no owner stake.
            )
            total_owner_stake = total_owner_stake + owner_stake
            total_delegated_stake = total_delegated_stake + delegate.total_stake
        print("total_owner_stake", total_owner_stake)
        print("total_delegated_stake", total_delegated_stake)
        print(
            "total_delegated_stake - total_owner_stake",
            total_delegated_stake - total_owner_stake,
        )
        return int(total_delegated_stake)

    @timeit
    def average_validator_apr(self):
        starting_stake = 10000  # Doesn't matter as we only care about APR here.
        starting_issuance = bittensor.Balance(self.total_issuance()).tao
        daily_inflation = 7200
        staked_percentage = self.total_stake_percentage()
        days = 365

        APR, final_stake = calculate_apr(
            starting_stake, starting_issuance, daily_inflation, staked_percentage, days
        )
        print("APR:", APR)
        print("Final Stake:", final_stake)
        return APR * 100  # as percentage


api = BittensorApi()


@app.get("/current-stats")
async def current_stats():
    return {
        "transferFee": api.transfer_fee(),
        "totalStake": api.total_stake(),
        "totalIssuance": api.total_issuance(),
        "totalStakePercentage": api.total_stake_percentage(),
        "totalDelegatedStake": api.total_delegated_stake(),
        "average_validator_apr": api.average_validator_apr(),
        # "delegates": api.delegates(),
    }


@app.get("/transfer-fee")
async def transfer_fee():
    return {"transferFee": api.transfer_fee()}


@app.get("/total-stake")
async def total_stake():
    return {
        "totalStake": api.total_stake(),
    }


@app.get("/total-issuance")
async def total_stake():
    return {
        "totalIssuance": api.total_issuance(),
    }


@app.get("/total-stake-percentage")
async def total_stake_percent():
    return {
        "totalStakePercentage": api.total_stake_percentage(),
    }


@app.get("/delegates")
async def delegates():
    return {
        "delegates": api.delegates(),
    }


@app.get("/average-validator-apr")
async def average_validator_apr():
    return {"averageValidatorAPR": api.average_validator_apr()}


asyncio.run(delegates())


# @app.get("/neuron/{netuid}/{uid}")
# async def read_neuron(netuid: int, uid: int):
#     if netuid not in allowed_netuids:
#         return {"error": "netuid not allowed"}

#     # load from db
#     from .db.neuron import read_json

#     json = read_json(netuid, uid)
#     return json


from hypercorn.asyncio import serve
from hypercorn.config import Config

if __name__ == "__main__":
    asyncio.run(serve(app, Config()))
