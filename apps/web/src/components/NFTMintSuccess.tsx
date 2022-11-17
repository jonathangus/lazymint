import styles from '../styles/LazyMinting.module.css';

const NFTMintSuccess = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <h2>Your NFT</h2>
        <div style={{ fontSize: '120px', backgroundColor: 'grey', height: "100px", width: "100px" }}></div>

        <h3>Lazy-minted with off-chain critera using Chainlink Automation </h3>
      </div>
    </>
  );
};

export default NFTMintSuccess;
