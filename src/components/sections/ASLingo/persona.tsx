import styles from "./persona.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import personaTitle from "@/assets/ASLingo/persona/personatittle.png";
import guyImg from "@/assets/ASLingo/persona/guy.png";
import womanImg from "@/assets/ASLingo/persona/woman.png";

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

const PersonaSection: React.FC = () => {
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
    <motion.section className={styles.personaSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>
        <motion.img
        src={personaTitle}
        className={styles.personaTitle}
        variants={itemVariants}
          />

        <motion.img
        src={guyImg}
        className={styles.guyImg}
        variants={itemVariants}
          />

        <motion.img
        src={guyImg}
        className={styles.guyImg2}
        variants={itemVariants}
          />

        <motion.img
        src={guyImg}
        className={styles.guyImg3}
        variants={itemVariants}
          />

          <div className={styles.jamesInfo}>
            <p>
            <span>Name:</span> James Carter
            <br />
            <b>Age:</b> 35 years old 
            <br />
            <b>City:</b> Chicago, Illinois Living Situation: Lives alone but spends a lot of time caring for his 70-year-old mother, who has severe hearing impairment. 
            <br />
            <b>Occupation:</b> Nurse
            </p>
          </div>

          <div className={styles.jamesLogin}>
           
            <b>Gains:<br/></b>
             <span> Facilitate communication with her mother to improve her quality of life and ensure she understands medical and daily instructions clearly.</span>
           <br/>
            <b>Pains:</b> 
           <span> Despite his efforts, he finds it difficult to find time to learn ASL due to his demanding work schedule.
            </span>
          </div>

          <div className={styles.jamesComment}>
            <p>
                "Communication is key, and I want to make sure my mother never feels isolated."
            </p>
          </div>

        <motion.img
        src={womanImg}
        className={styles.womanImg}
        variants={itemVariants}
          />

        <motion.img
        src={womanImg}
        className={styles.womanImg2}
        variants={itemVariants}
          />

        <motion.img
        src={womanImg}
        className={styles.womanImg3}
        variants={itemVariants}
          />


        <motion.img
        src={womanImg}
        className={styles.womanImg3}
        variants={itemVariants}
          />

          <div className={styles.emilyInfo}>
            <p>
                <b>Name:</b> Emily Rodriguez
                <br />
                <b>Age:</b> 28 years old 
                <br />
                <b>City:</b> Los Angeles, California
                <br />
                <b>Situation:</b> Lives with her husband and her 4-year-old daughter, who has moderate hearing impairment.
                <br />
                <b>Occupation:</b> Freelance graphic designer.
            </p>
          </div>

          <div className={styles.emilyLogin}>
            <p>
            <h3>Gains:</h3> 
            Learn ASL in an interactive and creative way to better communicate with her daughter and foster her emotional and social development.
            <br /><br />
            <h3>Pain:</h3> 
            She struggles to find resources that are appealing to both adults and young children.
            </p>
          </div>

          <div className={styles.emilyComment}>
            <p>
            "I want my daughter to know that I understand her and that I will always be there for her."            </p>
          </div>

    </motion.section>
  );
};

export default PersonaSection;