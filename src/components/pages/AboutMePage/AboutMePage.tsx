import styles from "./AboutMePage.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProfileInfo from "@/components/molecules/ProfileInfo/ProfileInfo";
import TimelineSection from "@/components/molecules/Timeline/Timeline";
import FadeInSection from "@/components/Animations/FadeInSection";
 


  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};



const AboutMePage: React.FC = () => {     
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
    <motion.section className={styles.sobreMiSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

    <ProfileInfo />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heading}
      >
        My Journey
      </motion.h2>
      
      <TimelineSection />

      <FadeInSection>
        <h2 className={styles.foreword}>
          What's Next?
        </h2>
      </FadeInSection>

    </motion.section>
  );
};

export default AboutMePage;