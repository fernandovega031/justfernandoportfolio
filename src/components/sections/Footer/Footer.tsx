import styles from "./Footer.module.css";

import { Link } from 'react-router-dom';

import circularLight from "@/assets/circularLight.png";
import LogoFV from "@/assets/LogoFV.png";
import LinkedIn from "@/assets/square-linkedin.svg";
import Instagram from "@/assets/instagram-brands.svg";
import Behance from "@/assets/square-behance.svg";

const FooterSection: React.FC = () => {

  return (
    <footer className={styles.footerSection}>
<div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and location */}
          <div>
            <div className={styles.logoWrapper}>
              <img
                src={circularLight}
                alt="Fernando Vega Logo"
                width={80}
                height={80}
                className={styles.logo}
              />
            </div>
            <p className={styles.location}>
              <span>📍</span> Monterrey, MX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className={styles.link}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.link}>
                  About me
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  Contact me
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className={styles.columnTitle}>Explore</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/ASLingo" className={styles.link}>
                  ASLingo
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.link}>
                  Everest Migration
                </Link>
              </li>
              <li>
                <Link to="/EverestRedesign" className={styles.link}>
                  Everest Redesign
                </Link>
              </li>
              <li>
                <Link to="/MySpace" className={styles.link}>
                  My Space
                </Link>
              </li>
              <li>
                <Link to="/TruckBurger" className={styles.link}>
                  Truck Burger
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className={styles.columnTitle}>Connect</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="https://www.linkedin.com/in/fernandovega031" target="_blank" className={`${styles.Iconhover} ${styles.link} ${styles.linkIcon}`}>
                  <img src={LinkedIn} alt="" className={`${styles.Iconhover} ${styles.Ico}`} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fernandovega031" target="_blank" className={`${styles.Iconhover} ${styles.link} ${styles.linkIcon}`}>
                 <img src={Instagram} alt="" className={`${styles.Iconhover} ${styles.Ico}`} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/josfevegagu/projects" target="_blank" className={`${styles.Iconhover} ${styles.link} ${styles.linkIcon}`}>
                 <img src={Behance} alt="" className={`${styles.Iconhover} ${styles.Ico}`} /> Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <img src={LogoFV} alt="FV" width={32} height={32} className={styles.bottomLogo} />
            <span className={styles.copyrightText}>Fernando Vega Portfolio - All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;