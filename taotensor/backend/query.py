import time
from concurrent.futures import ThreadPoolExecutor

# Print time the import took
start = time.time()
from bittensor import subtensor, Subtensor

end = time.time()
print(f"Bittensor import took {end - start} seconds")

custom_endpoint = "ws://161.97.157.248:9944"

# s: subtensor = subtensor(chain_endpoint=custom_endpoint)
s: subtensor = subtensor()


def get_delegates():
    return s.get_delegates()


def run_io_tasks_in_parallel(tasks):
    with ThreadPoolExecutor() as executor:
        running_tasks = [executor.submit(task) for task in tasks]
        for running_task in running_tasks:
            running_task.result()


# Query took 42.22021722793579 seconds
class Burn:
    def __init__(self):
        print("Initializing Burn")
        self.s: Subtensor = subtensor(chain_endpoint=custom_endpoint)
        # self.s: Subtensor = subtensor()

    def get_for_block(self, netuid: int, block_number: int):
        # print(f"Block: {block_number}")

        d = self.s.substrate.query(
            module="SubtensorModule",
            storage_function="Burn",
            params=[netuid],
            block_hash=self.s.substrate.get_block_hash(block_number),
        )
        # print({"block": block_number, "value": d.value})
        return {"block": block_number, "value": d.value}

    # get for block range
    def get_for_block_range(self, netuid: int, block_range: range):
        tasks = []
        burn_data = []
        with ThreadPoolExecutor(max_workers=1) as executor:
            # submit tasks and process results
            for result in executor.map(
                lambda x: self.get_for_block(netuid, x), block_range
            ):
                print("Result", result)
        return burn_data


# s.query_subtensor("Burn", 430_000, [netuid]).value

burn = Burn()
# burn.get_for_block_range(1, range(462_000, 462_906))
burn.get_for_block(1, 160_000)
print("Starting query")
start = time.time()
burn.get_for_block_range(1, range(160_000, 160_020))
end = time.time()
print(f"Query took {end - start} seconds")
pass
