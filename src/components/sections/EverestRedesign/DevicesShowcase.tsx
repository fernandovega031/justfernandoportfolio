import styles from "./DevicesShowcase.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import { Blob } from "@/components/atoms/blob/blob";
import IphoneBlue  from "@/assets/EverestRedesign/IphoneBlueJump2.png";
import Laptop  from "@/assets/EverestRedesign/LaptopJump2.png";
import IphoneRed  from "@/assets/EverestRedesign/IphoneRedJump2.png";

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

const DevicesShowcaseSection: React.FC = () => {
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
      className={styles.DevicesShowcaseSection}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >

        <motion.img
        src={IphoneBlue}
        className={styles.IphoneBlueImg}
        variants={itemVariants}
          />

        <motion.img
        src={IphoneRed}
        className={styles.IphoneRedImg}
        variants={itemVariants}
          />

        <motion.img
        src={Laptop}
        className={styles.LaptopImg}
        variants={itemVariants}
          />

      <div className={styles.container}>
        {/* Left Blob - Yellowish */}
        <div className={styles.blobWrapper + " " + styles.blobLeft}>
          <Blob
            color="#FFC558"
            width="220px"
            height="200px"
            borderRadius="45% 55% 45% 55% / 55% 45% 60% 40%"
            morphRadius="55% 45% 60% 40% / 45% 55% 45% 55%"
            rotation={-5}
            hoverRotation={5}
            className="shadow-sm opacity-90 hover:opacity-100"
          />
        </div>

        {/* Middle Blob - Reddish-Orange (Main Feature) */}
        <div className={styles.blobWrapper + " " + styles.blobCenter}>
          <Blob
            color="#FF6B4A"
            width="340px"
            height="320px"
            borderRadius="38% 62% 58% 42% / 45% 55% 45% 55%"
            morphRadius="50% 50% 30% 70% / 60% 40% 60% 40%"
            rotation={2}
            hoverRotation={-3}
            hoverScale={1.1}
            className="shadow-xl"
          />
        </div>

        {/* Right Blob - Yellowish (Smaller) */}
        <div className={styles.blobWrapper + " " + styles.blobRight}>
          <Blob
            color="#FFCA5C"
            width="160px"
            height="150px"
            borderRadius="50% 50% 45% 55% / 55% 45% 55% 45%"
            morphRadius="40% 60% 60% 40% / 40% 60% 40% 60%"
            rotation={15}
            hoverRotation={10}
            className="shadow-sm opacity-90 hover:opacity-100"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default DevicesShowcaseSection;