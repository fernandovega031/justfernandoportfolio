import styles from "./empathyMap.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import empathyTitle from "@/assets/ASLingo/Empathy/empathyTitle.png";
import emelyMap from "@/assets/ASLingo/Empathy/emelyMap.png";
import jamesMap from "@/assets/ASLingo/Empathy/jamesMap.png";
import emily from "@/assets/ASLingo/Empathy/emily.png";
import james from "@/assets/ASLingo/Empathy/James.png";
import cross from "@/assets/ASLingo/Empathy/cross.png";
import magnify from "@/assets/ASLingo/Empathy/magnify.png";
import triangle from "@/assets/ASLingo/Empathy/triangle.png";

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

const EmpathyMapSection: React.FC = () => {
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
        <motion.section className={styles.empathyMapSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

        <motion.img
        src={empathyTitle}
        className={styles.empathyTitle}
        variants={itemVariants}
          />

                  <motion.img
        src={emelyMap}
        className={styles.emelyMap}
        variants={itemVariants}
          />

                  <motion.img
        src={jamesMap}
        className={styles.jamesMap}
        variants={itemVariants}
          />

                  <motion.img
        src={emily}
        className={styles.emily}
        variants={itemVariants}
          />

                  <motion.img
        src={james}
        className={styles.james}
        variants={itemVariants}
          />

                  <motion.img
        src={cross}
        className={styles.cross}
        variants={itemVariants}
          />

                  <motion.img
        src={magnify}
        className={styles.magnify}
        variants={itemVariants}
          />

                            <motion.img
        src={triangle}
        className={styles.triangle}
        variants={itemVariants}
          />

    </motion.section>

  );
};

export default EmpathyMapSection;