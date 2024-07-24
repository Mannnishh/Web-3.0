require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/AzZ83kCsknlV0poV8gBHYAH_e-rhzUyu',
      accounts: [ '4e56fcf3d6c3116be8ce95c259b2e154ef2cb8fd0bb873a8f19cb3fad03ffd20' ]
    }
  }
}