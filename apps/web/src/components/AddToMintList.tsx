import { useAccount } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';
import styles from '../styles/LazyMinting.module.css';
import { pickRandomPoap } from '../utils/pickRandomPoap';
import { poaps } from '../utils/poaps';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import LazyMintStepsContext from '../context/LazyMintStepsContext';
import Demo from "./Demo";

const AddToMintList = () => {
  const [poapLink, setPoapLink] = useState('');
  useEffect(() => {
    const randomPoap = pickRandomPoap(poaps);
    setPoapLink(randomPoap);
  }, []);

  const [step, setStep] = useContext(LazyMintStepsContext);
  const { address: userAddress } = useAccount();
  const { data: isWatched } = useContractRead(LazyNFT__factory, 'watchers', {
    args: [userAddress as string],
    enabled: !!userAddress,
  });
  const {
    waitForTxResult,
    write: addWatcher,
    isLoading,
  } = useContractWrite(LazyNFT__factory, 'addWatcher');

  const handleClaimPoap = () => {
    return (<Demo step={step} />)
  }

  return !isWatched ? (
    <div className={styles.cardContainer}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #CACACA',
        }}
      >
        <div
          style={{
            fontSize: '120px',
          }}
        >
          ✍️
        </div>

        <h2>Join the Lazy Minting List</h2>
      </div>
      <button
        disabled={isLoading}
        style={{
          color: 'white',
          backgroundColor: '#0029FF',
          height: '48px',
          width: '80%',
          borderRadius: '8px',
          padding: '8px 16px 8px 16px',
          gap: '10px',
          cursor: 'pointer',
          borderTop: '1px solid #CACACA',
          marginTop: '24px',
        }}
        onClick={() => {
          addWatcher();
        }}
      >
        Join here
      </button>
    </div>
  ) : (
    <div className={styles.cardContainer}>
      <h1 style={{ width: '100%', textAlign: 'center' }}>
        Claim poap:
        </h1>
        <h2>
        <Link href={poapLink}>
          <a target="_blank">{poapLink}</a>
        </Link>
        </h2>
  
      <button
        disabled={isLoading}
        style={{
          color: 'white',
          backgroundColor: '#0029FF',
          height: '48px',
          width: '80%',
          borderRadius: '8px',
          padding: '8px 16px 8px 16px',
          gap: '10px',
          cursor: 'pointer',
          borderTop: '1px solid #CACACA',
          marginTop: '24px',
        }}
        onClick={() => {
          setStep(2)
          handleClaimPoap()
        }}
      >
        Click here when you have claimed your POAP
      </button>
    </div>
  );
};

export default AddToMintList;
