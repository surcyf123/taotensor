// dotenv
import dotenv from "dotenv";
dotenv.config();

import { SubstrateProcessor } from "@subsquid/substrate-processor";

import { Coldkey, Transfer } from "./model";

import { TypeormDatabase } from "@subsquid/typeorm-store";

import { getOrCreate } from "./stuff";
import { BalancesTransferEvent } from "./types_nakamoto/events";

import { archiveURL, chainURL } from "./constants";
import { ss58Encode } from "./utils";

/** PROCESSOR */

const processor = new SubstrateProcessor(new TypeormDatabase());

console.log(
  "Starting processor with chainURL",
  chainURL,
  "archiveURL",
  archiveURL
);

processor.setDataSource({
  archive: archiveURL,
  chain: chainURL,
});

// hacky way to get from types.json from src folder when built to lib folder
processor.setTypesBundle(__dirname + "/../src/types.json");

const blockStart = parseInt(process.env.PROCESSOR_BLOCK_START || "0");
processor.setBlockRange({ from: blockStart });
interface LatestAmounts {
  burn?: bigint;
  difficulty?: bigint;
  [key: string]: bigint | undefined;
}

processor.addEventHandler("Balances.Transfer", async (ctx) => {
  const event = new BalancesTransferEvent(ctx);

  let from: any,to: any,amount: any
  let _transfer
  if (event.isV100) {
    _transfer = event.asV100;
    [from, to, amount] = _transfer;
  } else if (event.isV102) {
    _transfer = event.asV102;
    from = _transfer.from
    to = _transfer.to
    amount = _transfer.amount

  }
  // ctx.log.info("Balances.Transfer" + _transfer.toString());

  if (_transfer) {
    const fromAddress = ss58Encode(from);
    const toAddress = ss58Encode(to);

    const fromAcc = await getOrCreate(ctx.store, Coldkey, fromAddress);
    fromAcc.balance = fromAcc.balance || 0n;
    fromAcc.balance -= amount;
    fromAcc.blockNum = ctx.block.height;
    await ctx.store.save(fromAcc);

    const toAcc = await getOrCreate(ctx.store, Coldkey, toAddress);
    toAcc.balance = toAcc.balance || 0n;
    toAcc.balance += amount;
    toAcc.blockNum = ctx.block.height;
    await ctx.store.save(toAcc);

    let transfer = new Transfer({
      id: ctx.event.id,
      blockHash: ctx.block.hash,
      from: fromAcc,
      to: toAcc,
      amount: amount,
      blockNum: ctx.block.height,
      timestamp: BigInt(ctx.block.timestamp),
    });

    await ctx.store.save(transfer);
  }
});

processor.run();
