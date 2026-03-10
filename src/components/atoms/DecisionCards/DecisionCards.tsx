import React from 'react';
import styles from './DecisionCards.module.css';
import { motion } from 'framer-motion';

interface DecisionCardProps {
  icon: string;
  title: string;
  description: string;
}

const DecisionCard: React.FC<DecisionCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <div className={styles.iconWrapper}>
          <motion.img 
            src={icon} 
            alt={`${title} icon`} 
            className={styles.icon}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>
        <div className={styles.textSection}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecisionCard;