import styles from "./AboutMe.module.css";

import { Link } from "react-router-dom";
import guy from "@/assets/aboutMe/guy.png";
import redlines from "@/assets/aboutMe/lineasrojas.svg";
import bluelines from "@/assets/aboutMe/lineasazules.svg";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            <span className={styles.titleBar} />
            About Me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className={styles.grid}>
          {/* Text Content */}
          <article className={styles.textContent}>
            <h3 className={styles.subtitle}>
              A journey shaped by learning and progress
            </h3>

            <p className={styles.description}>
              My style is characterized by conveying simplicity, structure, and
              visual coherence, creating clean and engaging interfaces designed
              to make users feel comfortable, supported, and sometimes even
              entertained. I value feedback as a tool for continuous improvement
              and maintain an open mindset to refine my proposals based on
              testing, feedback, and analysis.
            </p>

            <Link to="/contact" className={styles.button}>
              Explore
            </Link>
          </article>

          {/* Photo Section */}
          <figure className={styles.photoWrapper}>
            <div className={styles.photoContainer}>
              {/* Profile Photo */}
              <img
                src={guy}
                alt="Fernando Vega - Full Stack Designer"
                className={styles.photoGuy}
                loading="lazy"
              />

              {/* Decorative Blue Lines */}
              <img
                src={bluelines}
                alt=""
                aria-hidden="true"
                className={styles.bluelines}
                loading="lazy"
              />

              {/* Decorative Red Lines */}
              <img
                src={redlines}
                alt=""
                aria-hidden="true"
                className={styles.redlines}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;