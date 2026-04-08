import styles from "./Selected.module.css";
import { motion } from "framer-motion";
import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import ASLingoThumbnail from "@/assets/selectedWork/ProjectSelectedThumbnail.png";
import MySpaceThumbnail from "@/assets/MySpaceFP.png";
import EverestRedesignThumbnail from "@/assets/EverestRedesign.png";
import TruckBurgerThumbnail from "@/assets/TruckBurgerFP.png";
import arrow from "@/assets/selectedWork/arrowIcon.svg";
import arrowHover from "@/assets/selectedWork/arrowIcon_hover.svg";

interface Project {
  name: string;
  thumbnail: string;
  isHighlighted: boolean;
  linkTo: string;
}

const SelectedWorkSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        name: "Everest Redesign",
        thumbnail: EverestRedesignThumbnail,
        isHighlighted: false,
        linkTo: "/EverestRedesign",
      },
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
        name: "Truck Burger",
        thumbnail: TruckBurgerThumbnail,
        isHighlighted: false,
        linkTo: "/TruckBurger",
      },
    ],
    []
  );

  const activeProject = useMemo(
    () =>
      projects.find((p) => p.name === hoveredProject) ||
      projects.find((p) => p.isHighlighted),
    [hoveredProject, projects]
  );

  const handleMouseEnter = useCallback((projectName: string) => {
    setHoveredProject(projectName);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <section className={styles.selectedWorkSection} aria-labelledby="selected-works-title">
      <div className={styles.titleContainer}>
        <h2 id="selected-works-title" className={styles.title}>
          <span className={styles.titleBar} aria-hidden="true" />
          Selected Works
        </h2>
      </div>

      <div className={styles.grid} role="region" aria-label="Featured projects showcase">
        {/* Case Study Card - Project Thumbnail */}
        <div className={styles.caseStudyCard}>
          {activeProject && (
            <motion.img
              key={activeProject.name}
              src={activeProject.thumbnail}
              alt={`${activeProject.name} project showcase`}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.thumbnailImage}
            />
          )}
        </div>

        {/* Project List Wrapper - Interactive Cards */}
        <div className={styles.projectListWrapper}>
          <nav className={styles.projectList} aria-label="Project portfolio">
            {projects.map((project) => (
              <Link
                key={project.linkTo}
                to={project.linkTo}
                className={`${styles.projectCard} ${
                  project.name === activeProject?.name
                    ? styles.highlighted
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(project.name)}
                onMouseLeave={handleMouseLeave}
                aria-current={
                  project.name === activeProject?.name ? "page" : undefined
                }
              >
                <span className={styles.projectName}>{project.name}</span>
                <div className={styles.projectIcon} aria-hidden="true">
                  <img
                    src={
                      project.name === activeProject?.name
                        ? arrowHover
                        : arrow
                    }
                    alt=""
                    width={31}
                    height={29}
                  />
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
