import "react-native-url-polyfill/auto";

export interface Global {
  btoa: any;
  URL: any;
  self: any;
}

// eslint-disable-next-line no-var
declare var global: Global;
if (typeof global.self === "undefined") {
  global.self = global;
}
global.btoa = require("Base64").btoa;
require("crypto");
