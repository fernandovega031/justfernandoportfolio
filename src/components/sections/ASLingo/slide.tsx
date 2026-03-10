import styles from "./slide.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import imagen1 from "@/assets/ASLingo/frontpagePolygon1.svg";
import imagen2 from "@/assets/ASLingo/frontpagePolygon2.svg";
import imagen3 from "@/assets/ASLingo/frontpagePolygon3.svg";
import imagen4 from "@/assets/ASLingo/frontpagePolygon4.svg";
import imagen5 from "@/assets/ASLingo/frontpagePolygon5.svg";
import imagen6 from "@/assets/ASLingo/frontpagePhone.png";

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

const SlideSection: React.FC = () => {
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
<motion.section className={styles.slide} variants={containerVariants}  initial="hidden" animate={controls} ref={ref}>
      {/* Left Column */}
      <div className={styles.left}>
        <h1 className={styles.title}>
          Discover the World <br /> of ASL with ...
        </h1>
        <div className={styles.logoSpace}>
        <h2 className={styles.logoYellow}>ASLingo</h2>
        <h2 className={styles.logoBlue}>ASLingo</h2>
        <h2 className={styles.logoGreen}>ASLingo</h2>
        <h2 className={styles.logoRed}>ASLingo</h2>
        <h2 className={styles.logo}>ASLingo</h2>
        </div>
        <p className={styles.case}>Case study: Mobile App</p>

        <div className={styles.rolesContainer}>
        <span>Roles: </span>
        <div className={styles.roles}>
          <span style={{marginRight: "80px"}}>UX Research</span>
          <span style={{marginRight: "40px"}}>UI Designer</span>
          <span >Wireframing</span>
        </div>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        {/* Background grid */}
        <div className={styles.gridBg}></div>

        {/* Floating shapes */}
        <motion.img
          src={imagen1}
          className={styles.shapePink}
        variants={itemVariants}
        />

        <motion.img
          src={imagen2}
          className={styles.shapeWhite}
        variants={itemVariants}
        />

        <motion.img
          src={imagen3}
          className={styles.shapeGreen}
        variants={itemVariants}
        />


        <motion.img
          src={imagen4}
          className={styles.shapeRed}
        variants={itemVariants}
        />

        <motion.img
          src={imagen5}
          className={styles.shapeBlue}
        variants={itemVariants}
        />

        {/* Phone */}
        <motion.img
          src={imagen6}
          className={styles.phone}
        variants={itemVariants}
        />
      </div>
    </motion.section>
  );
};

export default SlideSection;