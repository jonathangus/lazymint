import styles from '../styles/LazyMinting.module.css';

const ReadyToMint = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div style={{ fontSize: '120px' }}>🎉</div>
        <h3>
          Your soon-to-be NFT is all set to lazy mint soon. Check back later
        </h3>
      </div>
    </>
  );
};

export default ReadyToMint;