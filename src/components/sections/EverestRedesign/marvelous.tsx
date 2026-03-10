import styles from "./marvelous.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import MarvelousText from "@/components/atoms/iconText/iconText";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
};

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const MarvelousSection: React.FC = () => {
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
    <motion.section
      className={styles.MarvelousSection}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className={styles.backgroundGradients}>
        <div className={styles.gradient1} />
        <div className={styles.gradient2} />
        <div className={styles.gradient3} />
      </div>

      <main className={styles.content}>
        <div className={styles.textContainer}>
          <motion.h1 variants={itemVariants} className={styles.heading}>Sometimes just only</motion.h1>
          <motion.h1 variants={itemVariants} className={styles.heading}>need time and</motion.h1>
          <motion.h1 variants={itemVariants} className={styles.heading}>patience to build a</motion.h1>
          <motion.div variants={itemVariants} className={styles.marvelousContainer}>
            <MarvelousText />
            <span className={styles.endText}>&thinsp; website.</span>
          </motion.div>
        </div>
      </main>
    </motion.section>
  );
};

export default MarvelousSection;