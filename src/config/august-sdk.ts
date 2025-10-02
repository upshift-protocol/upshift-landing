import { ALCHEMY_API_KEY } from "@/utils/constants";
import AugustDigitalSDK from "@augustdigital/sdk";

const augustSdk = new AugustDigitalSDK({
  keys: { august: process.env.NEXT_PUBLIC_AUGUST_DIGITAL_API_KEY as string },
  providers: {
    43114: `https://avax-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    1: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    8453: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    999: `https://autumn-fabled-shard.hype-mainnet.quiknode.pro/0c3002cf3654fbd7136be3106ab88b23e24c7375/evm`,
    56: `https://bnb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  },
  monitoring: { env: process.env.NEXT_PUBLIC_DEV ? "DEV" : "PROD" },
});

export default augustSdk;
