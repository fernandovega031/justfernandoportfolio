import React from 'react';
import styles from './learningCard.module.css';
import { motion } from 'framer-motion';

export interface LearningItem {
  id: string;
  title: string;
  description: string;
  icon:string;
}

interface LearningCardProps {
  item: LearningItem;
}

const LearningCard: React.FC<LearningCardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <motion.img 
          src={item.icon} 
          alt={`${item.title} icon`} 
          className={styles.icon}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {item.title}
        </h3>
        <p className={styles.description}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default LearningCard;
