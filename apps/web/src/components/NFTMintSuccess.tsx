import styles from '../styles/LazyMinting.module.css';
import NFT from '../images/lazymint_NFT.png';
import Image from 'next/image';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const NFTMintSuccess = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <div className={styles.cardContainer}>
        <h1 style={{ fontSize: '32px'}}>Your NFT</h1>
        <div style={{ fontSize: '120px', height: '200px', width: '200px' }}>
          <Image src={NFT} alt="NFT" />
        </div>

        <h3 style={{ textAlign: 'center', fontSize: "18px" }}>
          Lazy-minted with off-chain criteria using Chainlink Automation{' '}
        </h3>
      </div>
    </>
  );
};

export default NFTMintSuccess;
