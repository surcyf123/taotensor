export const site_name = "τaoτensor";

export const foundationHotkey =
  "5F4tQyWrhfGVcNhoqeiNsR6KjD4wMZ2kfhLj4oHYuyHbZAc3";
export const foundationColdkey =
  "5Ccmf1dJKzGtXX7h17eN72MVMRsFwvYjPVmkXPUaapczECf6";

/** Block time in seconds */
export const blockTime = 12;

/**
 * If this is the owner of a key, then it's a coldkey, otherwise it's a hotkey
 */
export const coldkeyOwner = "5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM";
/** How many blocks a a hotkey is immune from deregistration after joining the network. */
export const ImmunityPeriod = 4096;

export const finney_wss = "wss://entrypoint-finney.opentensor.ai";

export type Netuid = (typeof netuids)[number];
export const netuids = [1, 3, 11, 21] as const;
export const netuidColors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff6347",
] as const;
export const netuidLabels = [
  "netuid 1",
  "netuid 3",
  "netuid 11",
  "netuid 21",
] as const;

export const getNetuidIndex = (netuid: Netuid) => {
  return netuids.indexOf(netuid);
};
export const getNetuidLabel = (netuid: Netuid) => {
  return netuidLabels[getNetuidIndex(netuid)];
};
export const getNetuidColor = (netuid: Netuid) => {
  return netuidColors[getNetuidIndex(netuid)];
};

export const netuid_labels = [
  {
    label: "netuid 1",
    key: "1",
  },
  {
    label: "netuid 3",
    key: "3",
  },
  {
    label: "netuid 11",
    key: "11",
  },
  {
    label: "netuid 21",
    key: "21",
  },
] as const;

export const hyperParametersList = [
  "Rho",
  "Kappa",
  "Difficulty",
  "Burn",
  "ImmunityPeriod",
  "ValidatorBatchSize",
  "ValidatorPruneLen",
  "ValidatorLogitsDivergence",
  "ValidatorSequenceLength",
  "ValidatorEpochsPerReset",
  "ValidatorEpochLen",
  "ValidatorExcludeQuantile",
  "MaxAllowedValidators",
  "MinAllowedWeights",
  "MaxWeightsLimit",
  "ScalingLawPower",
  "SynergyScalingLawPower",
  "SubnetworkN",
  "MaxAllowedUids",
  "BlocksSinceLastStep",
  "Tempo",
] as const;

export const raoFactor = 1e9;
