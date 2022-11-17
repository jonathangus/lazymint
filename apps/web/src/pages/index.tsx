import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Demo from '../components/Demo';
import styles from '../styles/LazyMinting.module.css';
import { useContext } from "react";
import LazyMintStepsContext from '../context/LazyMintStepsContext';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h2 className={styles.lazyMintFont}>Lazy Mint</h2>
      <ConnectButton label="Connect" />
    </div>
  );
};

const Page = () => {
  const [step, setStep] = useContext(LazyMintStepsContext);
  
  return (
    <>

      <div>
        <Header />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Demo step={step}/>
      </div>
    </>
  );
};

export default Page;
