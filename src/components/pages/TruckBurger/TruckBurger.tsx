import React from 'react';
import styles from "./TruckBurger.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import main from '@/assets/TruckBurger/Main.png';
import overview from '@/assets/TruckBurger/Description.png';
import miguel from '@/assets/TruckBurger/MiguelPersona.png';
import clara from '@/assets/TruckBurger/ClaraPersona.png';
import empMiguel from '@/assets/TruckBurger/MiguelEmpathy.png';
import empClara from '@/assets/TruckBurger/ClaraEmpathy.png';
import competitive from '@/assets/TruckBurger/Competitive.png';
import Information from '@/assets/TruckBurger/InformationArchitecture.png';
import wireframes from '@/assets/TruckBurger/Wireframes.png';
import visual from '@/assets/TruckBurger/Visual.png';
import typo from '@/assets/TruckBurger/Typography.png';
import color from '@/assets/TruckBurger/Color.png';
import outcomes from '@/assets/TruckBurger/Outcomes.png';
import thanks from '@/assets/TruckBurger/Thanks.png';
import FooterSection from '@/components/sections/Footer/Footer';


const TruckBurgerPage: React.FC = () => {
     const images = [
        main, overview, miguel, clara, empMiguel, empClara,competitive, Information, wireframes, visual, typo, color, outcomes, thanks
      ];
return (
<>

      {images.map((img, index) => {
        const { ref, inView } = useInView({ triggerOnce: true });

        return (
          <motion.img
            key={index}
            ref={ref}
            src={img}
            alt="Portfolio Image"
            className={styles.slidesImg}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
          />
        );
      })}

      <FooterSection />

</>
);
};


export default TruckBurgerPage;