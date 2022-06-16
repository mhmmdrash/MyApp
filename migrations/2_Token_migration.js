const DARKToken = artifacts.require("DARKToken");

module.exports = function (deployer) {
  deployer.deploy(DARKToken);
};