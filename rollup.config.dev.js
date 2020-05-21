import pkg from "./package.json";
import config from "./rollup.config.common";

const { esm, banner } = config();

export default [
  {
    input: "src/index.dev.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      banner,
    },
    plugins: esm,
  },
];
