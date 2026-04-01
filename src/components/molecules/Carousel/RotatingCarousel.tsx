import styles from "./RotatingCarousel.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import component  from "@/assets/ASLingo/colors/white.png";

import ASLingo from '@/assets/ASLingo.png';
import TruckBruger from '@/assets/TruckBurgerFP.png';
import EverestRedesign from '@/assets/EverestRedesign.png';
import MySpace from '@/assets/MySpaceFP.png';
import { Link } from "react-router";


const CAROUSEL_ITEMS = [
  { id: 1,  image: ASLingo, linkto: 'ASLingo' },
  { id: 2,  image: TruckBruger, linkto: 'TruckBurger' },
  { id: 3,  image: EverestRedesign, linkto: 'EverestRedesign' },
  { id: 4,  image: MySpace, linkto: 'MySpace' },
  { id: 5, image: ASLingo, linkto: 'ASLingo' },
  { id: 6,  image: TruckBruger, linkto: 'TruckBurger' },
  { id: 7, image: EverestRedesign, linkto: 'EverestRedesign' },
];


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

const RotatingCarousel: React.FC = () => {     
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(3);
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    
        const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
    

    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

    const getRelativePosition = (index: number) => {
    const total = CAROUSEL_ITEMS.length;
    let diff = index - activeIndex;
    
    if (diff > Math.floor(total / 2)) {
      diff -= total;
    } else if (diff < -Math.floor(total / 2)) {
      diff += total;
    }
    return diff;
  };

  return (
    <motion.section className={styles.rotatingCarousel} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

      {/* Carousel Section */}
      <div className={styles.carouselContainer}>
        {CAROUSEL_ITEMS.map((item, index) => {
          const relativePos = getRelativePosition(index);
          const absPos = Math.abs(relativePos);
          const direction = relativePos > 0 ? 1 : -1;
          
          const x = direction * (absPos * 220); 
          const scale = Math.max(0.4, 1 - absPos * 0.15); 
          const y = absPos * 15; 
          const zIndex = 10 - absPos; 
          const opacity = absPos > 3 ? 0 : 1; 

          return (

            <motion.div
              key={item.id}
              className={styles.carouselItem}
              initial={false}
              animate={{
                x,
                y,
                scale,
                zIndex,
                opacity
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                mass: 1
              }}
              onClick={() => setActiveIndex(index)}

            >
              <Link to={`/${item.linkto}`} > 
               <img 
                 src={item.image} 
                 alt={`Carousel item ${item.id}`}
                 className={styles.carouselImage}
                 referrerPolicy="no-referrer"
               />
               <div className={styles.imageOverlay} />
              </Link>
            </motion.div>

          );
        })}
      </div>



    </motion.section>
  );
};

export default RotatingCarousel;