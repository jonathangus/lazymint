import AddToMintList from './App';
import ReadyToMint from './ReadyToMint';
import NFTMintSuccess from './NFTMintSuccess';
import VerifyingSignUp from './VerifyingSignUp';
import App from './App';
import JoinMintList from './JoinMintList';
import ClaimPoap from './ClaimPoap';

const LazyMintSteps = ({ step, ...props }) => {
  if (step === 1) {
    // Join the lazy minting list
    return (
      <JoinMintList
        userAddress={props?.userAddress}
        addWatcher={props?.addWatcher}
      />
    );
  }
  if (step === 2) {
    // Loading state
    return (
      <VerifyingSignUp />
    );
  }

  if (step === 3) {
    // Claim poap page
    return <ClaimPoap poapLink={props?.poapLink} setStep={props?.setStep}/>;
  }

  if (step === 4) {
    // Ready to mint page
    return <ReadyToMint haveMinted={props?.haveMinted} setStep={props?.setStep} />;
  }
  if (step === 5) {
    // NFT mint success page
    return <NFTMintSuccess />;
  }
};

export default LazyMintSteps;
