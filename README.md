
# Founders Hub Network (F3AI): Human-Powered AI Agents and Quest Platform Connecting Early-Stage Founders with Strategic Capital Solutions.
Founders Hub Network (F3AI) is revolutionizing startup funding by tokenizing founder potential and introducing AI-driven solutions. By addressing inefficiencies in fundraising, investor engagement, and ecosystem collaboration, F3AI builds a scalable, trust-centric entrepreneurial economy. Tailored Industry and Vertical Specific AI Agents enhance business functions such as marketing, technology, finance, growth, and mental health, offering founders comprehensive support throughout their journey.
Core innovations include the MLI Framework for secure interactions, the MVT Model linking funding to milestone achievements, and the FounderScore Framework that strengthens trust through data-driven metrics. With features like LiquidityBridge for connecting funding pools and FounderForge for tokenized autonomous AI agents, F3AI fosters transparency, reduces investor risk, and drives ecosystem collaboration, enabling a vibrant Web3 economy.

# For Demo click here- [Demo](https://www.loom.com/share/a13292d433f6475e87ea8e07d7c7a42b?sid=417507ad-d70f-43f7-828b-c488ca49811a)

# NFT Integration with Edu chain

This repository contains a project for integrating Non-Fungible Tokens (NFTs) with an EDU-Chain blockchain system. The primary goal is to enable minting NFTs whenever user completes their goals in the form of quests as a reward and a proof of completion.


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


