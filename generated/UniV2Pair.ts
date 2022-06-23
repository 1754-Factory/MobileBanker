/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Burn = ContractEventLog<{
  sender: string;
  amount0: string;
  amount1: string;
  to: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Mint = ContractEventLog<{
  sender: string;
  amount0: string;
  amount1: string;
  0: string;
  1: string;
  2: string;
}>;
export type Swap = ContractEventLog<{
  sender: string;
  amount0In: string;
  amount1In: string;
  amount0Out: string;
  amount1Out: string;
  to: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type Sync = ContractEventLog<{
  reserve0: string;
  reserve1: string;
  0: string;
  1: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface UniV2Pair extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): UniV2Pair;
  clone(): UniV2Pair;
  methods: {
    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    MINIMUM_LIQUIDITY(): NonPayableTransactionObject<string>;

    PERMIT_TYPEHASH(): NonPayableTransactionObject<string>;

    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      value: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(owner: string): NonPayableTransactionObject<string>;

    burn(to: string): NonPayableTransactionObject<{
      amount0: string;
      amount1: string;
      0: string;
      1: string;
    }>;

    decimals(): NonPayableTransactionObject<string>;

    factory(): NonPayableTransactionObject<string>;

    getReserves(): NonPayableTransactionObject<{
      reserve0: string;
      reserve1: string;
      blockTimestampLast: string;
      0: string;
      1: string;
      2: string;
    }>;

    initialize(arg0: string, arg1: string): NonPayableTransactionObject<void>;

    kLast(): NonPayableTransactionObject<string>;

    mint(to: string): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    nonces(owner: string): NonPayableTransactionObject<string>;

    permit(
      owner: string,
      spender: string,
      value: number | string | BN,
      deadline: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    price0CumulativeLast(): NonPayableTransactionObject<string>;

    price1CumulativeLast(): NonPayableTransactionObject<string>;

    skim(to: string): NonPayableTransactionObject<void>;

    swap(
      amount0Out: number | string | BN,
      amount1Out: number | string | BN,
      to: string,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    sync(): NonPayableTransactionObject<void>;

    token0(): NonPayableTransactionObject<string>;

    token1(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      to: string,
      value: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      from: string,
      to: string,
      value: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Burn(cb?: Callback<Burn>): EventEmitter;
    Burn(options?: EventOptions, cb?: Callback<Burn>): EventEmitter;

    Mint(cb?: Callback<Mint>): EventEmitter;
    Mint(options?: EventOptions, cb?: Callback<Mint>): EventEmitter;

    Swap(cb?: Callback<Swap>): EventEmitter;
    Swap(options?: EventOptions, cb?: Callback<Swap>): EventEmitter;

    Sync(cb?: Callback<Sync>): EventEmitter;
    Sync(options?: EventOptions, cb?: Callback<Sync>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Burn", cb: Callback<Burn>): void;
  once(event: "Burn", options: EventOptions, cb: Callback<Burn>): void;

  once(event: "Mint", cb: Callback<Mint>): void;
  once(event: "Mint", options: EventOptions, cb: Callback<Mint>): void;

  once(event: "Swap", cb: Callback<Swap>): void;
  once(event: "Swap", options: EventOptions, cb: Callback<Swap>): void;

  once(event: "Sync", cb: Callback<Sync>): void;
  once(event: "Sync", options: EventOptions, cb: Callback<Sync>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
