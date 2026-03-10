
import React from 'react';
import styles from './GoalCards.module.css';

interface Goal {
  id: number;
  title: string;
  description: string;
}

interface GoalCardProps {
  goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <span className={styles.number}>{goal.id}</span>
      </div>
      <h3 className={styles.title}>
        {goal.title}
      </h3>
      <p className={styles.description}>
        {goal.description}
      </p>
    </div>
  );
};

export default GoalCard;
