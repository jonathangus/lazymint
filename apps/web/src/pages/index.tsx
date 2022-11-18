import { ConnectButton } from '@rainbow-me/rainbowkit';
import App from "../components/App";
import { useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';
import styles from '../styles/LazyMinting.module.css';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h2 className={styles.lazyMintFont} style={{ fontWeight: 700 }}>
        Lazy Mint
      </h2>
      <ConnectButton label="Connect" />
    </div>
  );
};

const Page = () => {
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
        <App />
      </div>
    </>
  );
};

export default Page;
