const { ApiPromise, WsProvider } = require("@polkadot/api");

const url = "wss://ws.taotensor.com";

async function main() {
  try {
    // Connect to the chain
    const wsProvider = new WsProvider(url);
    const api = await ApiPromise.create({ provider: wsProvider });

    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version(),
    ]);
    console.log(
      `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
    );

    // Fetch the current head block number
    const currentHead = await api.rpc.chain.getFinalizedHead();
    const currentHeadBlock = await api.rpc.chain.getBlock(currentHead);
    const currentHeadNumber = currentHeadBlock.block.header.number.toNumber();

    // Start from block 0
    let blockNumber = 100000;

    while (blockNumber <= currentHeadNumber) {
      try {
        // Fetch the block by number (block hash)
        const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
        const block = await api.rpc.chain.getBlock(blockHash);

        // Fetch the events for the block
        const events = await api.query.system.events.at(blockHash);

        console.log(`Block #${blockNumber} blockHash: ${blockHash}`);
        events.forEach(({ event }) => {
          console.log(`\t${event.section}:${event.method}:: ${event.data}`);
        });

        // Move on to the next block
        blockNumber++;
      } catch (error) {
        console.error(`Failed to process block #${blockNumber}:`, error);
        // If you want the script to exit on error, uncomment the next line:
        // throw error;
      }
    }

    console.log("Done processing all blocks!");
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}

main().catch(console.error);
