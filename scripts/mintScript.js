async function main() {
    const [owner] = await ethers.getSigners();
    const simpleNFT = await ethers.getContractAt(
      "SimpleNFT",
      "0x6B9702e83774022281713452401487b0224770B4" // Change if deployed again with the new address
    );
  
    const tokenURI =
      "https://aquamarine-generous-barracuda-163.mypinata.cloud/ipfs/bafkreibvr7ll7jrmpescjorljvygn4haye5t4yxmk7wwbwnwizrvx34vpa";
    const tx = await simpleNFT.mintNFT(owner.address, tokenURI);
    await tx.wait();
  
    console.log("NFT minted successfully with token URI:", tokenURI);
    console.log(tx);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });