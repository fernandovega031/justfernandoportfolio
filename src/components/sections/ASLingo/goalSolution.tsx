import styles from "./goalSolution.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



import goalTitle from "@/assets/ASLingo/GoalnSolution/GoalTitle.png";
import solutionTitle from "@/assets/ASLingo/GoalnSolution/SolutionTitle.png";

import arrowGoal from "@/assets/ASLingo/GoalnSolution/Arrow.png";
import arrowSolution from "@/assets/ASLingo/GoalnSolution/Arrow2.png";

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

const GoalSolutionSection: React.FC = () => {
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
    <motion.section className={styles.goalSolution} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>
    <div className={styles.goalSection}>   

        <motion.img
        src={goalTitle}
        className={styles.goalTitle}
          variants={itemVariants} 
          />


          <div className={styles.goalContainer}>
            <p className={styles.goalText}>
             Create a tool that helps a large part of the population learn American Sign Language (ASL) in an entertaining way to communicate with people who do not have the ability to communicate through speech. In this way, help connect many people.
            </p>
          </div>

    </div>


        <motion.img
        src={arrowGoal}
        className={styles.arrowGoal}
        variants={itemVariants}
          />

            <motion.img
        src={arrowSolution}
        className={styles.arrowSolution}
        variants={itemVariants}
          />
        

        <div className={styles.solutionSection}>
          
          <div className={styles.solutionContainer}>
            <p className={styles.solutionText}>
              Develop a digital tool capable of teaching large groups ASL in an interactive and entertaining way, where people can access it at any time and place through their mobile device. 

              Additionally, promote the inclusion of people with this disability and thus include them in any situation.
            </p>

          </div>

        </div>

        <motion.img
        src={solutionTitle}
        className={styles.solutionTitle}
        variants={itemVariants}
        />

 

    </motion.section>
  );
};

export default GoalSolutionSection;