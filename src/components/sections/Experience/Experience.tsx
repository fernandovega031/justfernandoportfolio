import styles from "./Experience.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import mylogo from "@/assets/experience/mylogo.png";
import tosh from "@/assets/experience/tosh.png";
import izzi from "@/assets/experience/izzi.png";
import leadventure from "@/assets/experience/leadventure.png";
import axtel from "@/assets/experience/axtel.png";
import arrow from "@/assets/experience/arrow.svg";

interface LogoItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Hook personalizado para detectar media queries
 * Evita usar window.innerWidth y permite CSS-driven responsive behavior
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

/**
 * Hook para obtener el número de logos visibles según el breakpoint
 */
const useVisibleLogosCount = (): number => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  if (isDesktop) return 5; // Desktop: 5 logos
  if (isTablet) return 3; // Tablet: 3 logos
  return 1; // Mobile: 1 logo
};

const ExperienceSection: React.FC = () => {
  const visibleCount = useVisibleLogosCount();

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

  /** Array de logos con información semántica mejorada */
  const logos: LogoItem[] = [
    {
      src: axtel,
      alt: "Axtel - Experiencia profesional",
      width: 140,
      height: 70,
    },
    {
      src: izzi,
      alt: "izzi - Experiencia profesional",
      width: 140,
      height: 80,
    },
    {
      src: tosh,
      alt: "The Old Storehouse - Experiencia profesional",
      width: 180,
      height: 80,
    },
    {
      src: mylogo,
      alt: "Fernando Vega - Marca personal",
      width: 120,
      height: 120,
    },
    {
      src: leadventure,
      alt: "Leadventure - Experiencia profesional",
      width: 160,
      height: 60,
    },
  ];

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

  /**
   * Calcula los logos visibles según el tamaño de pantalla
   * Adapta dinámicamente la cantidad de logos mostrados
   */
  const getVisibleLogos = (): LogoItem[] => {
    const visible: LogoItem[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % logos.length;
      visible.push(logos[index]);
    }
    return visible;
  };

  return (
    <section className={styles.experienceSection} aria-labelledby="experience-title">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 id="experience-title" className={styles.title}>
            <span className={styles.titleBar} aria-hidden="true" />
            Experience
          </h2>
        </div>

        <div
          className={styles.carouselWrapper}
          role="region"
          aria-label="Carousel de experiencias profesionales"
        >
          {/* Left arrow button */}
          <button
            onClick={prev}
            className={styles.arrowButton}
            aria-label={`Mostrar experiencias anteriores (actualmente en posición ${currentIndex + 1} de ${logos.length})`}
            type="button"
          >
            <img
              src={arrow}
              alt=""
              width={24}
              height={24}
              className={styles.arrowImage}
              aria-hidden="true"
              decoding="async"
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
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right arrow button */}
          <button
            onClick={next}
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            aria-label={`Mostrar más experiencias (actualmente en posición ${currentIndex + 1} de ${logos.length})`}
            type="button"
          >
            <img
              src={arrow}
              alt=""
              width={24}
              height={24}
              className={styles.arrowImage}
              aria-hidden="true"
              decoding="async"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;