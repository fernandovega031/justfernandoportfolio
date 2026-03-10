
import styles from "./Goals.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import GoalCard from "@/components/atoms/GoalCards/GoalCards";
import Iphone  from "@/assets/EverestRedesign/IphoneGoal.png";
import Tablet  from "@/assets/EverestRedesign/IpadGoal.png";


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



  const GoalsData: { id: number; title: string; description: string }[] = [
  {
    id: 1,
    title: "Attractive UI",
    description: "Modernize existing interfaces without compromising their functionality."
  },
  {
    id: 2,
    title: "Brand Focus",
    description: "Increase the perception of trust in the brand and its products."
  },
  {
    id: 3,
    title: "Target-Driven Design",
    description: "Reduce visual friction for adult and senior users."
  },
  {
    id: 4,
    title: "Respecting the Existing Website",
    description: "Preserve the original structure to avoid confusing loyal or frequent users with the new design."
  },
  {
    id: 5,
    title: "Enjoying the Process",
    description: "Have fun while refining my cognitive and design skills."
  }
];

  return (
    <motion.section className={styles.colorSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>


            <motion.img
        src={Iphone}
        className={styles.IphoneImg}
        variants={itemVariants}
          />



      {/* Content Container */}
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Goals
          </h1>
        </div>

        <div className={styles.main}>
          {/* First Row: 3 Cards */}
          <div className={styles.firstRow}>
            {GoalsData.slice(0, 3).map((goal) => (
              <div key={goal.id} className={styles.cardWrapper}>
                <div className={styles.cardContainer}>
                   <GoalCard goal={goal} />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: 2 Cards (Centered) */}
          <div className={styles.secondRow}>
            {GoalsData.slice(3, 5).map((goal) => (
              <div key={goal.id} className={styles.cardWrapper}>
                 <div className={styles.cardContainer}>
                   <GoalCard goal={goal} />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        <motion.img
        src={Tablet}
        className={styles.TabletImg}
        variants={itemVariants}
          />
    </motion.section>
    
  );
};

export default ColorSection;