module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint", "pnpm format"],
  "**/*.ts?(x)": () => "npm run check-types",
  "*.json": ["prettier --write"],
};
