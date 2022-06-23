import { Interface, JsonFragment } from "@ethersproject/abi";
import { ChainId } from "@ubeswap/sdk";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";

import {
  Erc20,
  ERC20Mobi,
  GaugeController,
  LiquidityGaugeV3,
  StakingRewards,
} from "../../generated";
import { CToken } from "../../generated/CToken";
import { HomoraBank } from "../../generated/HomoraBank";
import { IERC721 } from "../../generated/IERC721";
import { MicroLoanFactory } from "../../generated/MicroLoanFactory";
import { SwappaRouterV1 } from "../../generated/SwappaRouterV1";
import { WalletFactory } from "../../generated/WalletFactory";
import {
  MICRO_LOAN_FACTORY,
  SWAPPA_ROUTER_ADDRESS,
  WALLET_FACTORY,
} from "../constants";
import { Reward } from "../constants/FarmInfo";
import {
  MobiusAddresses,
  MoolaAddresses,
  PinnataAddresses,
} from "../constants/ProtocolInfo";
import ERC20MOBI_ABI from "../constants/abis/ERC20Mobi.json";
import GAUGE_CONTROLLER_ABI from "../constants/abis/GaugeController.json";
import ERC721_ABI from "../constants/abis/IERC721.json";
import GAUGE_ABI from "../constants/abis/LiquidityGaugeV3.json";
import MOBIUS_SWAP_ABI from "../constants/abis/MobiusSwap.json";
import STAKING_REWARDS_ABI from "../constants/abis/StakingRewards.json";
import SWAPPA_ABI from "../constants/abis/SwappaRouterV1.json";
import FACTORY_ABI from "../constants/abis/WalletFactory.json";
import C_TOKEN_ABI from "../constants/abis/dahlia/CToken.json";
import BANK_ABI from "../constants/abis/dahlia/HomoraBank.json";
import MICRO_LOAN_ABI from "../constants/abis/micro_loans/MicroLoanFactory.json";
import LENDING_POOL_ABI from "../constants/abis/moola/LendingPool.json";
import { MULTICALL_ABI, MULTICALL_NETWORKS } from "../constants/multicall";

export const GaugeInterface = new Interface(
  (GAUGE_ABI as unknown) as JsonFragment[]
);

export const MobiusSwapInterface = new Interface(
  (MOBIUS_SWAP_ABI as unknown) as JsonFragment[]
);

export const SnxInterface = new Interface(
  (STAKING_REWARDS_ABI as unknown) as JsonFragment[]
);

export const ERC721Interface = new Interface(
  (ERC721_ABI as unknown) as JsonFragment[]
);

export function getMicroLoanFactory(web3: Web3): MicroLoanFactory | null {
  return (new web3.eth.Contract(
    MICRO_LOAN_ABI as AbiItem[],
    MICRO_LOAN_FACTORY
  ) as unknown) as MicroLoanFactory | null;
}

export function getMobiContract(web3: Web3): ERC20Mobi | null {
  return (new web3.eth.Contract(
    ERC20MOBI_ABI,
    MobiusAddresses.mobi
  ) as any) as ERC20Mobi | null;
}

export function getERC721(web3: Web3, address: string): IERC721 | null {
  return (new web3.eth.Contract(
    ERC721_ABI as AbiItem[],
    address
  ) as unknown) as IERC721 | null;
}

export function getErc20Contract(web3: Web3, address: string): Erc20 | null {
  return new web3.eth.Contract(ERC20MOBI_ABI, address) as Erc20;
}

export function getGaugeControllerContract(web3: Web3): GaugeController | null {
  return new web3.eth.Contract(
    GAUGE_CONTROLLER_ABI,
    MobiusAddresses.gaugeController
  ) as GaugeController | null;
}

export function getWalletFactoryContract(web3: Web3): WalletFactory | null {
  return (new web3.eth.Contract(
    FACTORY_ABI,
    WALLET_FACTORY
  ) as unknown) as WalletFactory | null;
}

export function getMulticallContract(
  web3: Web3,
  chainId = ChainId.MAINNET
): Contract | null {
  return (new web3.eth.Contract(
    MULTICALL_ABI,
    MULTICALL_NETWORKS[chainId]
  ) as unknown) as Contract | null;
}

export function getGaugeContract(
  web3: Web3,
  gauge: string
): LiquidityGaugeV3 | null {
  const c: LiquidityGaugeV3 | null = new web3.eth.Contract(
    (GAUGE_ABI as unknown) as AbiItem[],
    gauge
  ) as LiquidityGaugeV3 | null;
  return c;
}

export function getFTokenContract(
  web3: Web3,
  ftokenAddress: string
): CToken | null {
  return (new web3.eth.Contract(
    C_TOKEN_ABI,
    ftokenAddress
  ) as unknown) as CToken | null;
}

export function getPinnataBank(web3: Web3): HomoraBank | null {
  return (new web3.eth.Contract(
    BANK_ABI,
    PinnataAddresses.bank
  ) as unknown) as HomoraBank | null;
}

export function getLendingPool(web3: Web3): Contract | null {
  return (new web3.eth.Contract(
    LENDING_POOL_ABI,
    MoolaAddresses.lendingPool
  ) as any) as Contract | null;
}

export function getStakingContract(
  web3: Web3,
  stakingAddress?: string,
  withSignerIfPossible?: boolean
): StakingRewards | null {
  return new web3.eth.Contract(
    STAKING_REWARDS_ABI,
    stakingAddress
  ) as StakingRewards | null;
}

export function getStakingContracts(
  web3: Web3,
  stakingInfos?: readonly Reward[],
  withSignerIfPossible?: boolean
): readonly StakingRewards[] | null {
  const rewardAddresses:
    | readonly (string | undefined)[]
    | undefined = stakingInfos?.map((stakingInfo) => stakingInfo.contract);
  return rewardAddresses.map((a) =>
    getStakingContract(web3, a, withSignerIfPossible)
  ) as readonly StakingRewards[] | null;
}

export function getSwappaRouterContract(
  web3: Web3,
  address = SWAPPA_ROUTER_ADDRESS
): SwappaRouterV1 {
  return (new web3.eth.Contract(
    (SWAPPA_ABI as unknown) as AbiItem[],
    address
  ) as unknown) as SwappaRouterV1;
}
