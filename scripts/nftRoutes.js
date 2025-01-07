
const express = require("express");
const router = express.Router();
const { Web3 } = require('web3');


router.post("/mint-nft", async (req, res) => {
    
    console.log("Minting...");
  
    try {
      const { recipient} = req.body;
      const tokenURI =  "https://aquamarine-generous-barracuda-163.mypinata.cloud/ipfs/bafkreibvr7ll7jrmpescjorljvygn4haye5t4yxmk7wwbwnwizrvx34vpa";
  
      if (!recipient || !tokenURI) {
        return res.status(400).json({ error: "Recipient address and token URI are required" });
      }
  
      const web3 = new Web3('https://rpc.open-campus-codex.gelato.digital/'); // Node RPC Url of Edu-Chain - Removed for security reason.
  
      // Add your private key to the account
      const account = web3.eth.accounts.privateKeyToAccount("0x" + process.env.PRIVATE_KEY);
      web3.eth.accounts.wallet.add(account);
      web3.eth.defaultAccount = account.address;
  
      // Define the contract ABI and address
      const contractAddress = "0x6B9702e83774022281713452401487b0224770B4";
      const SimpleNFT = require("../nft/artifacts/contracts/SimpleNFT.sol/SimpleNFT.json");//change according to your project structure
      const contract = new web3.eth.Contract(SimpleNFT.abi, contractAddress);
  
      // Prepare the mintNFT transaction
      const mintFunction = contract.methods.mintNFT(recipient, tokenURI);
      const gas = await mintFunction.estimateGas({ from: account.address });
      const gasPrice = await web3.eth.getGasPrice();
      const data = mintFunction.encodeABI();
  
      const tx = {
        from: account.address,
        to: contractAddress,
        data: data,
        gas: gas,
        gasPrice: gasPrice,
      };
  
      // Sign and send the transaction
      const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
      console.log("NFT minted successfully!", receipt.transactionHash, "recipient", recipient);
      res.json({
        message: "NFT minted successfully!",
        transactionHash: receipt.transactionHash,
        recipient: recipient,
      });
    } catch (error) {
      console.error("Error minting NFT:", error);
      res.status(500).json({ error: "Error minting NFT" });
    }
  });

  module.exports = router;
