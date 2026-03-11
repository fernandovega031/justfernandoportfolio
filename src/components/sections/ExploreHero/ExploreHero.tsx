import React from 'react';
import styles from './ExploreHero.module.css';
import Avatar from "@/components/atoms/Avatar/Avatar.tsx";
import imgsrc from '@/assets/profilePhoto.jpg';
import { motion } from "framer-motion";


const ExploreHeroSection: React.FC = () => {
return (
      <>
      <motion.div
    className={styles.gradient}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }} />
    
    <motion.div initial={{ opacity: 0, y: 0 }} // Inicia invisible y desplazado hacia abajo
      animate={{ opacity: 1, y: 0 }} // Se hace visible y sube
      exit={{ opacity: 0, y: 0 }} // Se desvanece y sube al salir
      transition={{ duration: 0.9, ease: "easeOut" }} // Animación suave
      className={styles.HeroSection}>

      <Avatar src={imgsrc} alt="Fernando Vega" />
      <motion.div initial={{ opacity: 0, y: 50 }} // Inicia invisible y desplazado hacia abajo
        animate={{ opacity: 1, y: 0 }} // Se hace visible y sube
        exit={{ opacity: 0, y: -50 }} // Se desvanece y sube al salir
        transition={{ duration: 1, ease: "easeOut", delay: .5 }} // Animación suave
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
    
    </>
);
};


export default ExploreHeroSection;