require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
const projectId = process.env.projectId;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${projectId}`,
    //   accounts: [process.env.privateKey]
    // },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
    //   accounts: [process.env.privateKey]
    // },
    // matic: {
    //   url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
    //   accounts: [process.env.privateKey]
    // }
   
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};