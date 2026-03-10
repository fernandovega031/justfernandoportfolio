import styles from "./GapSlide.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import component from "@/assets/ASLingo/colors/white.png";
import { DesignSlide } from "@/components/atoms/DesignSlide/DesignSlide";
import Iphone  from "@/assets/EverestRedesign/IphoneJump1.png";


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

const GapSection: React.FC = () => {
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
      className={styles.gapSection}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >


                <motion.img
        src={Iphone}
        className={styles.IphoneImg}
        variants={itemVariants}
          />

      <div className={styles.container}>



        <DesignSlide />
      </div>

    </motion.section>
  );
};

export default GapSection;