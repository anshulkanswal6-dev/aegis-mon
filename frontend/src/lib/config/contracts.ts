import type { Address } from 'viem';

// deployed Agent Factory from Remix
export const AGENT_WALLET_FACTORY_ADDRESS: Address = 
  (import.meta.env.VITE_AGENT_WALLET_FACTORY_ADDRESS as Address) || '0x927dFf62C6D9b1d87aEb1d70ad933aBAC8e96178';

// The Aegis platform executor
export const PLATFORM_EXECUTOR_ADDRESS: Address = 
  (import.meta.env.VITE_PLATFORM_EXECUTOR_ADDRESS as Address) || '0xf7C7FfEdc58B49C75C56019710B2C5C597C5E29E';

export const CONTRACT_CONFIG = {
  factory: {
    address: AGENT_WALLET_FACTORY_ADDRESS,
  },
  executor: {
    address: PLATFORM_EXECUTOR_ADDRESS,
  }
} as const;
