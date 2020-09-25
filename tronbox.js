const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1e8,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey:"ab40e95a2f99cc0a119903f3bbe4329d97f1b7a65186cb83df34677d86c427fe",
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2',
      feeLimit: 1000000000,
      userFeePercentage: 100,
      originEnergyLimit: 1000000,
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      userFeePercentage: 50,
      feeLimit: 1e8,
      fullNode: 'https://httpapi.nileex.io/wallet',
      solidityNode: 'https://httpapi.nileex.io/walletsolidity',
      eventServer: 'https://eventtest.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: 'efecdb8894200cb5532fdca8384076b0809df26290979551fd4947ade6a86410',
      userFeePercentage: 0,
      // feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.5.4'
      }
    }
  }
}
