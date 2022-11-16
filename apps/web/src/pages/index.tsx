import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Demo from '../components/Demo';

const Page = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div>
        <ConnectButton />
      </div>

      <Demo />
    </div>
  );
};

export default Page;
