import * as ss58 from "@subsquid/ss58";

import { BlockHandlerContext } from "@subsquid/substrate-processor";

import { Coldkey, Hotkey, Neuron } from "./model";

import { Store } from "@subsquid/typeorm-store";

import {
  // SubtensorModuleNeuronsStorage,
  // SubtensorModuleNStorage,
  SystemAccountStorage,
} from "./types/storage";
// import { NeuronMetadata } from "./types/v121";

interface SliceProps {
  arr: number[];
  chunkSize: number;
}

interface TransferEvent {
  id: string;
  blockNumber: number;
  timestamp: Date;
  extrinsicHash?: string;
  from: string;
  to: string;
  amount: bigint;
  fee?: bigint;
}

type EntityConstructor<T> = {
  new (...args: any[]): T;
};

function makeid(
  coldkeyAddress: string,
  hotkeyAddress: string,
  uid: number
): string {
  let result = coldkeyAddress + "-" + hotkeyAddress;

  return result;
}

function sliceIntoChunks({ arr, chunkSize }: SliceProps) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export async function getOrCreate<T extends { id: string }>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  id: string
): Promise<T> {
  let entity = await store.get<T>(EntityConstructor, {
    // @ts-ignore
    where: { id },
  });

  if (entity == null) {
    entity = new EntityConstructor();
    entity.id = id;
  }

  return entity;
}

function getColdkey(m: Map<string, Coldkey>, id: string): Coldkey {
  let coldkey = m.get(id);
  if (coldkey == null) {
    coldkey = new Coldkey();
    coldkey.id = id;

    m.set(id, coldkey);
  }
  return coldkey;
}

function getHotkey(m: Map<string, Hotkey>, id: string): Hotkey {
  let hotkey = m.get(id);
  if (hotkey == null) {
    hotkey = new Hotkey();
    hotkey.id = id;

    m.set(id, hotkey);
  }
  return hotkey;
}

function getNeuron(m: Map<string, Neuron>, id: string): Neuron {
  let neuron = m.get(id);
  if (neuron == null) {
    neuron = new Neuron();

    neuron.id = id;

    m.set(id, neuron);
  }
  return neuron;
}

// async function map_neuron(
//   ctx: BlockHandlerContext<Store, {}>,
//   neurons: NeuronMetadata[]
// ) {
//   const system_ctx = new SystemAccountStorage(ctx);

//   let coldkey_collection = new Array<Coldkey>();
//   let hotkey_collection = new Array<Hotkey>();
//   let neuron_collection = new Array<Neuron>();

//   let coldkeys_balances: Uint8Array[] = [];

//   neurons.map((neuron) => {
//     coldkeys_balances.push(neuron.coldkey);
//   });

//   const balances = await system_ctx.getManyAsV121(coldkeys_balances);

//   for (let i = 0; i < neurons.length; i++) {
//     const neuron = neurons[i];
//     const {
//       uid,
//       stake,
//       rank,
//       incentive,
//       trust,
//       consensus,
//       dividends,
//       emission,
//       ip,
//       port,
//       version,
//     } = neuron;
//     const last_updated = neuron.lastUpdate;
//     const coldkeyAddress = ss58.codec(42).encode(neuron.coldkey);
//     const hotkeyAddress = ss58.codec(42).encode(neuron.hotkey);
//     const blockNum = ctx.block.height;

//     const neuron_id = makeid(coldkeyAddress, hotkeyAddress, uid);

//     let sck;
//     let shk;
//     let sn;

//     // TODO: make this block of code more efficient
//     try {
//       sck = await ctx.store
//         .findBy(Coldkey, { id: coldkeyAddress })
//         .then((coldkey) => {
//           return new Map<string, Coldkey>(coldkey.map((c) => [c.id, c]));
//         });
//     } catch (error) {
//       sck = new Map<string, Coldkey>();
//     }

//     try {
//       shk = await ctx.store
//         .findBy(Hotkey, { id: hotkeyAddress })
//         .then((hotkey) => {
//           return new Map<string, Hotkey>(hotkey.map((h) => [h.id, h]));
//         });
//     } catch (error) {
//       shk = new Map<string, Hotkey>();
//     }

//     try {
//       sn = await ctx.store.findBy(Neuron, { id: neuron_id }).then((neuron) => {
//         return new Map<string, Neuron>(neuron.map((n) => [n.id, n]));
//       });
//     } catch (error) {
//       sn = new Map<string, Neuron>();
//       ctx.log.info("Neuron not found");
//     }

//     let _coldkey = getColdkey(sck, coldkeyAddress);
//     let _hotkey = getHotkey(shk, hotkeyAddress);
//     let _neuron = getNeuron(sn, neuron_id);

//     // Block nums
//     _coldkey.blockNum = blockNum;
//     _hotkey.blockNum = blockNum;
//     _neuron.blockNum = blockNum;

//     // neuron information
//     _neuron.uid = uid;
//     _neuron.stake = stake;
//     _neuron.rank = rank;
//     _neuron.incentive = incentive;
//     _neuron.trust = trust;
//     _neuron.consensus = consensus;
//     _neuron.dividends = dividends;
//     _neuron.emission = emission;
//     _neuron.ip = ip;
//     _neuron.port = port;
//     _neuron.version = version;
//     _neuron.lastUpdated = last_updated;

//     // try {
//     // coldkey information
//     _coldkey.balance = balances[i].data.free;

//     // hotkey information
//     // _hotkey.neuronId = neuron_id

//     // neuron link information
//     _neuron.coldkey = _coldkey;
//     _neuron.hotkey = _hotkey;

//     // ctx.log.info(_neuron)

//     coldkey_collection.push(_coldkey);
//     hotkey_collection.push(_hotkey);
//     neuron_collection.push(_neuron);
//     // } catch (error) {
//     //     ctx.log.info('error')
//     // }
//   }

//   // await ctx.store.save([...coldkey_collection, ...hotkey_collection, ...neuron_collection])

//   return {
//     coldkey_collection: coldkey_collection,
//     hotkey_collection: hotkey_collection,
//     neuron_collection: neuron_collection,
//   };
// }

// export async function sync(ctx: BlockHandlerContext<Store, {}>) {
//   const n_ctx = new SubtensorModuleNStorage(ctx);
//   const n = await n_ctx.getAsV121();

//   const ns = Array.from(Array(n).keys());
//   const uids = sliceIntoChunks({ arr: ns, chunkSize: 512 });

//   const neurons_ctx = new SubtensorModuleNeuronsStorage(ctx);

//   for (let i = 0; i < uids.length; i++) {
//     const neurons = await neurons_ctx.getManyAsV121(uids[i]);
//     console.log("nerurons", neurons);

//     // if (neurons) {
//     const { coldkey_collection, hotkey_collection, neuron_collection } =
//       // @ts-ignore
//       await map_neuron(ctx, neurons);

//     coldkey_collection.map(async (coldkey) => {
//       await ctx.store.save(coldkey);
//     });

//     hotkey_collection.map(async (hotkey) => {
//       await ctx.store.save(hotkey);
//     });

//     neuron_collection.map(async (neuron) => {
//       await ctx.store.save(neuron);
//       // ctx.log.info(neuron)
//     });

//     // }
//   }
// }
