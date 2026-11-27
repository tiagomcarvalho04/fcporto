const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const CopyWebpackPlugin = require("copy-webpack-plugin");

const sharedDependencies = {
  react: { singleton: true, requiredVersion: "18.3.1" },
  "react-dom": { singleton: true, requiredVersion: "18.3.1" },
  "react-router-dom": { singleton: true, requiredVersion: "6.27.0" },
  "@mantine/core": { singleton: true, requiredVersion: "7.13.0" },
  "@mantine/hooks": { singleton: true, requiredVersion: "7.13.0" },
};

module.exports = (_env, argv) => ({
  mode: argv.mode ?? "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "auto",
    clean: true,
    crossOriginLoading: "anonymous",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/index.ts"),
      "@config": path.resolve(__dirname, "src/config/index.ts"),
      "@layout": path.resolve(__dirname, "src/layout/index.ts"),
      "@routes": path.resolve(__dirname, "src/routes/index.ts"),
      "@screens": path.resolve(__dirname, "src/screens/index.ts"),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?g|svg)$/i, type: "asset/resource" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "base",
      remotes: {
        football: "football@http://localhost:3001/remoteEntry.js",
        utilities: "utilities@http://localhost:3002/remoteEntry.js",
      },
      shared: sharedDependencies,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/favicon.png", to: "favicon.png" }],
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
});
