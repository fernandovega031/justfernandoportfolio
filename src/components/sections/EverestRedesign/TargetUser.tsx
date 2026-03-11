import styles from "./TargetUser.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Iphone  from "@/assets/EverestRedesign/IphoneTargetUser.png";
import Graphic  from "@/assets/EverestRedesign/GraphicDesignTargetUser.png";

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

const TargetUserSection: React.FC = () => {
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
    <motion.section
      className={styles.targetUserSection}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >

        <motion.img
        src={Iphone}
        className={styles.IphoneImg}
        variants={itemVariants}
          />

        <motion.img
        src={Graphic}
        className={styles.GraphicImg}
        variants={itemVariants}
          />


      <div className={styles.gridLayout}>
        {/* Top Section */}
        <section className={styles.sectionTop}>
          {/* Header */}
          <div className={styles.headingContent}>
            <h1 className={styles.headingDisplay}>
              Target <br />
              <span className={styles.headingBold}>User</span>
            </h1>
          </div>

          {/* Content */}
          <div className={styles.contentBlock}>
            <p className={styles.textParagraph}>
              The redesign was primarily aimed at{" "}
              <span className={styles.textHighlight}>adults</span> and{" "}
              <span className={styles.textHighlight}>senior users</span> seeking
              clear and reliable information about products and services within
              the transportation sector.
            </p>
            <p className={styles.textParagraph}>
              This type of user values{" "}
              <span className={styles.textHighlight}>simplicity, readability</span>
              , and{" "}
              <span className={styles.textHighlight}>ease of use</span>, and often
              becomes frustrated with visually cluttered interfaces or unclear
              user flows.
            </p>
          </div>
        </section>

        {/* Bottom Section */}
        <section className={styles.sectionBottom}>
          {/* Spacer for Left Side */}
          <div className={styles.spacer}></div>

          {/* Content Right Side */}
          <div className={styles.secondSectionText}>
            <h2
              className={styles.headingDisplay}

            >
              How We <br />
              Got There...
            </h2>

            <p className={styles.textParagraph}>
              For this reason, the design prioritised a clear visual hierarchy,
              appropriate contrast, legible typography, and straightforward{" "}
              <span className={styles.textHighlight}>
                navigation, reducing cognitive load
              </span>{" "}
              to a minimum.
            </p>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default TargetUserSection;