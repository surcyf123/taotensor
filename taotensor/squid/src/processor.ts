// dotenv
import dotenv from "dotenv";
dotenv.config();

import { SubstrateProcessor } from "@subsquid/substrate-processor";

import {
  Burn,
  Coldkey,
  Transfer,
  NeuronRegistered,
  Hotkey,
  Difficulty,
} from "./model";

import { TypeormDatabase } from "@subsquid/typeorm-store";

import { getOrCreate } from "./stuff";
import {
  BalancesTransferEvent,
  SubtensorModuleBurnSetEvent,
  SubtensorModuleDifficultySetEvent,
  SubtensorModuleNeuronRegisteredEvent,
  SubtensorModuleStakeAddedEvent,
  SubtensorModuleWeightsSetEvent,
} from "./types/events";

import { chainURL, archiveURL } from "./constants";
import {
  SubtensorModuleBurnStorage,
  SubtensorModuleDifficultyStorage,
} from "./types/storage";
import { SubtensorModuleAddStakeCall } from "./types/calls";
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

const blockStart = parseInt(process.env.PROCESSOR_BLOCK_START || "0");
processor.setBlockRange({ from: blockStart });
interface LatestAmounts {
  burn?: bigint;
  difficulty?: bigint;
  [key: string]: bigint | undefined;
}

const latestAmounts: LatestAmounts = {};

/**
 * Values that should be skipped when updating the database
 * This is a hueristic to avoid big values in the graph, that squashes the rest of the values.
 * These values seem to be the result of sudo calls, I'm unsure why they are so big, and if they actually should be displayed.
 */
const valuesToSkip: bigint[] = [
  10000000000000000000n,
  1000000000000000000n,
  100000000000000000n,
  10000000000000000n,
  1000000000000000n,
  100000000000000n,
  10000000000000n,
  1000000000000n,
  100000000000n,
  10000000000n,
];

processor.addPreHook(async (ctx) => {
  const updateRecord = async (
    ModelClass: typeof Burn | typeof Difficulty,
    storageClass:
      | typeof SubtensorModuleBurnStorage
      | typeof SubtensorModuleDifficultyStorage,
    fieldName: string,
    netuid: number
  ) => {
    let latestRecord = latestAmounts[fieldName];

    if (!latestRecord) {
      let record = await ctx.store.findOne(ModelClass, {
        where: { netuid },
        order: { blockNum: "DESC" },
      });
      latestRecord = record?.amount;
      latestAmounts[fieldName] = latestRecord;
    }

    const recordStorage = new storageClass(ctx);
    let recordAmount: bigint = await recordStorage.asV120.get(netuid);

    if (latestRecord !== recordAmount) {
      if (recordAmount && valuesToSkip.includes(recordAmount)) {
        ctx.log.info(
          `Skipping ${fieldName} update at block ${ctx.block.height} for netuid ${netuid} because it's value is ${recordAmount}`
        );
        return;
      }
      // New record amount
      let recordId = ctx.block.height.toString() + "-" + netuid;
      const record = await getOrCreate(ctx.store, ModelClass, recordId);
      record.netuid = netuid;
      record.amount = recordAmount;
      record.blockNum = ctx.block.height;
      record.timestamp = BigInt(ctx.block.timestamp);
      await ctx.store.save(record);
      latestAmounts[fieldName] = recordAmount;
      ctx.log.info(`New ${fieldName} amount: ${recordAmount}`);
    }
  };

  if (ctx.block.height % 50 === 0) {
    ctx.log.info("Syncing burn at block " + ctx.block.height);
    await updateRecord(Burn, SubtensorModuleBurnStorage, "burn-1", 1);
    await updateRecord(Burn, SubtensorModuleBurnStorage, "burn-3", 3);
    await updateRecord(Burn, SubtensorModuleBurnStorage, "burn-11", 11);
    await updateRecord(Burn, SubtensorModuleBurnStorage, "burn-21", 21);
  }
});

