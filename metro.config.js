const extraNodeModules = require("node-libs-browser");
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  };
  config.resolver = {
    ...resolver,
    extraNodeModules: {
      ...extraNodeModules,
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url/"),
      fs: require.resolve("expo-file-system"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      net: require.resolve("react-native-tcp"),
      os: require.resolve("os-browserify/browser.js"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("readable-stream"),
    },
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [
      ...resolver.sourceExts,
      "jsx",
      "js",
      "ts",
      "tsx",
      "cjs",
      "svg",
    ],
  };

  return config;
})();

// module.exports = {
//   resolver: {
//     extraNodeModules: {
//       ...extraNodeModules,
//       crypto: require.resolve("crypto-browserify"),
//       url: require.resolve("url/"),
//       fs: require.resolve("expo-file-system"),
//       http: require.resolve("stream-http"),
//       https: require.resolve("https-browserify"),
//       net: require.resolve("react-native-tcp"),
//       os: require.resolve("os-browserify/browser.js"),
//       path: require.resolve("path-browserify"),
//       stream: require.resolve("readable-stream"),
//     },
//     sourceExts: ["jsx", "js", "ts", "tsx", "cjs"],
//   },
//   transformer: {
//     assetPlugins: ["expo-asset/tools/hashAssetFiles"],
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };
