import babel from "rollup-plugin-babel";
import scss from 'rollup-plugin-scss'

const plugins = [babel({ exclude: "node_modules/**" }), scss];

export default [
  {
    input: "src/index.js",
    plugins,
    output: {
      file: `dist/index.js`,
      format: 'esm',
    },
  },
];