const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const sharedDependencies = {
  react: { singleton: true, requiredVersion: "18.3.1" },
  "react-dom": { singleton: true, requiredVersion: "18.3.1" },
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
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@screens": path.resolve(__dirname, "src/screens"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "football",
      filename: "remoteEntry.js",
      exposes: {
        "./MatchdayPage": "./src/exposed/MatchdayPage.tsx",
      },
      remotes: {
        utilities: "utilities@http://localhost:3002/remoteEntry.js",
      },
      shared: sharedDependencies,
    }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
});
