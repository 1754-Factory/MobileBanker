import { JSBI } from "@ubeswap/sdk";
export const bigIntToJSBI = (num: BigInt | undefined, fallBack = "0") => {
  return JSBI.BigInt(num?.toString() ?? fallBack);
};
