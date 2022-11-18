
import LazyMintSteps from './LazyMintSteps';

const Demo = ({ step, ...props }) => {
  return (
    <>
      <LazyMintSteps step={step} {...props}/>
    </>
  );
};

export default Demo;
