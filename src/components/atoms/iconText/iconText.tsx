import React from 'react';
import styles from './iconText.module.css';
import ninja from '@/assets/EverestRedesign/ninja.svg';
import magnify from '@/assets/EverestRedesign/magnify.svg';
import thumbsUp from '@/assets/EverestRedesign/thumbsUp.svg'; 
import { motion } from 'framer-motion';



const MarvelousText: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        marvel&thinsp;
      </span>
      
      <div className={styles.iconGroup}>
        {/* Blue Star Icon */}
        <motion.div className={styles.iconWrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5 
      }}
        >
          <div className={`${styles.iconBox} ${styles.blueIcon}`}>
            <img src={ninja} alt="Ninja Icon" className={styles.icon} />
          </div>
        </motion.div>

        {/* Green Search Icon */}
        <motion.div className={styles.iconWrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.6 
      }}
        >
          <div className={`${styles.iconBox} ${styles.greenIcon}`}>
            <img src={magnify} alt="Magnifying Glass Icon" className={styles.icon} />
          </div>
        </motion.div>
        {/* Red Thumbs-up Icon */}
        <motion.div className={styles.iconWrapper}
              initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.7 
      }}
        >
          <div className={`${styles.iconBox} ${styles.redIcon}`}>
            <img src={thumbsUp} alt="Thumbs Up Icon" className={styles.icon} />
          </div>
        </motion.div>
      </div>

      <span className={styles.text}>
        &thinsp;us 
      </span>
    </div>
  );
};

export default MarvelousText;