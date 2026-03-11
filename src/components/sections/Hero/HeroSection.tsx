import React from "react";
import styles from "./HeroSection.module.css";

import { motion, AnimatePresence } from "framer-motion";

import centralPhone from "@/assets/Hero/central.png";
import left1 from "@/assets/Hero/left1.png";
import left2 from "@/assets/Hero/left2.png";
import left3 from "@/assets/Hero/left3.png";
import right1 from "@/assets/Hero/right1.png";
import right2 from "@/assets/Hero/right2.png";
import right3 from "@/assets/Hero/right3.png";
import bgCentral from "@/assets/Hero/bgCentral.png";
import bgLeft from "@/assets/Hero/left.png";
import bgRight from "@/assets/Hero/right.png";

const HeroSection: React.FC = () => {
  const roles = [
    "Web Designer",
    "Bartender",
    "Sr. Engineer",
    "Developer",
    "Visual Designer",
    "Product Designer",
  ];

  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1500); // cambia cada 1.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <motion.div
        className={styles.gradient}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className={styles.container}>
        <h1 className={styles.title}>
          Fernando Vega is a <br /> 
          <AnimatePresence mode="wait">
            <motion.span
              className={styles.underline}
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {roles[currentRole]}
            </motion.span>
          </AnimatePresence>
          {" "} 
          specializing in:
        </h1>

        <div className={styles.tags}>
          <span className={styles.tagUi}>UI</span>
          <span className={styles.tagFrontend}>Front-End</span>
          <span className={styles.tagMotion}>Motion</span>
          <span className={styles.tagUx}>UX Writing</span>
        </div>

        <div className={styles.mockupsWrapper}>
          <div className={styles.mockupsContainer}>
            {/* Blue diagonal stripes */}

            <div className={styles.stripe}>
              <img src={bgCentral} alt="" className={styles.stripe1} />
            </div>

            {/* Phone mockups */}
            <div className={styles.phone}>
              <img
                src={left3}
                alt="Burger app mockup"
                className={styles.phoneImage}
              />
            </div>

            <div className={styles.phone}>
              <img
                src={left2}
                alt="Lessons app mockup"
                className={styles.phoneImage}
              />
            </div>

            <div className={styles.phone}>
              <img
                src={left1}
                alt="Real estate app mockup"
                className={styles.phoneImage}
              />
            </div>

            <div className={`${styles.phone} ${styles.phoneCenter}`}>
              <img
                src={centralPhone}
                alt="ASLingo app mockup"
                className={styles.phoneImage}
              />
            </div>

            <div className={styles.phone}>
              <img
                src={right1}
                alt="Furniture app mockup"
                className={styles.phoneImage}
              />
            </div>

            <div className={styles.phone}>
              <img
                src={right2}
                alt="Social feed app mockup"
                className={styles.phoneImage}
              />
            </div>

            <div className={styles.phone}>
              <img
                src={right3}
                alt="Menu list app mockup"
                className={styles.phoneImage}
              />
            </div>

            <img src={bgLeft} alt="" className={styles.stripe2} />
            <img src={bgRight} alt="" className={styles.stripe3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
