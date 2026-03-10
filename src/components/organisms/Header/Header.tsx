import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence,useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react"
import LogoFV from "@/assets/LogoFV.png";

const Header: React.FC = () => {
    const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  
  const backgroundColorTransform = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"])
  const backdropFilterTransform = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"])

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40)
    })
  }, [scrollY])

  const { theme, toggleTheme } = useTheme();
  return (


    <motion.header
     style={{
    backgroundColor: backgroundColorTransform,
    backdropFilter: backdropFilterTransform,
             }}
  
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={false}
    >
      <div className={styles.logoContainer}>
        <img
          src={LogoFV}
          alt="Fernando Vega Logo"
          width={80}
          height={80}
          className={styles.logoFV}
        />
        <div className={styles.logo}>Fernando Vega</div>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">About me</Link>
        <Link to="/">Contact</Link>
      </nav>

      <button className={styles.themeBtn} onClick={toggleTheme}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.span>
        </AnimatePresence>
      </button>
    </motion.header>

  );
};

export default Header;
