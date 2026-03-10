import styles from "./competitiveAudit.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import crossAudit from "@/assets/ASLingo/audit/cross.png";
import check from "@/assets/ASLingo/audit/check.png";
import signSchool from "@/assets/ASLingo/audit/SignSchool.png";
import ASL from "@/assets/ASLingo/audit/aslApp.png";
import lingvano from "@/assets/ASLingo/audit/Lingvano.png";
import doulingo  from "@/assets/ASLingo/audit/doulingo.png";

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


const UserFlowSection: React.FC = () => {  
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
    <motion.section className={styles.competitiveSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

              <motion.img
        src={signSchool}
        className={styles.signSchool}
        variants={itemVariants}
          />

                        <motion.img
        src={ASL}
        className={styles.ASL}
        variants={itemVariants}
          />

                        <motion.img
        src={lingvano}
        className={styles.lingvano}
        variants={itemVariants}
          />

                        <motion.img
        src={doulingo}
        className={styles.doulingo}
        variants={itemVariants}
          />

        <motion.img
        src={crossAudit}
        className={styles.crossAudit}
        variants={itemVariants}
          />

                  <motion.img
        src={crossAudit}
        className={styles.crossAudit2}
        variants={itemVariants}
          />

                            <motion.img
        src={crossAudit}
        className={styles.crossAudit3}
        variants={itemVariants}
          />

                            <motion.img
        src={crossAudit}
        className={styles.crossAudit4}
        variants={itemVariants}
          />

                            <motion.img
        src={crossAudit}
        className={styles.crossAudit5}
        variants={itemVariants}
          />

                                      <motion.img
        src={crossAudit}
        className={styles.crossAudit6}
        variants={itemVariants}
          />

                                      <motion.img
        src={crossAudit}
        className={styles.crossAudit7}
        variants={itemVariants}
          />

                                      <motion.img
        src={crossAudit}
        className={styles.crossAudit8}
        variants={itemVariants}
          />

                                      <motion.img
        src={crossAudit}
        className={styles.crossAudit9}
        variants={itemVariants}   
          />

          <motion.img
        src={crossAudit}
        className={styles.crossAudit10}
        variants={itemVariants}
          />

                    <motion.img
        src={crossAudit}
        className={styles.crossAudit11}
        variants={itemVariants}
          />

                    <motion.img
        src={crossAudit}
        className={styles.crossAudit12}
        variants={itemVariants}
          />

                    <motion.img
        src={crossAudit}
        className={styles.crossAudit13}
        variants={itemVariants}
          />

                             <motion.img
        src={crossAudit}
        className={styles.crossAudit14}
        variants={itemVariants}
          />

                             <motion.img
        src={crossAudit}
        className={styles.crossAudit15}
        variants={itemVariants}
          />

        <motion.img
        src={check}
        className={styles.check}
        variants={itemVariants}
          />

                  <motion.img
        src={check}
        className={styles.check2}
        variants={itemVariants}
          />
          
                  <motion.img
        src={check}
        className={styles.check3}
        variants={itemVariants}
          />

                            <motion.img
        src={check}
        className={styles.check4}
        variants={itemVariants}
          />

                            <motion.img
        src={check}
        className={styles.check5}
        variants={itemVariants}
          />

                                      <motion.img
        src={check}
        className={styles.check6}
        variants={itemVariants}
          />

                                      <motion.img
        src={check}
        className={styles.check7}
        variants={itemVariants}
          />

       <motion.img
        src={check}
        className={styles.check8}
        variants={itemVariants}
          />

                 <motion.img
        src={check}
        className={styles.check9}
        variants={itemVariants}
          />

                 <motion.img
        src={check}
        className={styles.check10}
        variants={itemVariants}
          />

                 <motion.img
        src={check}
        className={styles.check11}
        variants={itemVariants}
          />

                 <motion.img
        src={check}
        className={styles.check12}
        variants={itemVariants}
          />

                 <motion.img
        src={check}
        className={styles.check13}
        variants={itemVariants}
          />

    </motion.section>
  );
};

export default UserFlowSection;