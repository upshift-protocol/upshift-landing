import {
  type ISolanaNetwork,
  type IChainId,
  SPECIAL_CHAINS,
} from "@augustdigital/sdk";
import type { Chain, HttpTransport } from "viem";
import { http } from "viem";
import {
  avalanche,
  base,
  localhost,
  mainnet,
  bsc,
  plasma,
  ink,
  flare,
} from "viem/chains";
import { SolanaUtils } from "./utils";

// const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY || '';
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";
const MEZO_API_KEY = process.env.NEXT_PUBLIC_MEZO_API_KEY || "";
const QUICKNODE_API_KEY = process.env.NEXT_PUBLIC_QUICKNODE_API_KEY || "";
const isMonadEnabled = process.env.NEXT_PUBLIC_ENABLE_MONAD === "true" || false;

export const INSTANCE =
  (process.env.NEXT_PUBLIC_INSTANCE as
    | "avax"
    | "lombard"
    | "treehouse"
    | "ethena"
    | undefined) || "default";

// Search: New Chain
const NETWORK =
  (process.env.NEXT_PUBLIC_NETWORK as "localhost" | "arbitrum" | "mainnet") ??
  "mainnet";

// custom chains
export const hyperEVM = {
  id: 999,
  name: "HyperEVM",
  nativeCurrency: {
    decimals: 18,
    name: "HYPE",
    symbol: "HYPE",
  },
  blockExplorers: {
    etherscan: {
      name: "HyperEVM Explorer",
      url: "https://hyperevmscan.io",
    },
    default: {
      name: "HyperEVM Explorer",
      url: "https://hyperevmscan.io",
    },
  },
  rpcUrls: {
    public: { http: ["https://rpc.hyperliquid.xyz/evm"] },
    default: { http: ["https://rpc.hyperliquid.xyz/evm"] },
  },
};

export const mezo = {
  id: 31612,
  name: "Mezo",
  nativeCurrency: {
    decimals: 18,
    name: "MUSD",
    symbol: "MUSD",
  },
  blockExplorers: {
    etherscan: {
      name: "Mezo Explorer",
      url: "https://explorer.mezo.org/",
    },
    default: {
      name: "Mezo Explorer",
      url: "https://explorer.mezo.org/",
    },
  },
  rpcUrls: {
    public: {
      http: ["https://mainnet.mezo.public.validationcloud.io"],
    },
    default: {
      http: ["https://mainnet.mezo.public.validationcloud.io"],
    },
  },
};

