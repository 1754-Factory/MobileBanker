import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { Fraction, JSBI, TokenAmount } from "@ubeswap/sdk";
import Web3 from "web3";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// account is not optional
export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any
  );
}

export function shortenAddress(address: string, len = 5): string {
  return `${address.slice(0, len)}...${address.slice(-3)}`;
}

export function formatExplorerURL(txnHash: string) {
  return `https://celoscan.xyz/tx/${txnHash}`;
}

export async function waitForMinedTransaction(txnHash: string, web3: Web3) {
  let receipt = await web3.eth.getTransactionReceipt(txnHash);
  while (!receipt) {
    await new Promise((r) => setTimeout(r, 5000));
    receipt = await web3.eth.getTransactionReceipt(txnHash);
  }
  return receipt.status;
}

export function withinAmount(
  amount1: TokenAmount,
  amount2: TokenAmount,
  difference: string
) {
  const [gt, lt] = amount1.greaterThan(amount2)
    ? [amount1, amount2]
    : [amount2, amount1];
  return JSBI.greaterThan(JSBI.BigInt(difference), gt.subtract(lt).raw);
}

export const formatTokenAmount = (
  amount: TokenAmount | Fraction | number,
  force?: number
) => {
  if (typeof amount === "number") {
    const multiple = 10 ** 6;
    amount = new Fraction((amount * multiple).toFixed(0), multiple.toFixed(0));
  }
  if (amount.lessThan("0")) {
    amount = amount.multiply("-1");
  }
  return !amount
    ? undefined
    : // : typeof amount === "number"
    // ? amount > 0.1
    //   ? Math.abs(amount).toFixed(2)
    //   : Math.abs(amount).toPrecision(2)
    force !== undefined
    ? amount.toFixed(force)
    : amount.greaterThan("0") && amount.lessThan("1")
    ? amount.toSignificant(2, { separator: "," })
    : amount.toFixed(2, { separator: "," });
};

export const convertBlockToTime = (block: number) => 1587571205 + block * 5;

export const parsePriceFromString = (price: string): Fraction => {
  const asFloat = parseFloat(price) * 1000;
  return new Fraction(asFloat.toFixed(0), "1000");
};

// https://stackoverflow.com/questions/63721110/how-can-i-convert-image-url-to-base64-string
export async function getBase64ImageFromUrl(imageUrl: string) {
  const res = await fetch(imageUrl);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        resolve(reader.result);
      },
      false
    );
    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  });
}
