import styles from "./lesson.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import frame1  from "@/assets/ASLingo/lesson/frame1.png";
import frame2  from "@/assets/ASLingo/lesson/frame2.png";
import frame3  from "@/assets/ASLingo/lesson/frame3.png";
import frame4  from "@/assets/ASLingo/lesson/frame4.png";
import frame5  from "@/assets/ASLingo/lesson/frame5.png";
import frame6  from "@/assets/ASLingo/lesson/frame6.png";
import frame7  from "@/assets/ASLingo/lesson/frame7.png";
import frame8  from "@/assets/ASLingo/lesson/frame8.png";
import lessonSlide1  from "@/assets/ASLingo/lesson/slide1.png";
import lessonSlide2  from "@/assets/ASLingo/lesson/slide2.png";
import lessonSlide3  from "@/assets/ASLingo/lesson/slide3.png";
import lessonTitle  from "@/assets/ASLingo/lesson/title.png";

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

const LessonSection: React.FC = () => {
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
    <motion.section className={styles.lessonSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>


        <motion.img
        src={frame1}
        className={styles.frame1 }
        variants={itemVariants}
          />

        <motion.img
        src={frame2}
        className={styles.frame2}
        variants={itemVariants}
          />

                  <motion.img
        src={frame3}
        className={styles.frame3}
        variants={itemVariants}
          />

                  <motion.img
        src={frame4}
        className={styles.frame4}
        variants={itemVariants}
          />

                  <motion.img
        src={frame5}
        className={styles.frame5}
        variants={itemVariants}
          />

                  <motion.img
        src={frame6}
        className={styles.frame6}
        variants={itemVariants}
          />

                  <motion.img
        src={frame7}
        className={styles.frame7}
        variants={itemVariants}
          />

                  <motion.img
        src={frame8}
        className={styles.frame8}
        variants={itemVariants}
          />

                  <motion.img
        src={lessonSlide1}
        className={styles.lessonSlide1}
        variants={itemVariants}
          />

                  <motion.img
        src={lessonSlide2}
        className={styles.lessonSlide2}
        variants={itemVariants}
          />

                  <motion.img
        src={lessonSlide3}
        className={styles.lessonSlide3}
        variants={itemVariants}
          />

                  <motion.img
        src={lessonTitle}
        className={styles.lessonTitle}
        variants={itemVariants}
          />



    </motion.section>
  );
};

export default LessonSection;