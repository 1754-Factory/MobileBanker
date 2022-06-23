import { createAction } from "@reduxjs/toolkit";

import { Web3Account } from ".";

export const updateBlockNumber = createAction<{
  chainId: number;
  blockNumber: number;
}>("application/updateBlockNumber");

export const updateAccount = createAction<{
  account: Web3Account;
}>("application/updateAccount");

export const initUpdateAccount = createAction("application/initUpdateAccount");
