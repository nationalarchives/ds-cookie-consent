const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ds-cookie-consent.js",
  output: {
    filename: "ds-cookie-consent.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.(js)$/,
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
  resolve: { extensions: [".js", ".json"] },
};
