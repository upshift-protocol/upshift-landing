# Upshift Landing Page

Upshift pools generate yields from institutional loans on the August protocol using the [August SDK](https://www.npmjs.com/package/@augustdigital/sdk).

## Table of Contents

- [Getting Started](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#getting-started)
  - [Requirements](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#requirements)
  - [Environment Variables](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#environment-variables)
  - [Installation](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#installation)
  - [Development](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#development)
- [Directory](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#directory)
- [Deployment](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#deployment)
  - [Live Links](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#live)
- [Contributions](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#contributions)
- [License](https://github.com/lazarev-protocol/upshift-app?tab=readme-ov-file#license)

## Getting Started

This frontend features:

- [Typescript as the core language](https://www.typescriptlang.org/)
- [NextJS to enable SSR](https://nextjs.org/)
- [TailwindCSS to assist in styling](https://tailwindcss.com/)
- [Material UI to provide a component library](https://mui.com/)
- [Prettier to keep code clean](https://prettier.io/)
- [ESLint to ensure code builds](https://eslint.org/)
- [Husky to automate git interactions](https://typicode.github.io/husky/)

### Requirements

- [Node.js v18+](https://nodejs.org/)
- [PNPM](https://pnpm.io/)

### Environment Variables

Create a `.env` file to input the following variables:

- `NEXT_PUBLIC_ALCHEMY_API_KEY`: being your infura API key
- `NEXT_PUBLIC_AUGUST_DIGITAL_API_KEY`: being your august digital API key

or copy and paste the `.env.sample` with your appropriate values

### Installation

Run the following command on your local environment:

```bash
pnpm install
```

### Development

Run the local developer server with:

```bash
pnpm dev
```

*which injects the environment variable `NEXT_PUBLIC_DEV=1` in order to display logs and render the devtools.*

Open http://localhost:3000 in your browser to start working on the UpShift app. 

*Note: Next JS requires some additional time to compile the project for your first time.*


## Directory

```
.
├── README.md                   # README file
├── next.config.js              # Next JS configuration
...
├── src
│   ├── config                  # All configuration files
│   ├── hooks                   # Hooks used throughout the app
│   ├── pages                   # Next JS pages
│   ├── styles                  # All CSS files
│   ├── components              # UI components
│   ├── utils                   # UI components
│   │   ├── constants           # Various constant variables denoted in uppercase
│   │   ├── helpers             # Various helper methods
│   │   └── types               # Global typescript interfaces 
│   └── views                   # Views to be used in app/*
├── ...
└── tsconfig.json               # TypeScript configuration
```

## Deployment

You can see the results locally in production mode with:

```bash
pnpm build
pnpm start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

### Live

The site is currently deployed using AWS Amplify on the following links:

- https://upshift.finance (`main`)
- https://staging.upshift.finance (`develop`)

## Contributions

Everyone is welcome to contribute to the Upshift landing page. Feel free to [open an issue](https://github.com/upshift-protocol/upshift-landing/issues) if you have a proposal or found a bug. PR's should be made to `develop` branch and await approval from team which will go through a QA process before being merged to the production branch, `main`.

## License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.