import { Interface } from "@ethersproject/abi";
import Web3 from "web3";

import { getMulticallContract } from "./getContract";

export async function multicallSingleContractMultipleData(
  web3: Web3,
  targetInterface: Interface,
  target: string,
  method: string,
  data: any[][]
) {
  const multicallContract = getMulticallContract(web3);
  const fragment = targetInterface.getFunction(method);
  const calls = data.map((el) => [
    target,
    targetInterface.encodeFunctionData(fragment, el),
  ]);
  const {
    returnData,
  }: { returnData: string[] } = await multicallContract.methods
    .aggregate(calls)
    .call();
  return returnData.map((el) =>
    targetInterface.decodeFunctionResult(fragment, el)
  );
}

export async function multicallMultipleContractSingleData(
  web3: Web3,
  targetInterface: Interface,
  targets: string[],
  method: string,
  data?: any[]
) {
  const multicallContract = getMulticallContract(web3);
  const fragment = targetInterface.getFunction(method);
  const calls = targets.map((target) => [
    target,
    targetInterface.encodeFunctionData(fragment, data),
  ]);
  const {
    returnData,
  }: { returnData: string[] } = await multicallContract.methods
    .aggregate(calls)
    .call();
  return returnData.map((el) =>
    targetInterface.decodeFunctionResult(fragment, el)
  );
}
