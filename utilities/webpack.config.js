const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

const sharedDependencies = {
  react: { singleton: true, requiredVersion: "18.3.1" },
  "react-dom": { singleton: true, requiredVersion: "18.3.1" },
  "@mantine/core": { singleton: true, requiredVersion: "7.13.0" },
  "@mantine/hooks": { singleton: true, requiredVersion: "7.13.0" },
};

module.exports = (_env, argv) => ({
  mode: argv.mode ?? "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "auto",
    clean: true,
    crossOriginLoading: "anonymous",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/index.ts"),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.(png|svg|jpe?g)$/i, type: "asset/resource" },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "utilities",
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/components/index.ts",
        "./theme": "./src/theme/index.ts",
      },
      shared: sharedDependencies,
    }),
  ],
  devServer: {
    port: 3002,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
});
