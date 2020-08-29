const Cryptobillions = artifacts.require("./Cryptobillions.sol");

contract("Cryptobillions", accounts => {
  it("...should store the value 89.", async () => {
    const CryptobillionsInstance = await Cryptobillions.deployed();

    // Set value of 89
    await CryptobillionsInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await CryptobillionsInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
