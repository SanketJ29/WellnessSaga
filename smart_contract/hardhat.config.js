require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JLz4cZw-bJ4BMX8g_BIlkclF7A1vnN3e',
      accounts: ['4e53f0058b82762ef8106823d29c0f4b9fa4585e6398cc89fb70c9a86155729d'],
    },
  },
};