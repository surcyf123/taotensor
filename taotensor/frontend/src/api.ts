const apiBase = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000/";
const fetchJson = async (route: string, options?: RequestInit) => {
  const response = await fetch(apiBase + route, options);
  const data = await response.json();
  return data;
};

export const api = {
  get: {
    metagraph: async (netuid: number) => {
      return fetchJson("metagraph/" + netuid);
    },
    transferFee: async () => {
      return fetchJson("transfer-fee");
    },
    totalStake: async () => {
      return fetchJson("total-stake");
    },
    totalIssuance: async () => {
      return fetchJson("total-issuance");
    },
    totalStakePercentage: async () => {
      return fetchJson("total-stake-percentage");
    },
    averageValidatorAPR: async () => {
      return fetchJson("average-validator-apr");
    },
  },
};
