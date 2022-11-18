import styles from '../styles/LazyMinting.module.css';
import { useEffect } from 'react';

const ReadyToMint = ({ haveMinted, setStep }) => {
  useEffect(() => {
    if(haveMinted) {
      setStep(5)
    }
  },[haveMinted, setStep])
  return (
    <>
      <div className={styles.cardContainer}>
        <div style={{ fontSize: '120px' }}>🎉</div>
        <h3 style={{ textAlign: 'center', fontSize: "18px" }}>
          Your soon-to-be NFT is all set to lazy mint soon. It will
          automatically be displayed here. Check back later
        </h3>
      </div>
    </>
  );
};

export default ReadyToMint;
