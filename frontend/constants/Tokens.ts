import CENTRO_TOKEN_LIST from "@node-fi/default-token-list";
import { TokenConfig } from "@node-fi/react-native-sdk";
import { ChainId } from "@ubeswap/sdk";

type TokenDetails = {
  [address: string]: {
    name: string;
    symbol: string;
    color: string;
    stable: boolean;
    description: string;
    priority: number;
    basic?: boolean;
    gradient?: string[];
    type?: string[];
    address: string;
  };
};

export const SUPPORTED_TOKENS: readonly string[] = [
  "0x122013fd7dF1C6F636a5bb8f03108E876548b455",
  "0x46c9757C5497c5B1f2eb73aE79b6B67D119B0B58",
  "0x73a210637f6F6B7005512677Ba6B3C96bb4AA44B",
  "0x765DE816845861e75A25fCA122bb6898B8B1282a",
  "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
  "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
];
export const TOKEN_OVERRIDES: readonly TokenConfig[] = [
  {
    address: "0x122013fd7dF1C6F636a5bb8f03108E876548b455",
    name: "Ethereum",
    symbol: "ETH",
  },
  {
    address: "0x73a210637f6F6B7005512677Ba6B3C96bb4AA44B",
    name: "Mobius",
  },
  {
    address: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
    name: "Real",
    symbol: "RL",
  },
  {
    address: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
    name: "Euro",
    symbol: "EUR",
  },
  {
    address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
    name: "US Dollar",
    symbol: "USD",
  },
];

export type NFT = {
  address: string;
  name: string;
  symbol: string;
  owned?: { [id: string]: NFT_MetaData };
};

export type NFT_MetaData = {
  id: string;
  imageUri?: string;
  metadata?: {
    [field: string]: string;
  };
};

export const DEFAULT_TOKEN_COLOR = "#E0EBFF";

export const TokenColors: { [address: string]: string } = {
  ["0x471EcE3750Da237f93B8E339c536989b8978a438"]: "#F4B621", // CELO
  ["0x00400FcbF0816bebB94654259de7273f4A05c762"]: "#8F79C7", // POOF
  ["0x00Be915B9dCf56a3CBE739D9B9c202ca692409EC"]: "#8F79C7", // Ube
  ["0x173234922eB27d5138c5e481be9dF5261fAeD450"]: "#8F79C7", // Allbridge SOL
  ["0x17700282592D6917F6A73D0bF8AcCf4D578c131e"]: "#6A9CE9", // Moo
  ["0xef4229c8c3250C675F21BCefa42f58EfbfF6002a"]: "#6A9CE9", // USDC
  ["0x2DEf4285787d58a2f811AF24755A8150622f4361"]: "#1F191A", // cETH
  ["0x765DE816845861e75A25fCA122bb6898B8B1282a"]: "#16C26D", // cUSD
  ["0x7D00cd74FF385c955EA3d79e47BF06bD7386387D"]: "#F4B621", // mCELO
  ["0x918146359264C492BD6934071c6Bd31C854EDBc3"]: "#16C26D", // mcUSD
  ["0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73"]: "#457FCD", // cEUR
  ["0xE273Ad7ee11dCfAA87383aD5977EE1504aC07568"]: "#457FCD", // mcEUR
  ["0xD629eb00dEced2a080B7EC630eF6aC117e614f1b"]: "#F59508", // cBTC
  ["0xBe50a3013A1c94768A1ABb78c3cB79AB28fc1aCE"]: "#F59508", // wBTC
};

export const defaultDisplayTokens: { [address: string]: string } = {
  "0x765DE816845861e75A25fCA122bb6898B8B1282a": "cUSD",
  "0x46c9757C5497c5B1f2eb73aE79b6B67D119B0B58": "PACT",
  "0xBAAB46E28388d2779e6E31Fd00cF0e5Ad95E327B": "wBTC",
  "0x122013fd7dF1C6F636a5bb8f03108E876548b455": "wETH",
  "0x471EcE3750Da237f93B8E339c536989b8978a438": "CELO",
  "0x173234922eB27d5138c5e481be9dF5261fAeD450": "asSOL",
  "0x00Be915B9dCf56a3CBE739D9B9c202ca692409EC": "UBE",
  "0x00400FcbF0816bebB94654259de7273f4A05c762": "POOF",
  "0x73a210637f6F6B7005512677Ba6B3C96bb4AA44B": "MOBI",
  "0x17700282592D6917F6A73D0bF8AcCf4D578c131e": "MOO",
  "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73": "cEUR",
};

export const dispayTokenBlacklist: { [address: string]: string } = {
  ["0x7D00cd74FF385c955EA3d79e47BF06bD7386387D"]: "mCELO", // mCELO
  ["0x918146359264C492BD6934071c6Bd31C854EDBc3"]: "mcUSD", // mcUSD
  ["0xE273Ad7ee11dCfAA87383aD5977EE1504aC07568"]: "mcEUR", // mcEUR
  ["0x9802d866fdE4563d088a6619F7CeF82C0B991A55"]: "mcREAL",
};

export const TOKENS_BY_NAME = CENTRO_TOKEN_LIST.tokens
  .filter((t) => t.chainId === ChainId.MAINNET)
  .reduce(
    (accum: { [name: string]: string }, t) => ({
      ...accum,
      [t.symbol.toUpperCase()]: t.address,
    }),
    {}
  );

export const getTokenAddressByName = (name: string) =>
  TOKENS_BY_NAME[name.toUpperCase()];
/*
  CELO - #F4B621
*/

export const TRANSFER_TOPIC =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
