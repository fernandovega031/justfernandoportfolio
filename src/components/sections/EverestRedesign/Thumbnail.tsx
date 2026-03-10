import styles from "./Thumbnail.module.css";
import { motion } from "framer-motion";

import { BackgroundWatermark } from "@/components/atoms/BackgroundWatermark/BackgroundWatermark";
import laptop  from "@/assets/EverestRedesign/DeviceIntro.png";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ThumbnailSection: React.FC = () => {     
  return (
    <motion.section className={styles.ThumbnailSection}>
      <BackgroundWatermark />

      <div className={styles.contentWrapper}>
        
        <motion.img
        src={laptop}
        className={styles.laptopImg}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />
    
        <div className={styles.heroTextBlock}>
          <h1 className={styles.mainTitle}>
            Everest<br />Redesign
          </h1>
          
          <div className={styles.bylineSection}>
            <p className={styles.bylineText}>
              by <span className={styles.bylineAuthor}>Fernando Vega</span>
            </p>
            
            <p className={styles.descriptionText}>
              Client Website Redesign Focused On Clarity,<br />Trust And Accessibility
            </p>
          </div>
        </div>

    
        <div className={styles.roleSection}>
          <div>
            <p className={styles.roleLabel}>
              Role :
            </p>
            <p className={styles.roleTitle}>
              UI / Visual Designer
            </p>
          </div>
        </div>

      </div>

    </motion.section>
  );
};

export default ThumbnailSection;