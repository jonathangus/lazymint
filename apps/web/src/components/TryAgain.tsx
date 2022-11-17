import styles from '../styles/LazyMinting.module.css';

const TryAgain = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div style={{ fontSize: '120px' }}>🤷</div>
        <h2>Try again</h2>
        <h3>You have not successfully claimed the required POAP </h3>
      </div>
    </>
  );
};

export default TryAgain;
