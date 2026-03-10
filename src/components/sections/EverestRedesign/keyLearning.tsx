import styles from "./keyLearning.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import consistencyIcon from "@/assets/EverestRedesign/consistencyIsKey.svg";
import feedbackIcon from "@/assets/EverestRedesign/earlyFeedback.svg";
import lessIsMoreIcon from "@/assets/EverestRedesign/lessIsMore.svg";
import advancePrepIcon from "@/assets/EverestRedesign/advancePreparation.svg";

import Card from "@/components/atoms/learningCard/learningCard";

interface LearningItem {
  id: string;
  title: string;
  description: string;
    icon:string;
}

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

const KeyLearningSection: React.FC = () => {     
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

  const learnings: LearningItem[] = [
    {
      id: 'less-is-more',
      title: 'Less is more',
      description: 'Large-scale innovation is not always necessary to achieve an high-quality website. In many cases, small, well-executed changes are more than enough to elevate the overall experience.',
      icon:lessIsMoreIcon,

    },
    {
      id: 'advance-prep',
      title: 'Advance preparation',
      description: 'Establishing design systems, templates, and well-organised asset folders in advance significantly helps to save time and streamline the design process.',
        icon:advancePrepIcon,

    },
    {
      id: 'consistency',
      title: 'Consistency is key',
      description: 'Maintaining consistency is especially critical when project timelines are limited, allowing quality to be preserved without unnecessary complexity.',
        icon:consistencyIcon,
    },
    {
      id: 'feedback',
      title: 'Early feedback',
      description: 'Regular reviews with senior designers help identify improvement opportunities early in the process, enabling more effective refinement of details.',
      icon:feedbackIcon,    
    }
  ];


  return (
    <motion.section className={styles.keyLearningSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>
      <div className={styles.blobContainer}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>
      
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Key Learnings
          </h1>
        </header>

        <main className={styles.grid}>
          {learnings.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </main>
      </div>
    </motion.section>
  );
};

export default KeyLearningSection;