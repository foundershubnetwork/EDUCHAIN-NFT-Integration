
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.19",
  networks: {
    edu: {
      url: "https://rpc.open-campus-codex.gelato.digital/", // Replace with the RPC URL of the EDU blockchain
      accounts: [``], // Replace with your private key
    },
  },
  
};
