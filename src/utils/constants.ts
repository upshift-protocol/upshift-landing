// env vars
export const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY || "";
export const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";
export const NETWORK =
  (process.env.NEXT_PUBLIC_NETWORK as "localhost" | "arbitrum" | "mainnet") ??
  "mainnet";
export const DEVELOPMENT_MODE = process.env.NEXT_PUBLIC_DEV ? 1 : 0;

// ui
export const STYLE_VARS = {
  widthWide: "120rem",
  width: "100rem",
  descriptionWidth: "800px",
  assetDivWidth: "72px",
};

// links
export const LINKS = {
  BASE: process.env.NEXT_PUBLIC_URL || "https://upshift.finance",
  INTERNAL: {
    HOME: "/",
  },
  EXTERNAL: {
    DISCORD: "https://discord.gg/upshift",
    X: `https://x.com/upshift_fi`,
    DOCS: "https://docs.upshift.finance",
    TG: "https://t.me/upshift_fi",
    APP_AVAX: "https://avax.upshift.finance",
    APP_LOMBARD: "https://lombard.upshift.finance",
    APP_TREEHOUSE: "https://treehouse.upshift.finance",
    APP_ETHENA: "https://ethena.upshift.finance",
    APP_MAIN: "https://app.upshift.finance",
    APP_PRIVATE: "https://private.upshift.finance",
  },
};

// external
export const INVESTORS_IMGS = [
  {
    src: "dragonfly.svg",
    alt: "Dragonfly Logo",
    name: "Dragonfly",
    width: 170,
    height: 30,
  },
  {
    src: "hackvc.png",
    alt: "Hack VC Logo",
    name: "Hack VC",
    width: 140,
    height: 30,
  },
  {
    src: "6mv.png",
    alt: "6th Man Ventures Logo",
    name: "6MV",
    width: 90,
    height: 30,
  },
  {
    src: "robot-ventures.svg",
    alt: "Robot Ventures Logo",
    name: "Robot Ventures",
    width: 160,
    height: 30,
  },
];

export const APP_INSTANCES_LINKS = [
  {
    link: LINKS.EXTERNAL.APP_AVAX,
    text: "Avalanche AVAX",
  },
  {
    link: LINKS.EXTERNAL.APP_AVAX,
    text: "Avalanche AUSD",
  },
  {
    link: LINKS.EXTERNAL.APP_LOMBARD,
    text: "Lombard LBTC",
  },
  {
    link: LINKS.EXTERNAL.APP_ETHENA,
    text: "Ethena sUSDe",
  },
  {
    link: LINKS.EXTERNAL.APP_TREEHOUSE,
    text: "Treehouse",
  },
];
