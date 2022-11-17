import styles from '../styles/LazyMinting.module.css';
import NFT from "../images/lazymint_NFT.png"
import Image from "next/image"
 

const NFTMintSuccess = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <h1>Your NFT</h1>
        <div style={{ fontSize: '120px', height: "200px", width: "200px" }}>
        <Image src={NFT} alt="NFT" />

        </div>

        <h3 style={{ textAlign: "center"}}>Lazy-minted with off-chain critera using Chainlink Automation </h3>
      </div>
    </>
  );
};

export default NFTMintSuccess;
