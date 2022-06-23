import CENTRO_TOKEN_LIST from "@node-fi/default-token-list";
import { ChainId } from "@ubeswap/sdk";

import TokenMetaData from "./TokenMetaData.json";

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

export const metaData: TokenDetails = TokenMetaData.reduce(
  (accum: TokenDetails, cur) => ({
    ...accum,
    [cur.Address]: {
      name: cur.Name,
      symbol: cur.Ticker,
      color: cur.Color,
      stable: cur.Stable === 1,
      description: cur.Description,
      priority: cur.Priority ?? 0,
      basic: cur.Basic,
      gradient: cur.Gradient,
      address: cur.Address,
      type: cur.Type,
    },
  }),
  {}
);

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

const CPUNKS = "0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160";
const CAK = "0x1eCD77075F7504bA849d47DCe4cdC9695f1FE942";
const CESPRESSO = "0x7DD354dB71fbFa060070BC0a05d24F87d24A31B7";
const ARIval = "0xA07467dbc8F9FF849FbF6534462D25986A872D76";
const NODE = "0xE1c361176dD31db653003492eae2Df51D3528207";
const TEST = "0xc1FFBf9aFE4F5a0D6395Cb2c9a6a0B8d9FD561db";

export const WHITE_LISTED_NFTs: { [address: string]: NFT } = {
  [CAK]: {
    name: "Celo Apes Kingdom",
    symbol: "CAK",
    address: "0x1eCD77075F7504bA849d47DCe4cdC9695f1FE942",
  },
  [CPUNKS]: {
    name: "CeloPunks",
    symbol: "CPUNK",
    address: "0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160",
  },
  [NODE]: {
    name: "Node Launch",
    symbol: "NODE",
    address: NODE,
  },
  [ARIval]: {
    name: "ARIval 2022",
    symbol: "ARIval",
    address: ARIval,
  },
  [TEST]: {
    name: "Test",
    symbol: "TST",
    address: TEST,
  },

  // [ARI]: {
  //   name: "Node Pass",
  //   symbol: "ARI",
  //   address: ARI,
  // },

  // [CESPRESSO]: {
  //   name: "Celo Espresso",
  //   symbol: "CESPRESSO",
  //   address: CESPRESSO,
  // },
};

export const DEFAULT_NFT_METADATA: {
  [address: string]: { [id: number]: NFT_MetaData };
} = {
  // [CESPRESSO]: {
  // 417: {
  //   id: "417",
  //   imageUri:
  //     "https://ipfs.io/ipfs/QmZwPaCMoFqbgcqRcqdCS5BWUJ7pznmSqBc3gHUzB9wRbL",
  // },
  //   59: {
  //     id: "59",
  //     imageUri:
  //       "https://ipfs.io/ipfs/QmRqtnWinLe7qdYCa9PyvHPnnswdPMXumbTZYNggApw9kK",
  //   },
  // },
  [CPUNKS]: {
    9997: {
      id: "9997",
      imageUri: "https://celopunks.club/nft/9997.png",
    },
    // 9976: {
    //   id: "9976",
    //   imageUri:
    //     "https://ipfs.io/ipfs/QmdKZj1v7cVYuFPZjg5xCVGrsDzW4rB29SzZZahHBDi3dw/9976.png",
    // },
    // 9966: {
    //   id: "9966",
    //   imageUri: "https://celopunks.club/nft/9966.png",
    // },
    749: {
      id: "749",
      imageUri: "https://celopunks.club/nft/749.png",
    },
  },
  [CAK]: {
    6: {
      id: "6",
      imageUri:
        "https://ipfs.io/ipfs/bafybeiasnbk7bztvmytiqf2a5aw5jmivvnxhrdwtp72ihbpjrlh33g32ee/apes/6.png",
    },
    // 10: {
    //   id: "10",
    //   imageUri:
    //     "https://ipfs.io/ipfs/bafybeiasnbk7bztvmytiqf2a5aw5jmivvnxhrdwtp72ihbpjrlh33g32ee/apes/10.png",
    // },
    // 3: {
    //   id: "3",
    //   imageUri:
    //     "https://ipfs.io/ipfs/bafybeiasnbk7bztvmytiqf2a5aw5jmivvnxhrdwtp72ihbpjrlh33g32ee/apes/3.png",
    // },
  },
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
