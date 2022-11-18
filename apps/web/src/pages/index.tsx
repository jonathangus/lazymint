import { ConnectButton } from '@rainbow-me/rainbowkit';
import App from "../components/App";
import { useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';
import styles from '../styles/LazyMinting.module.css';

const Header = () => {
  const { waitForTxResult: mintTx, write: tmpMint } = useContractWrite(
    LazyNFT__factory,
    'tempMint'
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <button onClick={() => tmpMint()}>mint NFT</button>
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
