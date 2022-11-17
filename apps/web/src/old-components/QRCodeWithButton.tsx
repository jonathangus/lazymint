import QRCode from 'react-qr-code';
import { useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';

const QRCodeWithButton = () => {
  const {
    waitForTxResult,
    write: addWatcher,
    isLoading,
  } = useContractWrite(LazyNFT__factory, 'addWatcher');
  return (
    <div
      style={{
        border: '1px solid #CACACA',
        borderRadius: '16px',
        gap: '24px',
        boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.15)',
        width: '375px',
        height: '460px',
      }}
    >
      <div
        style={{
          borderBottom: '1px solid #CACACA',
          padding: '24px',
        }}
      >
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div
        style={{
          padding: '24px',
          borderBottom: '1px solid #CACACA',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          backdropFilter: 'blur(24px)',
          background: 'rgba(255, 255, 255, 0.25)',
        }}
      >
        <button
          disabled={isLoading}
          style={{
            color: 'white',
            backgroundColor: '#0029FF',
            height: '48px',
            width: '100%',
            borderRadius: '8px',
            padding: '8px 16px 8px 16px',
            gap: '10px',
            cursor: 'pointer'
          }}
          onClick={() => {
            addWatcher();
          }}
        >
          Verify claim on-chain
        </button>
      </div>
    </div>
  );
};

export default QRCodeWithButton;
