import styles from "./ProjectsPreview.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react';
import RotatingCarousel from "@/components/molecules/Carousel/RotatingCarousel";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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

  const handleLearnMore = () => {
    // Scroll to projects or navigate to projects page
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className={styles.projectPreview}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      aria-label="Featured projects showcase"
    >
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          Big collections.<br />
          Chill, take your time.
        </h1>

        <div className={styles.buttonGroup}>
          <a
            href="https://www.linkedin.com/in/fernandovega031"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonPrimary}
            aria-label="Connect on LinkedIn"
          >
            Connect
          </a>
          <button
            className={styles.buttonSecondary}
            onClick={handleLearnMore}
            aria-label="Learn more about projects"
          >
            Learn more
          </button>
        </div>
      </header>

      <RotatingCarousel />
    </motion.section>
  );
};

export default ProjectPreview;