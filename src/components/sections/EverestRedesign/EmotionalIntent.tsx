import styles from "./EmotionalIntent.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import laptop  from "@/assets/EverestRedesign/Laptop1Emotional.png";
import desktop  from "@/assets/EverestRedesign/DesktopEmotional.png";
import ipad  from "@/assets/EverestRedesign/IpadEmotional.png";


  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

const EmotionalIntentSection: React.FC = () => {     
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section className={styles.EmotionalIntentSectionSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

 <div className={styles.container}>
      <div className={styles.slide}>
        {/* Left side content */}
        <div className={styles.leftContent}>
          <h1 className={styles.title}>
            Emotional
            <br />
            Intent
          </h1>
          <p className={styles.description}>
            Every visual decision was carefully considered to reduce friction and
            deliver a clear, trustworthy, and visually engaging experience and
            emotions.
          </p>
        </div>

        {/* Right side grid */}
        <div className={styles.grid}>
          {/* Top left Gray card */}
          <div className={`${styles.card} ${styles.cardGreen}`} >

          <motion.img
        src={laptop}
        className={styles.laptopImg}
        variants={itemVariants}
          />

          </div>


          {/* Simplicity card */}
          <div className={`${styles.card} ${styles.cardSimplicity}`}>
            <h2 className={styles.cardTitle}>Simplicity</h2>

              <p className={styles.cardText}>
              By reducing visual noise and limiting unnecessary options, the
              interface <strong>feels approachable and easy</strong> to understand
            </p>
          </div>


          {/* Right Top Gray card  */}
          <div className={`${styles.card} ${styles.cardGrayRight}`}  >

            <motion.img
        src={ipad}
        className={styles.ipadImg}
        variants={itemVariants}
          />

          </div>

          {/* Confidence card */}
          <div className={`${styles.card} ${styles.cardConfidence}`}>
            <h2 className={styles.cardTitle}>Confidence</h2>
            <p className={styles.cardText}>
              A clear visual hierarchy, consistent branding, and structured
              layouts help user <strong>trust the platform and the products</strong>{' '}
              offered
            </p>
          </div>

          {/* Gray card bottom */}
          <div className={`${styles.card} ${styles.cardGrayBottom}`}  >

          </div>

        <motion.img
        src={desktop}
        className={styles.desktopImg}
        variants={itemVariants}
          />
          
          {/* Clarity card */}
          <div className={`${styles.card} ${styles.cardClarity}`}>
            <h2 className={styles.cardTitle}>Clarity</h2>
            <p className={styles.cardText}>
              Well-defined navigation, readable content and visible calls to
              action <strong>allow users to quickly identify</strong> what to do
              and where to go
            </p>
          </div>
        </div>
      </div>
    </div>

    </motion.section>
  );
};

export default EmotionalIntentSection;