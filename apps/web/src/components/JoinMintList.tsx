import styles from '../styles/LazyMinting.module.css';

const JoinMintList = ({userAddress, addWatcher}) => {

  return (
    <div className={styles.cardContainer}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #CACACA',
        }}
      >
        <div
          style={{
            fontSize: '120px',
          }}
        >
          ✍️
        </div>

        <h2 style={{ fontSize: "32px"}}>Join the Lazy Minting List</h2>
      </div>
      <button
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
            if(addWatcher) {
                addWatcher();
            }
        }}
      >
        Join here
      </button>
    </div>
  );
};

export default JoinMintList;
