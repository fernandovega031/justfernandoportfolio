import styles from "./Selected.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import ASLingoThumbnail from "@/assets/selectedWork/ProjectSelectedThumbnail.png";
import MySpaceThumbnail from "@/assets/MySpaceFP.png";
import EverestRedesignThumbnail from "@/assets/EverestRedesign.png";
import TruckBurgerThumbnail from "@/assets/TruckBurgerFP.png";
import arrow from "@/assets/selectedWork/arrowIcon.svg";
import arrowHover from "@/assets/selectedWork/arrowIcon_hover.svg";

const SelectedWorkSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      name: "ASLingo",
      thumbnail: ASLingoThumbnail,
      isHighlighted: true,
      linkTo: "/ASLingo",
    },
    {
      name: "My Space",
      thumbnail: MySpaceThumbnail,
      isHighlighted: false,
      linkTo: "/MySpace",
    },
    {
      name: "Everest Redesign",
      thumbnail: EverestRedesignThumbnail,
      isHighlighted: false,
      linkTo: "/EverestRedesign",
    },
    {
      name: "Truck Burger",
      thumbnail: TruckBurgerThumbnail,
      isHighlighted: false,
      linkTo: "/TruckBurger",
    },
  ];

  const activeProject =
    projects.find((p) => p.name === hoveredProject) ||
    projects.find((p) => p.isHighlighted);

  return (
    <section className={styles.selectedWorkSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleBar} />
          Selected Works
        </h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.caseStudyCard}>
          <motion.img
            key={activeProject?.name}
            src={activeProject?.thumbnail}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.thumbnailImage}
          />
        </div>

        <div className={styles.projectListWrapper}>
          <div className={styles.projectList}>
            {projects.map((project) => (

                <Link 
                to={project.linkTo}
                  className={`${styles.projectCard} ${
                    project.name === activeProject?.name ? styles.highlighted : ""
                  }`}
                  onMouseEnter={() => setHoveredProject(project.name)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <span className={styles.projectName}>{project.name}</span>
                  <div className={styles.projectIcon}>
                    <img
                      src={
                        project.name === activeProject?.name ? arrowHover : arrow
                      }
                      alt="Arrow"
                      width={31}
                      height={29}
                    />
                  </div>
                </Link>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
