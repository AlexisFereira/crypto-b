var Cryptobillions = artifacts.require("./Cryptobillions.sol");

module.exports = function(deployer,network,accounts) {
  console.log(accounts);
  deployer.deploy(Cryptobillions,accounts[0]);
};
