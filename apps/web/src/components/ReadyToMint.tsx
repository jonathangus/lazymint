import styles from '../styles/LazyMinting.module.css';
import { useContext } from 'react';
import LazyMintStepsContext from '../context/LazyMintStepsContext';
import { useAccount } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';
import Demo from './Demo';

const ReadyToMint = () => {
  const [step, setStep] = useContext(LazyMintStepsContext);

  const { address: userAddress } = useAccount();
  const { waitForTxResult: mintTx, write: tmpMint } = useContractWrite(
    LazyNFT__factory,
    'tempMint'
  );
  const { data: haveMinted } = useContractRead(LazyNFT__factory, 'minted', {
    args: [userAddress as string],
    enabled: !!userAddress,
  });
  console.log('haveMinted', haveMinted);
  if (haveMinted) {
    setStep(3);
    return <Demo step={step} />;
  }

  return (
    <>
      {!haveMinted && (
        <div className={styles.cardContainer}>
          <div style={{ fontSize: '120px' }}>🎉</div>
          <h3 style={{ textAlign: 'center' }}>
            Your soon-to-be NFT is all set to lazy mint soon. It will
            automatically be displayed here. Check back later
          </h3>
        </div>
      )}
    </>
  );
};

export default ReadyToMint;
