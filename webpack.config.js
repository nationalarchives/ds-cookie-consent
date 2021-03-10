const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ds-cookie-consent.ts",
  output: {
    filename: "ds-cookie-consent.js",
    path: path.resolve(__dirname, "lib"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts", ".json"] },
};
