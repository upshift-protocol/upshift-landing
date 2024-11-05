// env vars
export const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY || '';
export const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || '';
export const NETWORK =
  (process.env.NEXT_PUBLIC_NETWORK as 'localhost' | 'arbitrum' | 'mainnet') ??
  'mainnet';
export const DEVELOPMENT_MODE = process.env.NEXT_PUBLIC_DEV ? 1 : 0;

// ui
export const STYLE_VARS = {
  widthWide: '120rem',
  width: '100rem',
  descriptionWidth: '800px',
  assetDivWidth: '72px',
};

// links
export const LINKS = {
  X: `https://x.com/upshift_fi`,
  APP: 'https://avax.upshift.finance',
}

// external
export const INVESTORS_IMGS = [
  {
    src: "dragonfly.svg",
    alt: "Dragonfly Logo",
    name: "Dragonfly",
    width: 150,
    height: 30,
  },
  {
    src: "hackvc.png",
    alt: "Hack VC Logo",
    name: "Hack VC",
    width: 150,
    height: 30,
  },
  {
    src: "6mv.png",
    alt: "6th Man Ventures Logo",
    name: "6MV",
    width: 100,
    height: 30,
  },
  {
    src: "spartan.png",
    alt: "Spartan Ventures Logo",
    name: "Spartan Ventures",
    width: 150,
    height: 30,
  },
]