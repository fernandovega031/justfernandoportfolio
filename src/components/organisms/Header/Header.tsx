import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import LogoFV from "@/assets/LogoFV.png";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const backgroundColorTransform = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"]
  );
  const backdropFilterTransform = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  const { theme, toggleTheme } = useTheme();

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <motion.header
      style={{
        backgroundColor: backgroundColorTransform,
        backdropFilter: backdropFilterTransform,
      }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={false}
    >
      {/* Logo Container */}
      <div className={styles.logoContainer}>
        <img
          src={LogoFV}
          alt="Fernando Vega - Portfolio Logo"
          className={styles.logoFV}
          loading="lazy"
        />
        <div className={styles.logo}>Fernando Vega</div>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/projects" className={styles.navLink}>
          Projects
        </Link>
        <Link to="/about" className={styles.navLink}>
          About me
        </Link>
        <Link to="/" className={styles.navLink}>
          Contact
        </Link>
      </nav>

      {/* Theme Toggle Button */}
      <button
        className={styles.themeBtn}
        onClick={handleThemeToggle}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className={styles.menuToggle}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className={styles.hamburger}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            aria-label="Mobile navigation"
          >
            <Link to="/" className={styles.mobileNavLink} onClick={handleMenuClose}>
              Home
            </Link>
            <Link  to="/projects" className={styles.mobileNavLink} onClick={handleMenuClose}>
              Projects
            </Link>
            <Link to="/" className={styles.mobileNavLink} onClick={handleMenuClose}>
              About me
            </Link>
            <Link to="/" className={styles.mobileNavLink} onClick={handleMenuClose}>
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
