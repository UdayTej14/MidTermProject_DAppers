const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "leader shaft police another calm loan force athlete popular bench one moon";

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ganache port
      network_id: "5777",       // Any network (default: none)
    },
    holesky: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase:  mnemonic // Your wallet mnemonic
          },
          providerOrUrl: 'https://eth-holesky.g.alchemy.com/v2/zsD3-fnOEjIeTgq1D6H8o3h6W3soKgzC', // Holesky RPC URL
          chainId: 17000, // Holesky chain ID
        }),
      network_id: 17000, // Holesky network ID
      gas: 6000000, // Adjust gas limit as needed
      gasPrice: 20000000000, // 20 Gwei, adjust as needed
    },
  },
  compilers: {
    solc: {
      version: "0.4.25", // Adjust to the version you're using
    },
  },
};