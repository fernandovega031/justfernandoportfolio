import styles from "./typography.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import font  from "@/assets/ASLingo/typography/font.png";
import test  from "@/assets/ASLingo/typography/test.png";
import lorem  from "@/assets/ASLingo/typography/lorem.png";
import title  from "@/assets/ASLingo/typography/title.png";


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

const TypographySection: React.FC = () => { 
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
    <motion.section className={styles.typographySection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>
              <motion.img
        src={font}
        className={styles.font}
        variants={itemVariants}
          />

        <motion.img
        src={lorem}
        className={styles.lorem}
        variants={itemVariants}
          />

        <motion.img
        src={test}
        className={styles.test}
        variants={itemVariants}
          />

        <motion.img
        src={title}
        className={styles.typographyTitle}
        variants={itemVariants}
          />


    </motion.section>
  );
};

export default TypographySection;