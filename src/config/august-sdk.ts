import AugustDigitalSDK, { ISolanaNetwork } from "@augustdigital/sdk";
import { ACTIVE_RPC_URLS } from "./config";

const augustSdk = new AugustDigitalSDK({
  keys: { august: process.env.NEXT_PUBLIC_AUGUST_DIGITAL_API_KEY as string },
  providers: ACTIVE_RPC_URLS(),
  monitoring: { env: process.env.NEXT_PUBLIC_DEV ? "DEV" : "PROD" },
  solana: {
    rpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC_URL as string,
    network: (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
      "mainnet-beta") as ISolanaNetwork,
  },
});

export default augustSdk;
