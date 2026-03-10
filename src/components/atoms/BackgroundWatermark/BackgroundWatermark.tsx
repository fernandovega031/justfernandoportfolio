import React from 'react';
import styles from './BackgroundWatermark.module.css';

export const BackgroundWatermark: React.FC = () => {
  const rows = [
    "EVEREST REDESIGN • EVEREST REDESIGN",
    "EVEREST REDESIGN • EVEREST REDESIGN • EVEREST REDESIGN • EVEREST REDESIGN",
    "EVEREST REDESIGN • EVEREST REDESIGN",
  ];

  // Function to create a long repeating string for the marquee
  const getRepeatedText = (text: string) => {
    // Repeat the text 4 times to ensure it covers wide screens before duplication
    return Array(4).fill(text).join(" • ") + " • ";
  };

  return (
    <div className={styles.container}>
      {rows.map((text, idx) => {
        const isEven = idx % 2 === 0;
        const repeatedContent = getRepeatedText(text);

        return (
          <div key={idx} className={styles.row}>
            <div className={`${styles.marqueeContainer} ${isEven ? styles.marqueeContainerLeft : styles.marqueeContainerRight}`}>
              <span className={styles.textSpan}>
                {repeatedContent}
              </span>
              <span className={styles.textSpan}>
                {repeatedContent}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