export const monad = {
  id: 143,
  name: "Monad",
  nativeCurrency: {
    decimals: 18,
    name: "MON",
    symbol: "MON",
  },
  blockExplorers: {
    etherscan: {
      name: "Monad Explorer",
      url: "https://mainnet-beta.monvision.io/",
    },
    default: {
      name: "Monad Explorer",
      url: "https://mainnet-beta.monvision.io/",
    },
  },
  rpcUrls: {
    public: {
      http: ["https://rpc-mainnet.monadinfra.com"],
    },
    default: {
      http: ["https://rpc-mainnet.monadinfra.com"],
    },
  },
};
// rpc urls
export const RPC_URLS = {
  ...(isMonadEnabled && {
    [monad.id]: `https://monad-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  }),
  [mezo.id]: `https://mainnet.mezo.validationcloud.io/v1/${MEZO_API_KEY}`,
  [avalanche.id]: `https://avax-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  [mainnet.id]: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  [base.id]: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  [bsc.id]: `https://bnb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  [hyperEVM.id]: `https://autumn-fabled-shard.hype-mainnet.quiknode.pro/${QUICKNODE_API_KEY}/evm`,
  [SPECIAL_CHAINS.solana.chainId]:
    SolanaUtils.rpcEndpoints[
      (SolanaUtils.NETWORK as ISolanaNetwork) || "mainnet-beta"
    ],
  [plasma.id]: `https://plasma-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  [ink.id]: `https://ink-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  [flare.id]: `https://snowy-polished-panorama.flare-mainnet.quiknode.pro/${QUICKNODE_API_KEY}/ext/bc/C/rpc/`,
};

// helpers
export const getChainById = (chainId: IChainId) => {
  return [
    avalanche,
    mainnet,
    base,
    bsc,
    hyperEVM,
    mezo,
    ...(isMonadEnabled ? [monad] : []),
    plasma,
    ink,
    flare,
  ].find((chain) => chain.id === chainId);
};

export const getViemChainById = (chainId: number): Chain => {
  switch (chainId) {
    case avalanche.id:
      return avalanche;
    case base.id:
      return base;
    case plasma.id:
      return plasma;
    case monad.id:
      return isMonadEnabled ? monad : mainnet;
    case ink.id:
      return ink;
    case flare.id:
      return flare;
    default:
      return mainnet;
  }
};

export const getRpcUrl = (chainId: number) =>
  (RPC_URLS as Record<number, string>)?.[chainId];

export const ACTIVE_RPC_URLS = () => {
  switch (INSTANCE) {
    case "lombard": {
      return {
        [mainnet.id]: RPC_URLS[mainnet.id],
        [base.id]: RPC_URLS[base.id],
      };
    }
    case "treehouse":
    case "ethena": {
      return {
        [mainnet.id]: RPC_URLS[mainnet.id],
      };
    }
    case "avax": {
      return {
        [avalanche.id]: RPC_URLS[avalanche.id],
      };
    }
    default: {
      return {
        [mainnet.id]: RPC_URLS[mainnet.id],
        [avalanche.id]: RPC_URLS[avalanche.id],
        [base.id]: RPC_URLS[base.id],
        [bsc.id]: RPC_URLS[bsc.id],
        [hyperEVM.id]: RPC_URLS[hyperEVM.id],
        [mezo.id]: RPC_URLS[mezo.id],
        ...(isMonadEnabled && { [monad.id]: RPC_URLS[monad.id] }),
        [SPECIAL_CHAINS.solana.chainId]:
          RPC_URLS[SPECIAL_CHAINS.solana.chainId],
        [plasma.id]: RPC_URLS[plasma.id],
        [ink.id]: RPC_URLS[ink.id],
        [flare.id]: RPC_URLS[flare.id],
      };
    }
  }
};

export const ACTIVE_NETWORKS = () => {
  if (NETWORK === "localhost")
    return [mainnet, avalanche, base, localhost, monad];
  if (INSTANCE === "avax") return [avalanche];
  if (INSTANCE === "lombard") return [mainnet, base];
  if (INSTANCE === "treehouse" || INSTANCE === "ethena") return [mainnet];
  return [
    mainnet,
    avalanche,
    base,
    bsc,
    hyperEVM,
    mezo,
    ...(isMonadEnabled ? [monad] : []),
    plasma,
    ink,
    flare,
  ];
};

export const ACTIVE_TRANSPORTS = {
  [mainnet.id]: http(RPC_URLS[mainnet.id]),
  [avalanche.id]: http(RPC_URLS[avalanche.id]),
  [base.id]: http(RPC_URLS[base.id]),
  [bsc.id]: http(RPC_URLS[bsc.id]),
  [hyperEVM.id]: http(RPC_URLS[hyperEVM.id]),
  [mezo.id]: http(RPC_URLS[mezo.id]),
  [plasma.id]: http(RPC_URLS[plasma.id]),
  ...(isMonadEnabled && { [monad.id]: http(RPC_URLS[monad.id]) }),
  [ink.id]: http(RPC_URLS[ink.id]),
  [flare.id]: http(RPC_URLS[flare.id]),
  [localhost.id]: http(),
};

export const getActiveTransport = (chainId: number) =>
  (ACTIVE_TRANSPORTS as Record<number, HttpTransport>)?.[
    chainId
  ] as HttpTransport;

export const CONFIRMATIONS_MAPPING: Record<number, number> = {
  [mainnet.id]: 1,
  [avalanche.id]: 3,
  [base.id]: 1,
  [bsc.id]: 1,
  [hyperEVM.id]: 1,
  // what is the proper confirmations mapping for mezo?
  [mezo.id]: 1,
  [plasma.id]: 2,
  // what is the proper confirmations mapping for ink?
  [ink.id]: 1,
  [flare.id]: 1,
  [localhost.id]: 1,
  ...(isMonadEnabled && { [monad.id]: 1 }),
};
