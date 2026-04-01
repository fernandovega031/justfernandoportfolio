import styles from "./RotatingCarousel.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useCallback } from "react";

import ASLingo from '@/assets/ASLingo.png';
import TruckBruger from '@/assets/TruckBurgerFP.png';
import EverestRedesign from '@/assets/EverestRedesign.png';
import MySpace from '@/assets/MySpaceFP.png';
import { Link } from "react-router";

const CAROUSEL_ITEMS = [
  { id: 1, image: ASLingo, linkto: 'ASLingo', alt: 'ASLingo project showcase' },
  { id: 2, image: TruckBruger, linkto: 'TruckBurger', alt: 'TruckBurger project showcase' },
  { id: 3, image: EverestRedesign, linkto: 'EverestRedesign', alt: 'Everest Redesign project showcase' },
  { id: 4, image: MySpace, linkto: 'MySpace', alt: 'MySpace project showcase' },
  { id: 5, image: ASLingo, linkto: 'ASLingo', alt: 'ASLingo project showcase' },
  { id: 6, image: TruckBruger, linkto: 'TruckBurger', alt: 'TruckBurger project showcase' },
  { id: 7, image: EverestRedesign, linkto: 'EverestRedesign', alt: 'Everest Redesign project showcase' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const RotatingCarousel: React.FC = () => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  // Responsive carousel spacing calculation
  const getCarouselSpacing = useCallback(() => {
    if (viewportWidth < 640) return 100; // Mobile
    if (viewportWidth < 1024) return 150; // Tablet
    return 220; // Desktop
  }, [viewportWidth]);

  // Responsive scale calculation
  const getMinScale = useCallback(() => {
    if (viewportWidth < 640) return 0.5;
    if (viewportWidth < 1024) return 0.45;
    return 0.4;
  }, [viewportWidth]);

  // Handle window resize with debounce
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setViewportWidth(window.innerWidth);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation trigger
  useEffect(() => {
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

  const spacing = getCarouselSpacing();
  const minScale = getMinScale();

  return (
    <motion.section
      className={styles.rotatingCarousel}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      aria-label="Featured projects carousel"
    >
      {/* Carousel Container */}
      <div className={styles.carouselContainer} role="region" aria-live="polite" aria-label="Carousel">
        {CAROUSEL_ITEMS.map((item, index) => {
          const relativePos = getRelativePosition(index);
          const absPos = Math.abs(relativePos);
          const direction = relativePos > 0 ? 1 : -1;

          const x = direction * (absPos * spacing);
          const scale = Math.max(minScale, 1 - absPos * 0.15);
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
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                mass: 1,
              }}
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`Show ${item.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveIndex(index);
                }
              }}
            >
              <Link to={`/${item.linkto}`} aria-label={`View ${item.alt}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={styles.carouselImage}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </Link>
            </motion.div>
          );
        })}
      </div>


    </motion.section>
  );
};

export default RotatingCarousel;