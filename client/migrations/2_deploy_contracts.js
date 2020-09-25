var Crypto = artifacts.require("./Cryptobillions.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Crypto);
  deployer.link(Crypto, MetaCoin);
  deployer.deploy(MetaCoin, 10000);
};
