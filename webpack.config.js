const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/ds-cookie-consent.ts",
  output: {
    filename: "ds-cookie-consent.js",
    path: path.resolve(__dirname, "lib"),
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "11",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts", ".json"] },
};
