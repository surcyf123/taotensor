import * as ss58 from "@subsquid/ss58";

export const ss58Encode = (raw: Uint8Array) => {
  return ss58.codec(42).encode(raw);
};
