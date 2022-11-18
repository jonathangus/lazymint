import { useAccount } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';
import { useEffect, useState } from 'react';
import { pickRandomPoap } from '../utils/pickRandomPoap';
import { poaps } from '../utils/poaps';
import LazyMintSteps from './LazyMintSteps';
import VerifyingSignUp from './VerifyingSignUp';

const App = () => {
  const [step, setStep] = useState(1);
  const { address: userAddress } = useAccount();
  const { data: isWatched, isLoading: isLoadingWatcher } = useContractRead(
    LazyNFT__factory,
    'watchers',
    {
      args: [userAddress as string],
      enabled: !!userAddress,
    }
  );

  const {
    waitForTxResult,
    write: addWatcher,
    isLoading,
  } = useContractWrite(LazyNFT__factory, 'addWatcher', {
    enabled: !!userAddress,
  });

  const { data: haveMinted, isLoading: isLoadingMinted } = useContractRead(
    LazyNFT__factory,
    'minted',
    {
      args: [userAddress as string],
      enabled: !!userAddress,
    }
  );

  
  useEffect(() => {
    if (isWatched === false) {
      setStep(1);
    }  
    // sequencer is used to not collide with the haveMinted state because both are true at the same time
    else if (isWatched === true) {
      setStep(3);
    } 
  }, [step, isLoading, isWatched, haveMinted]);

  const [poapLink, setPoapLink] = useState('');
  useEffect(() => {
    const randomPoap = pickRandomPoap(poaps);
    setPoapLink(randomPoap);
  }, []);

  if (isLoadingMinted || isLoadingWatcher || isLoading) {
    return <VerifyingSignUp />
  }
  return (
    <LazyMintSteps
      step={step}
      userAddress={userAddress}
      addWatcher={addWatcher}
      poapLink={poapLink}
      setStep={setStep}
      haveMinted={haveMinted}
    />
  );
};

export default App;
