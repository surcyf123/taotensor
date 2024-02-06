import { ApiPromise, WsProvider } from "@polkadot/api";

import { finney_wss } from "@/constants";
import { createContext, useEffect, useState } from "react";
import React from "react";

interface State {
  api?: ApiPromise;
}

const PolkadotJSContext = createContext<State>(null!);

enum ChainDataType {
  NeuronInfo = 1,
  SubnetInfo = 2,
  DelegateInfo = 3,
  NeuronInfoLite = 4,
  DelegatedInfo = 5,
}

const connect = async () => {
  // connect to polkadot
  const wsProvider = new WsProvider(finney_wss);
  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      DelegateInfo: {
        delegate_ss58: "AccountId",
        take: "Compact<u16>",
        nominators: "Vec<(AccountId, Compact<u64>)>",
        owner_ss58: "AccountId",
        registrations: "Vec<Compact<u16>>",
        validator_permits: "Vec<Compact<u16>>",
        return_per_1000: "Compact<u64>",
        total_daily_return: "Compact<u64>",
      },
      SubnetInfo: {
        netuid: "Compact<u16>",
        rho: "Compact<u16>",
        kappa: "Compact<u16>",
        difficulty: "Compact<u64>",
        immunityPeriod: "Compact<u16>",
        validatorBatchSize: "Compact<u16>",
        validatorSequenceLength: "Compact<u16>",
        validatorEpochsPerReset: "Compact<u16>",
        validatorEpochLength: "Compact<u16>",
        maxAllowedValidators: "Compact<u16>",
        minAllowedWeights: "Compact<u16>",
        maxWeightsLimit: "Compact<u16>",
        scalingLawPower: "Compact<u16>",
        synergyScalingLawPower: "Compact<u16>",
        subnetworkN: "Compact<u16>",
        maxAllowedUids: "Compact<u16>",
        blocksSinceLastStep: "Compact<u64>",
        tempo: "Compact<u16>",
        networkModality: "Compact<u16>",
        networkConnect: "Vec<[u16; 2]>",
        emissionValues: "Compact<u64>",
        burn: "Compact<u64>",
      },
      NeuronInfo: {
        hotkey: "AccountId",
        coldkey: "AccountId",
        uid: "Compact<u16>",
        netuid: "Compact<u16>",
        active: "bool",
        axon_info: "AxonInfo", // This type needs to be defined
        prometheus_info: "PrometheusInfo", // This type needs to be defined
        stake: "Vec<(AccountId, Compact<u64>)>",
        rank: "Compact<u16>",
        emission: "Compact<u64>",
        incentive: "Compact<u16>",
        consensus: "Compact<u16>",
        trust: "Compact<u16>",
        validator_trust: "Compact<u16>",
        dividends: "Compact<u16>",
        last_update: "Compact<u64>",
        validator_permit: "bool",
        weights: "Vec<(Compact<u16>, Compact<u16>)>",
        bonds: "Vec<(Compact<u16>, Compact<u16>)>",
        pruning_score: "Compact<u16>",
      },
      NeuronInfoLite: {
        hotkey: "AccountId",
        coldkey: "AccountId",
        uid: "Compact<u16>",
        netuid: "Compact<u16>",
        active: "bool",
        axon_info: "AxonInfo", // This type needs to be defined
        prometheus_info: "PrometheusInfo", // This type needs to be defined
        stake: "Vec<(AccountId, Compact<u64>)>",
        rank: "Compact<u16>",
        emission: "Compact<u64>",
        incentive: "Compact<u16>",
        consensus: "Compact<u16>",
        trust: "Compact<u16>",
        validator_trust: "Compact<u16>",
        dividends: "Compact<u16>",
        last_update: "Compact<u64>",
        validator_permit: "bool",
        pruning_score: "Compact<u16>",
      },
      PrometheusInfo: {
        block: "u64",
        version: "u32",
        ip: "u128",
        port: "u16",
        ip_type: "u8",
      },
      AxonInfo: {
        block: "u64",
        version: "u32",
        ip: "u128",
        port: "u16",
        ip_type: "u8",
        protocol: "u8",
        placeholder1: "u8",
        placeholder2: "u8",
      },
    },
    rpc: {
      delegateInfo: {
        getDelegates: {
          description: "Get delegates",
          params: [],
          type: "(DelegateInfo, Compact<u64>)",
        },
        getDelegate: {
          description: "Get delegate",
          params: [
            { name: "delegate_account_vec", type: "Vec<u8>" },
            // { name: "at", type: "Option<BlockHash>", isOptional: true },
          ],
          type: "Vec<u8>",
        },
        getDelegated: {
          description: "Get delegate",
          params: [
            { name: "delegate_account_vec", type: "Vec<u8>" },
            // { name: "at", type: "Option<BlockHash>", isOptional: true },
          ],
          type: "Vec<u8>",
        },
      },
      subnetInfo: {
        getSubnetInfo: {
          description: "Get subnet information by netuid",
          params: [{ name: "netuid", type: "u16" }],
          type: "Vec<u8>",
        },
        getSubnetsInfo: {
          description: "Get information for all subnets",
          params: [],
          type: "Vec<u8>",
        },
      },
      neuronInfo: {
        getNeuronsLite: {
          description: "Get neurons lite by netuid",
          params: [{ name: "netuid", type: "u16" }],
          type: "Vec<u8>",
        },
        getNeuronLite: {
          description: "Get neuron lite by netuid and uid",
          params: [
            { name: "netuid", type: "u16" },
            { name: "uid", type: "u16" },
          ],
          type: "Vec<u8>",
        },
        getNeurons: {
          description: "Get neurons by netuid",
          params: [{ name: "netuid", type: "u16" }],
          type: "Vec<u8>",
        },
        getNeuron: {
          description: "Get neuron by netuid and uid",
          params: [
            { name: "netuid", type: "u16" },
            { name: "uid", type: "u16" },
          ],
          type: "Vec<u8>",
        },
      },
    },
  });
  await api.isReady;
  return api;
};

export const usePolkadot = () => React.useContext(PolkadotJSContext);
export const PolkadotProvider = ({ children }) => {
  const [api, setApi] = useState<ApiPromise>();

  // Subscribe to balance changes for our account
  useEffect(() => {
    let unsubscribe;
    (async () => {
      const _api = await connect();
      setApi(_api);
      unsubscribe = () => _api.disconnect();
    })();
    return () => unsubscribe();
  }, []);

  return (
    <PolkadotJSContext.Provider value={{ api }}>
      {children}
    </PolkadotJSContext.Provider>
  );
};
