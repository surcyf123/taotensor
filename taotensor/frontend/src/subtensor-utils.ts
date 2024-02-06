import { ApiPromise } from "@polkadot/api";
import {
  coldkeyOwner,
  foundationColdkey,
  netuid_labels,
  netuids,
  raoFactor,
} from "./constants";

/**
 * Portion of rao that is distributed each block step to which subnet
 */
export const getAllNetuidEmissionValues = async (api: ApiPromise) => {
  const emissions = await Promise.all(
    netuids.map((netuid) => {
      return api.query.subtensorModule.emissionValues(netuid);
    })
  );
  return emissions.map((d) => (d.toJSON() as number) / raoFactor) as number[];
};

export const getDifficulties = async (api: ApiPromise) => {
  const difficulties = await Promise.all(
    netuids.map((netuid) => {
      return api.query.subtensorModule.difficulty(netuid);
    })
  );
  return difficulties.map((d) => d.toJSON()) as number[];
};
export const getRecycleAmounts = async (api: ApiPromise) => {
  const r = await Promise.all(
    netuids.map((netuid) => {
      return api.query.subtensorModule.raoRecycledForRegistration(netuid);
    })
  );
  return r.map((d) => d.toJSON()) as number[];
};
export const getBurnAmounts = async (api: ApiPromise) => {
  const r = await Promise.all(
    netuids.map((netuid) => {
      return api.query.subtensorModule.burn(netuid);
    })
  );
  return r.map((d) => d.toJSON()) as number[];
};

function intToIP(intVal: number): string {
  if (intVal < 0 || intVal > 4294967295) {
    // 2^32 - 1
    throw new Error("The passed intVal is not a valid IP int value");
  }

  const octets = [
    (intVal >>> 24) & 255,
    (intVal >>> 16) & 255,
    (intVal >>> 8) & 255,
    intVal & 255,
  ];

  return octets.join(".");
}

export const getDataForAccount = async (api: ApiPromise, address: string) => {
  const [
    account,
    owner,
    totalHotkeyStake,
    totalColdkeyStake,
    delegates,
    foundationColdkeyStake,
    axons,
    prometheus,
  ] = await Promise.all([
    api?.query.system.account(address),
    api?.query.subtensorModule.owner(address),
    api?.query.subtensorModule.totalHotkeyStake(address),
    api?.query.subtensorModule.totalColdkeyStake(address),
    api?.query.subtensorModule.delegates(address),
    api?.query.subtensorModule.stake(address, foundationColdkey),
    Promise.all(
      netuids.map((netuid) => {
        return api?.query.subtensorModule.axons(netuid, address);
      })
    ),
    Promise.all(
      netuids.map((netuid) => {
        api?.query.subtensorModule.prometheus(netuid, "");
      })
    ),
  ]);

  const raw = {
    account,
    owner,
    totalHotkeyStake,
    totalColdkeyStake,
    delegates,
    foundationColdkeyStake,
    axons,
    prometheus,
  };

  // const axonListHuman = axons.map((a) => {
  //   let json = a.toJSON();
  //   // @ts-ignore
  //   if (json && json.ip) {
  //     // @ts-ignore
  //     json.ip = intToIP(json.ip);
  //   }
  //   return json;
  // });
  // const prometheusListHuman = prometheus.map((p) => (p as any)?.toHuman?.());

  // const human = {
  //   account: account.toHuman(),
  //   owner: owner.toHuman(),
  //   totalHotkeyStake: totalHotkeyStake.toHuman(),
  //   totalColdkeyStake: totalColdkeyStake.toHuman(),
  //   delegates: delegates.toHuman(),
  //   foundationColdkeyStake: foundationColdkeyStake.toHuman(),
  //   axons: netuids.map((netuid, i) => ({
  //     netuid: netuid,
  //     axon: axonListHuman[i],
  //   })),
  //   prometheus: netuids.map((netuid, i) => ({
  //     netuid: netuid,
  //     prometheus: prometheusListHuman[i],
  //   })),
  //   prometheusRaw: prometheus,
  // };

  const axonListJson = axons.map((a) => {
    let json = a.toJSON();
    // @ts-ignore
    if (json && json.ip) {
      // @ts-ignore
      json.ip = intToIP(json.ip);
    }
    return json;
  });
  const prometheusListJson = prometheus.map((p) => (p as any)?.toHuman?.());

  const json = {
    account: account.toJSON(),
    owner: owner.toJSON(),
    totalHotkeyStake: totalHotkeyStake.toJSON(),
    totalColdkeyStake: totalColdkeyStake.toJSON(),
    delegates: delegates.toJSON(),
    foundationColdkeyStake: foundationColdkeyStake.toJSON(),
    axons: netuids.map((netuid, i) => ({
      netuid: netuid,
      axon: axonListJson[i],
    })),
    prometheus: netuids.map((netuid, i) => ({
      netuid: netuid,
      prometheus: prometheusListJson[i],
    })),
    prometheusRaw: prometheus,
  };

  // console.log("getDataForAccount", address, { raw, human, json });
  return json;
};

export const getNeuron = async (api, netuid, uid) => {
  // Example query for getNeuronLite method
  const neuronLiteInfo = await api.rpc.neuronInfo.getNeuronLite(netuid, uid);

  // Decode the returned Vec<u8> as NeuronInfoLite
  const neuronLite = api.createType("NeuronInfoLite", neuronLiteInfo);

  console.log(
    `Neuron Lite Info for netuid ${netuid} and uid ${uid}: `,
    neuronLite.toJSON()
  );
  return neuronLite.toJSON();
};
