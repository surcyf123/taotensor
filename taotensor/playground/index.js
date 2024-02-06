const { ApiPromise, WsProvider } = require("@polkadot/api");

const BATCH_SIZE = 100;

async function main() {
  const provider = new WsProvider("wss://entrypoint-finney.opentensor.ai");
  const api = await ApiPromise.create({ provider });

  const currentBlockNumber = parseInt((await api.rpc.chain.getHeader()).number);

  for (
    let blockNumber = 400000 + 183;
    blockNumber <= currentBlockNumber;
    blockNumber += BATCH_SIZE
  ) {
    const batchEnd = Math.min(blockNumber + BATCH_SIZE, currentBlockNumber);

    const batchPromises = [];

    for (let i = blockNumber; i < batchEnd; i++) {
      batchPromises.push(api.rpc.chain.getBlockHash(i));
    }

    const blockHashes = await Promise.all(batchPromises);
    console.log(blockNumber, "Fetched", blockHashes.length, "blocks");

    for (let i = 0; i < blockHashes.length; i++) {
      const events = await api.query.system.events.at(blockHashes[i]);

      for (const { event } of events) {
        if (
          event.section === "subtensorModule" &&
          event.method !== "WeightsSet" &&
          event.method !== "AxonServed"
        ) {
          console.log(event.section, event.method);
          console.log(`Event found in block ${blockNumber + i}: ${event}`);
        }
      }
    }
  }
}

main().catch(console.error);
