/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xafd4835e3b4180585e6a1acf3f7a40ae410191f6dfb8c6ef390835e131dc82e6","balance":"1000000000000000000000"},{"privateKey":"0x9f019a9fe57db34befb92d8892e5efcb025e09405e56eb994dd63abdcc04d779","balance":"1000000000000000000000"},{"privateKey":"0x8909559834f09d3bb32149914e485cfdcb93526b9cfbaf5a0352e3a237d0aa8d","balance":"1000000000000000000000"},{"privateKey":"0x2bdc9e01240c73cddf45e80b31817fef46a4aacbb443dfee96418cac30dfdbc5","balance":"1000000000000000000000"},{"privateKey":"0xf10687afc533fe3d6fabd1c0d084c8b547ccb723a14bc65bccde93b3386c35de","balance":"1000000000000000000000"},{"privateKey":"0xd73ff0d9a230f82336db8687178730e8fda15b8e3c0fc5265723682403425296","balance":"1000000000000000000000"},{"privateKey":"0xb6eb011bb977b3cbeef7c41133eb248b8ea3455bec30cf512d43c03ce84b716c","balance":"1000000000000000000000"},{"privateKey":"0x62eb93907b5b53d8d36f36cbf731827258951f26fe604d2115a5a8419458211e","balance":"1000000000000000000000"},{"privateKey":"0x32ea9507c9c440a4c38570502bf71dde28de508ded727a6891d4b4c564cdbb0e","balance":"1000000000000000000000"},{"privateKey":"0xa4de4ab6357b63919efa8fd75a32cd9a9b18d21bee96a5d4aae8067162a415a6","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};