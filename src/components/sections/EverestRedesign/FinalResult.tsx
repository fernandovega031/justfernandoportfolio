import styles from "./FinalResult.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import bgArrow  from "@/assets/EverestRedesign/bgArrow.png";
import Hand  from "@/assets/EverestRedesign/HandPhone.png";


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

const FinalResultSection: React.FC = () => {     
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
    <motion.section className={styles.finalresultSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

<div className={styles.content}>
        <p className={styles.tagline}>We dedicate our efforts</p>
        <p className={styles.subtitle}>for every client as if they were</p>
        
        <h2 className={styles.title}>Final Result</h2>
        
        <div className={styles.paragraphs}>
          <p>
            The <strong>Everest Redesign</strong> project resulted in the real-world
            implementation of multiple redesigns for active clients,
            covering an approximate scope of ten websites.
          </p>
          
          <p>
            Although the project was based on <strong>reusable components</strong>{' '}
            and <strong>design patterns</strong>, each solution was visually adapted to
            align with the specific guidelines and requirements of each
            client, ensuring consistency without sacrificing
            personalisation.
          </p>
          
          <p>
            From a professional standpoint, the most noticeable
            improvements were reflected in <strong>navigation</strong> and <strong>overall
            aesthetics—particularly</strong> in key sections such as the
            homepage and hero sections, where visual impact was most
            significant.
          </p>
          
          <p>
            The process involved <strong>continuous reviews</strong> with senior
            designers, allowing deliverables to be refined and quality to
            be ensured, even under time and scope constraints. This
            project strengthened my skills in <strong>visual hierarchy</strong>,{' '}
            <strong>consistency</strong>, and <strong>attention to detail</strong> within a high-demand
            environment.
          </p>
        </div>
      </div>
      
      <div className={styles.imageContainer}>

          <motion.img 
        src={bgArrow}
        variants={itemVariants}
        alt="Modern bookshelf with plants and decorative items"
        className={styles.image}
          />

                  <motion.img
        src={Hand}
        className={styles.HandImg}
        variants={itemVariants}
          />
      </div>

      


    </motion.section>
  );
};

export default FinalResultSection;