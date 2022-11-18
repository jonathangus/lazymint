import styles from "../styles/LazyMinting.module.css";
import Link from "next/link";
import LazyMintSteps from "./LazyMintSteps";
import { useEffect } from "react";

const ClaimPoap = ({ poapLink, setStep }) => {

const handleOnClick = () => {
    setStep(4)
}

    return (
    <div className={styles.cardContainer}>
      <h1 style={{ width: '100%', textAlign: 'center' }}>Claim poap:</h1>
      <h2>
        <Link href={poapLink}>
          <a target="_blank">{poapLink}</a>
        </Link>
      </h2>

      <button
        disabled={!!!poapLink}
        style={{
          color: 'white',
          backgroundColor: '#0029FF',
          height: '48px',
          width: '80%',
          borderRadius: '8px',
          padding: '8px 16px 8px 16px',
          gap: '10px',
          cursor: 'pointer',
          borderTop: '1px solid #CACACA',
          marginTop: '24px',
        }}
        onClick={() => {
          handleOnClick()
        }}
      >
        Click here when you have claimed your POAP
      </button>
    </div>
  );
};

export default ClaimPoap;