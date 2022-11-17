import styles from "../styles/LazyMinting.module.css";

const VerifyingClaim = () => {
  return (
    <>
      <div
        className={styles.cardContainer}
      >
        <div style={{ fontSize: '120px' }}>⏳</div>
        <h2> Verifying Claim</h2>
        <h3>Checking that you have claimed the required POAP</h3>
      </div>
    </>
  );
};

export default VerifyingClaim;
