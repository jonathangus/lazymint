import { useAccount } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi-lfg';
import { LazyNFT__factory } from 'web3-config';

type Props = {};

const Demo = ({}: Props) => {
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

  const { waitForTxResult: mintTx, write: tmpMint } = useContractWrite(
    LazyNFT__factory,
    'tempMint'
  );
  const { data: haveMinted } = useContractRead(LazyNFT__factory, 'minted', {
    args: [userAddress as string],
    enabled: !!userAddress,
  });

  return (
    <div>
      <button
        disabled={waitForTxResult.isLoading}
        onClick={() => {
          addWatcher();
        }}
      >
        Add watcher
      </button>

      {typeof isWatched == 'boolean' && (
        <div>Is being watched: {isWatched.toString()}</div>
      )}

      <button
        disabled={mintTx.isLoading}
        onClick={() => {
          tmpMint();
        }}
      >
        temp mint
      </button>

      {typeof haveMinted == 'boolean' && (
        <div>User have minted: {haveMinted.toString()}</div>
      )}
    </div>
  );
};

export default Demo;
