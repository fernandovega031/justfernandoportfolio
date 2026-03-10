import styles from "./outcomes.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import slide1  from "@/assets/ASLingo/outcomes/slide1.png";
import slide2  from "@/assets/ASLingo/outcomes/slide2.png";
import slide3  from "@/assets/ASLingo/outcomes/silde3.png";
import outcomeTitle  from "@/assets/ASLingo/outcomes/title.png";

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

const OutcomesSection: React.FC = () => {     
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
    <motion.section className={styles.outcomesSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

      
              <motion.img
        src={outcomeTitle}
        className={styles.outcomeTitle}
        variants={itemVariants}
          />

          
              <motion.img
        src={slide1}
        className={styles.slide1}
        variants={itemVariants}
          />

          
              <motion.img
        src={slide2}
        className={styles.slide2}
        variants={itemVariants}
          />

          
              <motion.img
        src={slide3}
        className={styles.slide3}
        variants={itemVariants}
          />

    </motion.section>
  );
};

export default OutcomesSection;