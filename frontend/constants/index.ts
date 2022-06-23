import { JSBI, Percent } from "@ubeswap/sdk";

export const ZERO = JSBI.BigInt("0");
export const ONE = JSBI.BigInt("0");
export const BLOCKS_PER_YEAR = JSBI.BigInt("6311520");
export const SECONDS_PER_YEAR = JSBI.BigInt(365 * 24 * 60 * 60);
export const SECONDS_PER_WEEK = JSBI.BigInt(7 * 24 * 60 * 60);

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);

export const DECIMALS_18 = JSBI.exponentiate(
  JSBI.BigInt("10"),
  JSBI.BigInt("18")
);

export const FORNO_WEBSOCKET = "wss://forno.celo.org/ws"; //"wss://forno.celo.org/ws";
export const APP_USERNAME = "MNEMONIC";
export const STORAGE_KEY = "persist:root";
export const SWAPPA_ROUTER_ADDRESS =
  "0xF35ed7156BABF2541E032B3bB8625210316e2832";
export const UBESWAP_SUBGRAPH =
  "https://api.thegraph.com/subgraphs/name/ubeswap/ubeswap";

export const CUSD_ADDRESS = "0x765DE816845861e75A25fCA122bb6898B8B1282a";
export const ONE_CLICK_FARM = "0x046724119391bC6D402547568e7C6E7CA063cf1e";
export const LINK_SCHEME = "node-wallet";
export const WALLET_FACTORY = "0x7cEEa70d90DCaF872b53861Cc53Bf3009e4a3a7D";
export const MICRO_LOAN_FACTORY = "0x6A3EB21cbDDa1141caD7aAB86235846BAe797c9A";
export const ERC721_CREDIT = "0xe66cc3bADA82E0D442bB113C181b17b30Ba8e816";

export const API_BASE = "https://us-central1-node-wallet.cloudfunctions.net";

export const formatAllPricesQuery = () => `${API_BASE}/api/Prices`;
export const formatHistoricalPortfolioQuery = (
  address: string,
  interval: number,
  timeframe: string
) =>
  `${API_BASE}/api/Account/HistoricalBalances?address=${address}&interval=${interval}&timeframe=${timeframe}`;

export const formatHistoricalPricesQuery = (
  address: string,
  interval: number,
  timeframe: string
) =>
  `${API_BASE}/api/Prices/${address}?interval=${interval}&period=${timeframe}`;

export const formatInitPortfolioUpdate = () =>
  `${API_BASE}/api/Account/HistoricalBalances`;

export enum DateRange {
  "1H" = 0,
  "1D" = 1,
  "1W" = 7,
  "1M" = 30,
  "1Y" = 365,
  ALL = -1,
}

export const dateRangeToReadable: { readonly [range in DateRange]: string } = {
  [DateRange["1D"]]: "day",
  [DateRange["1H"]]: "hour",
  [DateRange["1M"]]: "month",
  [DateRange["1W"]]: "week",
  [DateRange["1Y"]]: "year",
  [DateRange.ALL]: "all",
};

export const dateRangeToDefaultInterval: {
  readonly [range in DateRange]: number;
} = {
  [DateRange["1D"]]: 1,
  [DateRange["1H"]]: 0,
  [DateRange["1M"]]: 3,
  [DateRange["1W"]]: 1,
  [DateRange["1Y"]]: 4,
  [DateRange.ALL]: 4,
};

export type HexString = string;
