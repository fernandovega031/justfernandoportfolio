import styles from "./mockups.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import phone1 from "@/assets/ASLingo/mockup/phone1.png";
import phone2 from "@/assets/ASLingo/mockup/phone2.png";
import phone3 from "@/assets/ASLingo/mockup/phone3.png";
import phone4 from "@/assets/ASLingo/mockup/phone4.png";
import phone5 from "@/assets/ASLingo/mockup/phone5.png";
import phone6 from "@/assets/ASLingo/mockup/phone6.png";
import phone7 from "@/assets/ASLingo/mockup/phone7.png";
import phone8 from "@/assets/ASLingo/mockup/phone8.png";
import phone9 from "@/assets/ASLingo/mockup/phone9.png";
import phone10 from "@/assets/ASLingo/mockup/phone10.png";
import phone11 from "@/assets/ASLingo/mockup/phone11.png";
import phone12 from "@/assets/ASLingo/mockup/phone12.png";
import phone13 from "@/assets/ASLingo/mockup/phone13.png";
import phone14 from "@/assets/ASLingo/mockup/phone14.png";
import phone15 from "@/assets/ASLingo/mockup/phone15.png";
import phone16 from "@/assets/ASLingo/mockup/phone16.png";
import phone17 from "@/assets/ASLingo/mockup/phone17.png";
import phone18 from "@/assets/ASLingo/mockup/phone18.png";

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

const MockupsSection: React.FC = () => {     
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
    <motion.section className={styles.mockupsSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

        <motion.img
        src={phone1}
        className={styles.phone1}
        variants={itemVariants}
          />

                  <motion.img
        src={phone2}
        className={styles.phone2}
        variants={itemVariants}
          />

                            <motion.img
        src={phone3}
        className={styles.phone3}
        variants={itemVariants}
          />

                            <motion.img
        src={phone4}
        className={styles.phone4}
        variants={itemVariants}
          />

                            <motion.img
        src={phone5}
        className={styles.phone5}
        variants={itemVariants}
          />

                            <motion.img
        src={phone6}
        className={styles.phone6}
        variants={itemVariants}
          />


                            <motion.img
        src={phone7}
        className={styles.phone7}
        variants={itemVariants}
          />

                            <motion.img
        src={phone8}
        className={styles.phone8}
        variants={itemVariants}
          />

                            <motion.img
        src={phone9}
        className={styles.phone9}
        variants={itemVariants}
          />

                            <motion.img
        src={phone10}
        className={styles.phone10}
        variants={itemVariants}
          />

                            <motion.img
        src={phone11}
        className={styles.phone11}
        variants={itemVariants}
          />

                            <motion.img
        src={phone12}
        className={styles.phone12}
        variants={itemVariants}
          />

                            <motion.img
        src={phone13}
        className={styles.phone13}
        variants={itemVariants}
          />

                            <motion.img
        src={phone14}
        className={styles.phone14}
        variants={itemVariants}
          />

                  <motion.img
        src={phone15}
        className={styles.phone15}
        variants={itemVariants}
          />

                            <motion.img
        src={phone16}
        className={styles.phone16}
        variants={itemVariants}
          />

                  <motion.img
        src={phone17}
        className={styles.phone17}
        variants={itemVariants}
          />

                            <motion.img
        src={phone18}
        className={styles.phone18}
        variants={itemVariants}
          />



         
    </motion.section>
  );
};

export default MockupsSection;