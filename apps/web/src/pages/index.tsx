import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Demo from '../components/Demo';
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
      <h2 className={styles.lazyMintFont}>Lazy Mint</h2>
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
        <Demo />
      </div>
    </>
  );
};

export default Page;
