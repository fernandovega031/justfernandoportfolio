import styles from "./fromBegginer.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import element1 from "@/assets/ASLingo/All_should_know_this.png";
import element2 from "@/assets/ASLingo/Howcanwe.png";
import element3 from "@/assets/ASLingo/Newspaper.png";
import element4 from "@/assets/ASLingo/Newspaper2.png";
import element5 from "@/assets/ASLingo/Newspaper3.png";

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

const fromBegginerSection: React.FC = () => {
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
        <motion.section className={styles.fromBeginning} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

    <motion.div
      className={styles.sticker}
      variants={itemVariants}
    >
      From the beginning
    </motion.div>


    <motion.img
        src={element5}
        className={styles.element5}
        variants={itemVariants}
          />

              <motion.img
        src={element4}
        className={styles.element4}
        variants={itemVariants}
          />

              <motion.img
        src={element4}
        className={styles.element4}
        variants={itemVariants}
          />

    <motion.img
        src={element3}
        className={styles.element3}
        variants={itemVariants}
          />

        <motion.img
        src={element1}
        className={styles.element1}
        variants={itemVariants}
          />

        <motion.img
        src={element2}
        className={styles.element2}
        variants={itemVariants}
          />

        </motion.section>
  );
};

export default fromBegginerSection;