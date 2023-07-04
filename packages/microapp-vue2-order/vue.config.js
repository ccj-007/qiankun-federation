const { name } = require("./package");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  pages: {
    index: {
      entry: "./src/index.js",
    },
  },
  configureWebpack: {
    experiments: {
      topLevelAwait: true,
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "microapp_vue2_order",
        exposes: {
          "./Order.vue": "./src/components/Order.vue",
        },
        filename: "remoteEntry.js",
        shared: ["vue"],
      }),
    ],
  },
  devServer: {
    port: 2000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
