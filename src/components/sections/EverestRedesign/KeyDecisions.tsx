import styles from "./KeyDecision.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import DecisionCard from "@/components/atoms/DecisionCards/DecisionCards";

import arrrowReverse from "@/assets/EverestRedesign/arrowsReverse.svg";
import inputCTA from "@/assets/EverestRedesign/inputCTA.svg";
import paintBucket from "@/assets/EverestRedesign/paintBucket.svg";
import signSimplification from "@/assets/EverestRedesign/SignSimplification.svg";
import Laptop  from "@/assets/EverestRedesign/LaptopKeyDecisions.png";


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

const KeyDecisionSection: React.FC = () => {     
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
    <motion.section className={styles.keyDecisionSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>
      <div className={styles.container}>
        
        {/* Large Dark Card */}
        <div className={styles.largeCard}>
          <div>
            <h1 className={styles.largeCardTitle}>
              Key Decisions
            </h1>
          </div>
          
          <div className={styles.largeCardContent}>
            <p className={styles.largeCardText}>
              These factors were critical to the success of  <br /> the projectand guided the process from start to finish.
            </p>
          </div>

        <motion.img
        src={Laptop}
        className={styles.LaptopImg}
        variants={itemVariants}
          />

        </div>

        {/* Card 2: Simplification */}
        <div className={styles.cardWrapper3}>
          <DecisionCard 
            icon={signSimplification}
            title="Simplification"
            description="The visual hierarchy was redefined using white space, clear text sizing, and a more structured content organisation."
          />
        </div>

        {/* Card 3: Consistency */}
        <div className={styles.cardWrapper1}>
          <DecisionCard 
            icon={arrrowReverse}
            title="Consistency"
            description="Visual components such as buttons, cards, and sections were standardised, ensuring a coherent and unified visual language."
          />
        </div>

        {/* Card 4: Defined CTAs */}
        <div className={styles.cardWrapper2}>
          <DecisionCard 
            icon={inputCTA}
            title="Defined CTAs"
            description="Call-to-action elements were strengthened through the strategic use of colour, size, and layout positioning."
          />
        </div>

        {/* Card 5: Readability & Contrast */}
        <div className={styles.cardWrapper3}>
          <DecisionCard 
            icon={paintBucket}
            title="Readability & Contrast"
            description="Legible typography, appropriate contrast levels, and a consistent typographic scale were applied to enhance clarity."
          />
        </div>

      </div>
    </motion.section>
  );
};

export default KeyDecisionSection;