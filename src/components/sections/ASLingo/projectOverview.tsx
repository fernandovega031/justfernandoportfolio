import styles from "./projectOverview.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import projectoverview from "@/assets/ASLingo/TitleOverview.png";
import pointer from "@/assets/ASLingo/Pointer.png";
import character from "@/assets/ASLingo/character.png";
import message from "@/assets/ASLingo/Message.png";
import star from "@/assets/ASLingo/Star.png";

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



interface ProjectCardProps {
  content: string
  highlights?: string[]
  className?: string
}


const ProjectCard: React.FC<ProjectCardProps> = ({ content, highlights = [], className = "" }) => {
  
  const renderText = () => {
    if (highlights.length === 0) return content

    let result = content
    highlights.forEach((highlight) => {
      const regex = new RegExp(`(${highlight})`, "gi")
      result = result.replace(regex, "<strong>$1</strong>")
    })

    return <span dangerouslySetInnerHTML={{ __html: result }} />
  }

  return (
<div className={`${styles.projectCard} ${className}`}>
      <div className={styles.projectCardContent}>{renderText()}</div>
    </div>
  )
}

const projectOverviewSection: React.FC = () => {
const cards: { content: string; highlights: string[]; className: string }[] = [
    {
      content:
        "ASLingo is an innovative app that lets you learn ASL in an intuitive and dynamic way. Our goal is to teach this language on a large scale and for free.",
      highlights: ["ASLingo"],
      className: styles.cardLeft,
    },
    {
      content:
        "We aim to promote sign language so that this minority group can connect with the outside world through education and digital tools.",
      highlights: ["promote sign language"],
      className: styles.cardCenter,
    },
    {
      content:
        "With ASLingo, learning a new language has never been easier. We will be with you every step of this new adventure.",
      highlights: ["has never been easier"],
      className: styles.cardRight,
    },
  ];

     const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section className={styles.projectOverview} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

        <motion.img
        src={projectoverview}
        className={styles.overviewTitle}
          variants={itemVariants}
          />

                  {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <ProjectCard key={index} content={card.content} highlights={card.highlights} className={card.className} />
          ))}
        </div>

        
        {/* Decorative Elements */}
        <motion.img src={pointer} alt="" className={`${styles.decoration} ${styles.decorationPointer}`} variants={itemVariants} aria-hidden="true" />
        <motion.img src={message} alt="" className={`${styles.decoration} ${styles.decorationMessage}`} variants={itemVariants} aria-hidden="true" />
        <motion.img src={character} alt="" className={`${styles.decoration} ${styles.decorationCharacter}`} variants={itemVariants} aria-hidden="true" />
        <motion.img
          src={star}
          alt=""
            className={`${styles.decoration} ${styles.decorationStar} ${styles.decorationStar1}`}
          aria-hidden="true"
          variants={itemVariants}
        />
        <motion.img
          src={star}
          alt=""
            className={`${styles.decoration} ${styles.decorationStar} ${styles.decorationStar2}`}
          aria-hidden="true"
          variants={itemVariants}
        />
        <motion.img
          src={star}
          alt=""
           className={`${styles.decoration} ${styles.decorationStar} ${styles.decorationStar3}`}
          aria-hidden="true"
          variants={itemVariants}
        />

        </motion.section>
  );
};

export default projectOverviewSection;