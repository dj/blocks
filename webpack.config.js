const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
    watchFiles: path.resolve(__dirname, "src"),
  },
  devtool: "eval",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static/*" }],
    }),
  ],
};
