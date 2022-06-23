import { ChainId } from "@ubeswap/sdk";
import * as React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Web3 from "web3";

import { AppState } from "..";
import { Web3Context } from "../../context/Web3Context";

export const useBlockNumber = (): number => {
  return useSelector((state: AppState) => state.application.blockNumber);
};

export const useWeb3Connection = () => {
  const { account, mounted } = React.useContext(Web3Context);
  const chainId = useSelector((state: AppState) => state.application.chainId);
  const web3 = new Web3(
    new Web3.providers.HttpProvider("https://forno.celo.org")
  );
  const { address, privateKey } = account ?? {};
  web3.eth.defaultCommon = {
    customChain: {
      chainId: ChainId.MAINNET,
      name: "mainnet",
      networkId: 0,
    },
  };
  if (address && privateKey) {
    web3.defaultAccount = web3.eth.accounts.privateKeyToAccount(
      privateKey
    ).address;
  }
  return useMemo(
    () => ({
      mounted,
      account: {
        address,
        privateKey,
      },
      chainId: chainId,
      wallet: address,
      signer: privateKey
        ? web3.eth.accounts.privateKeyToAccount(privateKey).signTransaction
        : undefined,
      web3,
    }),
    [address, privateKey]
  );
};

export const useRecoverAccount = () => {
  const { recover } = React.useContext(Web3Context);
  return React.useMemo(() => recover, []);
};
