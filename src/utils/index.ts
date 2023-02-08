import { Contract } from "@ethersproject/contracts";
import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { Contracts } from "../constants/abi";

export const shortenAddress = (address: string) => address.substr(0, 6) + "..." + address.substr(-4);
export const shortenTxnHash = (address: string) => address.substr(0, 34) + "..." + address.substr(-4);

export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export const decimalPlaces = (num: string) => {
  const match: RegExpMatchArray | null = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
    0,
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0)
    // Adjust for scientific notation.
    - (match[2] ? +match[2] : 0));
}

function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

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

export interface MetatisedObject<T> {
  [index: string]: T
}

// Convenience routine to construct an object from arrays of keys and values.
export function objectFromKeysAndValues(keys: any, values: any) {
  const result = {} as MetatisedObject<any>;
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}


export const signContracts = (contracts: Contracts, library: any) => {
  return objectFromKeysAndValues(Object.keys(contracts), Object.values(contracts).map((unsignedContract: any) => { return unsignedContract.connect(library.getSigner()) }))
}