
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.19",
  networks: {
    edu: {
      url: "https://rpc.open-campus-codex.gelato.digital/", // Replace with the RPC URL of the EDU blockchain
      accounts: [`0xd526f09224fc1ebb554f49812d0a0b86987fc3d7cba71ec4d358cc73bf4a5d06`], // Replace with your private key
    },
  },
  
};
