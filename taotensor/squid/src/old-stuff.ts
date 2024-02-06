export interface NeuronMetadata {
  version: number;
  ip: bigint;
  port: number;
  ipType: number;
  uid: number;
  modality: number;
  hotkey: Uint8Array;
  coldkey: Uint8Array;
  active: number;
  lastUpdate: bigint;
  priority: bigint;
  stake: bigint;
  rank: bigint;
  trust: bigint;
  consensus: bigint;
  incentive: bigint;
  dividends: bigint;
  emission: bigint;
  bonds: [number, bigint][];
  weights: [number, number][];
}
