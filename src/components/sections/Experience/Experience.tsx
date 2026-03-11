import styles from "./Experience.module.css";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import mylogo from "@/assets/experience/mylogo.png"
import tosh from "@/assets/experience/tosh.png"
import izzi from "@/assets/experience/izzi.png"
import leadventure from "@/assets/experience/leadventure.png"
import axtel from "@/assets/experience/axtel.png"
import arrow from "@/assets/experience/arrow.svg"

const ExperienceSection: React.FC = () => {

  const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};


    const logos = [
          {
      src: axtel,
      alt: "Axtel",
      width: 140,
      height: 70,
    } ,
        {
      src: izzi,
      alt: "izzi",
      width: 140,
      height: 80,
    },
    {
      src: tosh,
      alt: "The Old Storehouse",
      width: 180,
      height: 80,
    },
    {
      src: mylogo,
      alt: "Fernando Vega",
      width: 120,
      height: 120,
    },
    {
      src: leadventure,
      alt: "Leadventure",
      width: 160,
      height: 60,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

const next = () => {
  setDirection(1);
  setCurrentIndex((prev) => (prev + 1) % logos.length);
};

const prev = () => {
  setDirection(-1);
  setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
};


  // Calculate visible logos
  const getVisibleLogos = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % logos.length
      visible.push(logos[index])
    }
    return visible
  }

  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleBar} />
          Experience
        </h2>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Left arrow */}
          <button
            onClick={prev}
            className={styles.arrowButton}
            aria-label="Previous"
          >

            
            <img
              src={arrow}
              alt="Previous"
              width={24}
              height={24}
              className={styles.arrowImage}
            />
          </button>

          {/* Logos carousel */}
      <div className={styles.carouselContent}>
  <AnimatePresence mode="popLayout" custom={direction}>
    {getVisibleLogos().map((logo, index) => (
      <motion.div
        key={`${logo.alt}-${currentIndex}-${index}`}
        className={styles.logoItem}
        custom={direction}
        variants={slideVariants}
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={styles.logoImage}
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>

          {/* Right arrow */}
          <button
            onClick={next}
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            aria-label="Next"
          >
            <img src={arrow} alt="Next" width={24} height={24} className={styles.arrowImage} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;