const DECIMALS = 6;
const NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK || "mainnet-beta";

const rpcEndpoints = {
  "mainnet-beta":
    "https://mainnet.helius-rpc.com/?api-key=5f652958-74ed-42e4-a874-0ac8056ac02c",
  devnet:
    "https://devnet.helius-rpc.com/?api-key=5f652958-74ed-42e4-a874-0ac8056ac02c",
  testnet: "https://api.testnet.solana.com",
  localnet: "http://127.0.0.1:8899",
} as const;

export const SolanaUtils = {
  rpcEndpoints,
  DECIMALS,
  NETWORK,
};