processor.addEventHandler("Balances.Transfer", async (ctx) => {
  const event = new BalancesTransferEvent(ctx);
  let _transfer = event.asV120;
  // ctx.log.info("Balances.Transfer" + _transfer.toString());

  if (_transfer) {
    const fromAddress = ss58Encode(_transfer.from);
    const toAddress = ss58Encode(_transfer.to);

    const fromAcc = await getOrCreate(ctx.store, Coldkey, fromAddress);
    fromAcc.balance = fromAcc.balance || 0n;
    fromAcc.balance -= _transfer.amount;
    fromAcc.blockNum = ctx.block.height;
    await ctx.store.save(fromAcc);

    const toAcc = await getOrCreate(ctx.store, Coldkey, toAddress);
    toAcc.balance = toAcc.balance || 0n;
    toAcc.balance += _transfer.amount;
    toAcc.blockNum = ctx.block.height;
    await ctx.store.save(toAcc);

    let transfer = new Transfer({
      id: ctx.event.id,
      blockHash: ctx.block.hash,
      from: fromAcc,
      to: toAcc,
      amount: _transfer.amount,
      blockNum: ctx.block.height,
      timestamp: BigInt(ctx.block.timestamp),
    });

    await ctx.store.save(transfer);
  }
});

// processor.addEventHandler("SubtensorModule.BurnSet", async (ctx) => {
//   ctx.log.info("SubtensorModule.BurnSet");
//   const event = new SubtensorModuleBurnSetEvent(ctx);
//   const [netuid, amount] = event.asV120;

//   const burn = await getOrCreate(ctx.store, Burn, ctx.event.id);
//   burn.netuid = netuid;
//   burn.amount = amount;
//   burn.blockNum = ctx.block.height;
//   burn.timestamp = BigInt(ctx.block.timestamp);

//   await ctx.store.save(burn);
// });

processor.addEventHandler("SubtensorModule.WeightsSet", async (ctx) => {
  const event = new SubtensorModuleWeightsSetEvent(ctx);
  const [a, b] = event.asV120;
  // ctx.log.info("SubtensorModule.WeightsSet " + a + " " + b);
});

processor.addEventHandler("SubtensorModule.NeuronRegistered", async (ctx) => {
  const event = new SubtensorModuleNeuronRegisteredEvent(ctx);
  const [netuid, uid, account] = event.asV120;

  const hotkey = await getOrCreate(ctx.store, Hotkey, ss58Encode(account));
  await ctx.store.save(hotkey);

  console.log(hotkey, ss58Encode(account));

  let neuronRegistered = new NeuronRegistered({
    id: ctx.event.id,
    blockNum: ctx.block.height,
    netuid: netuid,
    uid: uid,
    hotkey: hotkey,
    timestamp: BigInt(ctx.block.timestamp),
  });
  await ctx.store.save(neuronRegistered);
  ctx.log.info(
    "SubtensorModule.NeuronRegistered " + netuid + " " + uid + " " + account
  );
});

processor.addEventHandler("SubtensorModule.DifficultySet", async (ctx) => {
  const event = new SubtensorModuleDifficultySetEvent(ctx);
  const [netuid, difficulty] = event.asV120;
  let burn = new Burn({
    id: ctx.event.id,
    netuid: netuid,
    amount: difficulty,
    blockNum: ctx.block.height,
    timestamp: BigInt(ctx.block.timestamp),
  });
  await ctx.store.save(burn);
  ctx.log.info("SubtensorModule.DifficultySet " + netuid + " " + difficulty);
});

processor.addEventHandler("SubtensorModule.StakeAdded", async (ctx) => {
  const event = new SubtensorModuleStakeAddedEvent(ctx);
  const [account, stakeAmount] = event.asV120;
  // ctx.log.info(
  //   "SubtensorModule.StakeAdded " + ss58Encode(account) + " " + stakeAmount
  // );
});

processor.addCallHandler("SubtensorModule.add_stake", async (ctx) => {
  const { amountStaked, hotkey } = new SubtensorModuleAddStakeCall(ctx).asV120;

  // ctx.log.info(
  //   "SubtensorModule.add_stake " + amountStaked + " " + ss58Encode(hotkey)
  // );
});

processor.run();
