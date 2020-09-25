var MyContract = artifacts.require("./CryptobillionsTron.sol");

module.exports = function(deployer) {
   deployer.deploy(MyContract, 'TT97NPy8GSL9db974fpzWdURyVjX6h7XyT');
};
