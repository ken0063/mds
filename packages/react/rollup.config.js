import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: [
    "src/index.ts",
    "src/atoms/Color/index.ts",
    "src/atoms/Margin/index.ts",
    "src/molecules/Select/index.ts",
  ],
  plugins: [
    resolve({
      extensions: [".js", ".ts", ".tsx"],
      moduleDirectories: ["node_modules"],
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.test.*", "**/*.spec.*"],
    }),
  ],
  output: {
    dir: "lib",
    format: "esm",
    preserveModules: true,
    sourcemap: true,
  },
  external: ["react", "react-dom", "react/jsx-runtime", "@mds/foundation"],
};
