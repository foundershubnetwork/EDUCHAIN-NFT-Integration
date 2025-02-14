
# Founders Hub Network (F3AI): A permissionless, AI-powered investment and fundraising dApp integrating DeFi, AI, and EduFi.

Executive Summary
Optimus AI by Founders Hub Network is a decentralized AI-driven investment and crowdfunding platform designed to democratize early-stage startup funding. Leveraging AI for investment evaluation, risk assessment, and automated fund allocation, Optimus AI enables retail investors to participate in Venture Capital-level opportunities with a Dollar-Cost Averaging (DCA) strategy.
Optimus AI integrates blockchain for transparency, AI for precision, and a permissionless multi-chain infrastructure to provide a frictionless investment experience.
With the global crowdfunding market projected to reach $28.8 billion by 2028 and retail investors holding over $60 trillion in assets, Optimus AI aims to unlock unprecedented liquidity and accessibility..

# NFT Integration with EdU Chain

This repository contains a project for integrating Non-Fungible Tokens (NFTs) with an EDU-Chain blockchain system. The primary goal is to enable minting NFTs whenever user completes their goals in the form of quests as a reward and a proof of completion.
### How this works
This video provides a comprehensive walkthrough of the NFT minting process, demonstrating how users can mint an NFT upon successfully completing their quests.[Click to see the process](https://www.loom.com/share/a13292d433f6475e87ea8e07d7c7a42b?sid=417507ad-d70f-43f7-828b-c488ca49811a)

## Features

1. **Smart Contract**
   - A Solidity-based smart contract for minting NFTs.
   - Implements ERC-721 standards for unique digital assets.

2. **IPFS Integration**
   - All NFT metadata and assets are stored on IPFS for decentralized storage.

3. **API Route**
   - A RESTful API endpoint for minting NFTs using the deployed contract address.
   - Calculates gas fees dynamically and ensures the NFT is minted to the recipient's address.

4. **Deployment Script**
   - Automated deployment script to deploy the NFT smart contract to a blockchain network.
   - Automated Minting script for testing the Minting process

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/foundershubnetwork/EDUCHAIN-NFT-Integration.git
   cd EDUCHAIN-NFT-Integration
   ```

2. Install dependencies: Ensure you have this dependency in the package.json

   ```bash
        {
        "devDependencies": {
          "@nomiclabs/hardhat-ethers": "^2.2.3",
          "ethers": "^5.7.2"
        },
        "dependencies": {
          "@openzeppelin/contracts": "^4.9.6",
          "chai": "4.3.7"
        }
      }
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory and specify the following:

     ```
     PRIVATE_KEY=your_wallet_private_key
     TOKEN_URI=deployed_metadata_url
     ```

## Usage

### Deploying the Smart Contract
1. Compile the Smart Contract
    ```bash
   npx hardhat compile
   ```

2. Open the `scripts/deploymentScript.js` file 

3. Run the deployment script:

   ```bash
   npx hardhat run scripts/deploymentScript.js --network edu
   ```
   The script will output the deployed contract address.
   
4. To run Minting Script:
     ```bash
      npx hardhat run mintScript.js --network edu
      ```

### Minting an NFT

1. Start the server:

   ```bash
   npm start
   ```

2. Use the `/mint-nft` API endpoint to mint an NFT. Send a POST request with the following payload:

   ```json
   {
     "recipient": "0xRecipientAddress"
   }
   ```
### API Response

- On successful minting, the API will return the transaction hash and minted token details.

   ```json
   {
     "message": "NFT Minted Successfully",
     "transactionHash": "0xTransactionHash",
     "receipent": "0xRecipientAddress"
   }
   ```

## Technologies Used

- **Solidity**: For writing the smart contract.
- **Hardhat**: For smart contract development and deployment.
- **IPFS**: For decentralized storage of NFT metadata and assets.
- **Node.js**: For backend API development.
- **EDU-Chain Testnet**: Blockchain network for deploying and interacting with the contract.


