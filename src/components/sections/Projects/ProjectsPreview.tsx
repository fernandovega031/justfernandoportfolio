import styles from "./ProjectsPreview.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React, { useState, useEffect } from 'react';
import RotatingCarousel from "@/components/molecules/Carousel/RotatingCarousel";




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

const ProjectPreview: React.FC = () => {     
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
    <motion.section className={styles.projectPreview} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

   
      {/* Header Section */}
      <div className={styles.header}>

        
        <h1 className={styles.title}>
          Big collections.<br />
          Chill, take your time.
        </h1>
        
        <div className={styles.buttonGroup}>
          <button className={styles.buttonPrimary}>
            <a href="https://www.linkedin.com/in/fernandovega031" target="_blank" rel="noopener noreferrer">
              Connect
            </a>
          </button>
          <button className={styles.buttonSecondary}>
            Learn more
          </button>
        </div>
      </div>

      <RotatingCarousel />



    </motion.section>
  );
};

export default ProjectPreview;