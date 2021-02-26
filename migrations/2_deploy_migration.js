var NEToken = artifacts.require("./BunnyToken.sol");

const name = "KIT Token";
const symbol = "KIT";
const decimals = 18;

module.exports = function (deployer) {
    deployer.deploy(KITToken, name, symbol, decimals, {gas: 6700000});
};
