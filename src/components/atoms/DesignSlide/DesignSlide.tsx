
import styles from './DesignSlide.module.css';

export const DesignSlide = () => {
  // Create a reusable text component to ensure identical duplication for the loop
  const TextContent = () => (
    <div className={styles.textContent}>
      <h1 className={styles.heading}>
        Everest Redesign Everest Redesign Everest Redesign
      </h1>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.marqueeWrapper}>
          <TextContent />
        </div>
        
        <div className={styles.fadeOverlay} />
      </div>
    </div>
  );
};