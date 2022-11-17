import AddToMintList from "./AddToMintList";
import ReadyToMint from "./ReadyToMint";
import NFTMintSuccess from "./NFTMintSuccess";

const LazyMintSteps = ({ step }: {step: number}) => {
    if(step === 1) {
        return <AddToMintList />
    }
    if (step === 2) {
        return <ReadyToMint />
    }
    if (step === 3) {
        return <NFTMintSuccess />
    }
}

export default LazyMintSteps;