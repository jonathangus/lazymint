import { FC } from 'react';
import { useAccount } from 'wagmi';
import { Counter__factory } from 'web3-config';
import { useContractRead, useContractWrite } from 'wagmi-lfg';

const Counter: FC = () => {
  const { address: userAddress } = useAccount();
  const { data, error } = useContractRead(Counter__factory, 'getCount', {
    args: [userAddress as string],
    enabled: !!userAddress,
  });

  const {
    waitForTxResult,
    write: increase,
    isLoading,
  } = useContractWrite(Counter__factory, 'incrementCounter', {
    onErrorMessage: (err) => `Error: ${err.message}`,
  });

  return (
    <div>
      {data && <div>Count: {data.toString()}</div>}
      {isLoading && 'Loading...'}
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
};

export default Counter;
