import styles from "./color.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import component  from "@/assets/ASLingo/colors/white.png";


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

const ColorSection: React.FC = () => {     
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
    <motion.section className={styles.colorsSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

        <motion.img
        src={component}
        className={styles.white}
        variants={itemVariants}
          />



    </motion.section>
  );
};

export default ColorSection;