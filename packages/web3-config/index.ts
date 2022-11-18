import deployment from './deployments/goerli/LazyNFT.json';
export * from './typechain';
import * as _typechain from './typechain';
import { chain } from 'wagmi';

import { LazyNFT__factory } from './typechain';

export const typechain = _typechain;

export type AvailableContracts = LazyNFT__factory['contractName'];

type AddressObj = Record<AvailableContracts, string>;

const _lazy = new LazyNFT__factory();

export const Address: Record<number, AddressObj> = {
  [chain.goerli.id]: {
    [_lazy.contractName]: deployment.address,
  },
};

export const getAddress = (
  chain: number,
  contract: AvailableContracts
): string => Address[chain][contract];
