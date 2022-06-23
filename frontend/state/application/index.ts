import { createReducer } from "@reduxjs/toolkit";
import { ChainId } from "@ubeswap/sdk";


import { updateBlockNumber } from "./actions";

export type Web3Account = {
  address: string;
  privateKey: string;
};

export type ApplicationState = {
  readonly initialBlockNumber?: number;
  readonly blockNumber?: number; //{ readonly [chainId: number]: number };
  readonly chainId: number;
};

const initialState: ApplicationState = {
  chainId: ChainId.MAINNET,
};

export default createReducer(initialState, (builder) =>
  builder.addCase(
    updateBlockNumber,
    (state, { payload: { chainId, blockNumber } }) => {
      if (!state.blockNumber) state.initialBlockNumber = blockNumber;
      state.blockNumber = blockNumber;
    }
  )
);
