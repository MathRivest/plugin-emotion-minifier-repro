import emotion from "@rolldown/plugin-emotion";

export default {
  input: "src/index.js",
  external: [/^@emotion\//],
  output: { dir: "dist" },
  plugins: [emotion({ sourceMap: false, autoLabel: "never" })],
};
