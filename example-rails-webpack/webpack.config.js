const path = require("path");
const webpack = require("webpack");
const WebpackAssetsManifest = require('webpack-assets-manifest');

const NODE_ENV = process.env.RAILS_ENV || process.env.NODE_ENV || "development";

module.exports = {
  mode: ["development", "test"].includes(NODE_ENV)
    ? "development"
    : "production",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "app/javascript"),
      path.resolve(__dirname, "node_modules"),
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      // maxSize: 100000
    },
  },
  plugins: [new WebpackAssetsManifest()],
  module: {
    rules: [
      {
        // Use esbuild to compile JavaScript
        test: /\.jsx?$/,
        loader: "esbuild-loader",
        options: {
          // JavaScript version to compile to
          target: "es2015",
        },
      },
    ],
  },
};
