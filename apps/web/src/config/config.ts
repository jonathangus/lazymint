import { chain, Chain } from 'wagmi';

type Config = {
  isProduction: boolean;
  defaultChains: Chain[];
  fallbackId: number;
};

export const config: Config = {
  isProduction: process.env.NODE_ENV === 'production',
  defaultChains: [chain.goerli],
  fallbackId: chain.goerli.id,
};
