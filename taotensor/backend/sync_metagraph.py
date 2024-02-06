import time

import bittensor

from .db.metagraph import Metagraph


def to_float(x, format_str="{:.10f}"):
    return float(x)


def tao_to_rao(rao):
    return rao * 1000000000


def metagraph_to_json(netuid: int):
    subtensor = bittensor.subtensor()
    metagraph: bittensor.metagraph = subtensor.metagraph(netuid=netuid)
    difficulty = subtensor.difficulty(netuid)
    subnet_emission = bittensor.Balance.from_tao(
        subtensor.get_emission_value_by_subnet(netuid)
    )
    total_issuance = bittensor.Balance.from_tao(subtensor.total_issuance())

    TABLE_DATA = []
    total_stake = 0.0
    total_rank = 0.0
    total_validator_trust = 0.0
    total_trust = 0.0
    total_consensus = 0.0
    total_incentive = 0.0
    total_dividends = 0.0
    total_emission = 0
    for uid in metagraph.uids:
        neuron: bittensor.NeuronInfoLite = metagraph.neurons[uid]
        ep = metagraph.axons[uid]
        row = {
            "uid": neuron.uid,
            "stake": to_float(metagraph.total_stake[uid], "{:.2f}"),
            "rank": to_float(metagraph.ranks[uid]),
            "trust": to_float(metagraph.trust[uid]),
            "consensus": to_float(metagraph.consensus[uid]),
            "incentive": to_float(metagraph.incentive[uid]),
            "dividends": to_float(metagraph.dividends[uid]),
            "emission": to_float(metagraph.emission[uid]),
            "vtrust": to_float(metagraph.validator_trust[uid]),
            "isValidator": 1 if metagraph.validator_permit[uid].item() else 0,
            "updated": (metagraph.block.item() - metagraph.last_update[uid].item()),
            "active": metagraph.active[uid].item(),
            "axon": ep.ip + ":" + str(ep.port) if ep.is_serving else None,
            "hotkey": ep.hotkey,
            "coldkey": ep.coldkey,
        }
        total_stake += metagraph.total_stake[uid]
        total_rank += metagraph.ranks[uid]
        total_validator_trust += metagraph.validator_trust[uid]
        total_trust += metagraph.trust[uid]
        total_consensus += metagraph.consensus[uid]
        total_incentive += metagraph.incentive[uid]
        total_dividends += metagraph.dividends[uid]
        total_emission += to_float(metagraph.emission[uid])
        TABLE_DATA.append(row)
    total_neurons = len(metagraph.uids)

    # TABLE_DATA to json with keys
    import json

    table_json = json.dumps(
        {
            "difficulty": str(difficulty),
            "subnet_emission": str(subnet_emission),
            "total_issuance": str(total_issuance),
            "total_neurons": str(total_neurons),
            "total_stake": "{:.5f}".format(total_stake),
            "total_rank": "{:.5f}".format(total_rank),
            "total_validator_trust": "{:.5f}".format(total_validator_trust),
            "total_trust": "{:.5f}".format(total_trust),
            "total_consensus": "{:.5f}".format(total_consensus),
            "total_incentive": "{:.5f}".format(total_incentive),
            "total_dividends": "{:.5f}".format(total_dividends),
            "total_emission": str(total_emission),
            "table_data": TABLE_DATA,
        }
    )
    return table_json


def sync(netuid: int):
    print("Syncing metagraph ", netuid, "...")
    json_data = metagraph_to_json(netuid)
    try:
        # Try to retrieve the Metagraph object with the given netuid
        metagraph = Metagraph.get(Metagraph.netuid == netuid)
        # If found, update json_data
        metagraph.json_data = json_data
        metagraph.last_update = int(time.time())
        metagraph.save()
    except Metagraph.DoesNotExist:
        # If not found, create a new one
        Metagraph.create(
            netuid=netuid, json_data=json_data, last_update=int(time.time())
        )


def sync_all():
    for netuid in [1, 3, 11]:
        sync(netuid)


def sync_continuously():
    # Run in a separate thread
    def loop():
        while True:
            try:
                sync_all()
            except Exception as e:
                print("Error syncing metagraph: ", e)
                time.sleep(7)
            time.sleep(3)

    import threading

    thread = threading.Thread(target=loop, daemon=True)
    thread.start()
    return thread


if __name__ == "__main__":
    sync_all()
