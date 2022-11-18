import styles from '../styles/LazyMinting.module.css';
import { motion } from 'framer-motion';

const VerifyingSignUp = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <motion.div
          style={{ fontSize: '120px' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ⏳
        </motion.div>
        <h3 style={{ textAlign: 'center' }}>
          Checking that you signed on to the lazy minting list
        </h3>
      </div>
    </>
  );
};

export default VerifyingSignUp;
