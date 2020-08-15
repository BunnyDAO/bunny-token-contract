var NEToken = artifacts.require("./OMToken.sol");

const name = "OM Token";
const symbol = "OM";
const decimals = 18;

module.exports = function (deployer) {
    deployer.deploy(OMToken, name, symbol, decimals, {gas: 6700000});
};
