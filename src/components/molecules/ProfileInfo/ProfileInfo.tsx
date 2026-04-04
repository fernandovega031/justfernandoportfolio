import styles from "./ProfileInfo.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Avatar from "@/components/atoms/Avatar/Avatar";

import profilePhoto from '@/assets/profilePhoto.jpg';


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

const ProfileInfo: React.FC = () => {     
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
    <motion.section className={styles.ProfileInfoSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>
    <motion.div initial={{ opacity: 0, y: 0 }}  // Inicia invisible y desplazado hacia abajo
    animate={{ opacity: 1, y: 0 }}   // Se hace visible y sube
    exit={{ opacity: 0, y: 0 }}    // Se desvanece y sube al salir
    transition={{ duration: 0.9, ease: "easeOut" }}  // Animación suave
    className={styles.HeroSection}>
      
      <Avatar src={profilePhoto} alt="Fernando Vega" />
      <motion.div initial={{ opacity: 0, y: 50 }}  // Inicia invisible y desplazado hacia abajo
      animate={{ opacity: 1, y: 0 }}   // Se hace visible y sube
      exit={{ opacity: 0, y: -50 }}    // Se desvanece y sube al salir
      transition={{ duration: 1, ease: "easeOut", delay : .5 }}  // Animación suave
      className={styles.TextContainer}>

      <div className={styles.NameLine}>
      <div className={styles.theLine}></div>
      <h2 className={styles.NameUser}>Fernando Vega</h2>
      </div>
      <h3 className={styles.TitleUser}>Product Designer / </h3>
      <h3 className={styles.TitleUser}>Front End Developer</h3>
      <p className={styles.DescriptionUser}>
        <strong>Fernando Vega</strong> is a Mexico-based Product Designer & Front End Developer, who has a
        creative and proactive approach, seeking new challenges that allow him to showcase his best
        qualities and overcome complex obstacles.
      </p>
      </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default ProfileInfo;