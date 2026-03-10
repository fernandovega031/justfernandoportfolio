import styles from "./userFlow.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import chat from "@/assets/ASLingo/userFlow/chat16.png";
import community from "@/assets/ASLingo/userFlow/community14.png";
import diccionary from "@/assets/ASLingo/userFlow/diccionary6.png";
import edit from "@/assets/ASLingo/userFlow/edit11.png";
import forget from "@/assets/ASLingo/userFlow/forget4.png";
import sign from "@/assets/ASLingo/userFlow/signIn3.png";
import home from "@/assets/ASLingo/userFlow/home5.png";
import lesson from "@/assets/ASLingo/userFlow/lesson12.png";
import login from "@/assets/ASLingo/userFlow/login2.png";
import messageUserFlow from "@/assets/ASLingo/userFlow/message15.png";
import onbording from "@/assets/ASLingo/userFlow/Onboarding.png";
import progress from "@/assets/ASLingo/userFlow/progress8.png";
import result from "@/assets/ASLingo/userFlow/result13.png";
import review from "@/assets/ASLingo/userFlow/review9.png";
import setings from "@/assets/ASLingo/userFlow/settings10.png";
import word from "@/assets/ASLingo/userFlow/word7.png";
import arrow from "@/assets/ASLingo/userFlow/arrow.png";
import flag from "@/assets/ASLingo/userFlow/flag.png";
import stairs from "@/assets/ASLingo/userFlow/stairs1.png";
import vector1 from "@/assets/ASLingo/userFlow/Vector.png";
import vector2 from "@/assets/ASLingo/userFlow/Vector2.png";
import vector3 from "@/assets/ASLingo/userFlow/Vector3.png";
import vector4 from "@/assets/ASLingo/userFlow/Vector4.png";
import vector5 from "@/assets/ASLingo/userFlow/Vector5.png";
import vector6  from "@/assets/ASLingo/userFlow/Vector6.png";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const UserFlowSection: React.FC = () => {   
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
    <motion.section className={styles.userFlowSection} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>

        <motion.img
        src={flag}
        className={styles.flag}
        variants={itemVariants}
          />

        <motion.img
        src={onbording}
        className={styles.onbording}
        variants={itemVariants}
          />

        <motion.img
        src={stairs}
        className={styles.stairs}
        variants={itemVariants}
          />

        <motion.img
        src={login}
        className={styles.login}
        variants={itemVariants}
          />

                  <motion.img
        src={sign}
        className={styles.sign}
        variants={itemVariants}
          />

                  <motion.img
        src={forget}
        className={styles.forget}
        variants={itemVariants}
          />

                  <motion.img
        src={home}
        className={styles.home}
        variants={itemVariants}
          />

          
                  <motion.img
        src={vector1}
        className={styles.vector1}
        variants={itemVariants}
          />

          
                  <motion.img
        src={vector2}
        className={styles.vector2}
        variants={itemVariants}
          />

          
                  <motion.img
        src={vector3}
        className={styles.vector3}
        variants={itemVariants}
          />

          
                  <motion.img
        src={vector4}
        className={styles.vector4}
        variants={itemVariants}
          />

          
                  <motion.img
        src={vector5}
        className={styles.vector5}
        variants={itemVariants}
          />

          
                  <motion.img
        src={vector6}
        className={styles.vector6}
        variants={itemVariants}
          />

                            <motion.img
        src={diccionary}
        className={styles.diccionary}
        variants={itemVariants}
          />
          
                            <motion.img
        src={word}
        className={styles.word}
        variants={itemVariants}
          />

                            <motion.img
        src={progress}
        className={styles.progress}
        variants={itemVariants}
          />

                                      <motion.img
        src={review}
        className={styles.review}
        variants={itemVariants}
          />

                        <motion.img
        src={setings}
        className={styles.settings}
        variants={itemVariants}
          />

                         <motion.img
        src={edit}
        className={styles.edit}
        variants={itemVariants}
          />

                          <motion.img
        src={lesson}
        className={styles.lesson}
        variants={itemVariants}
          />

                          <motion.img
        src={result}
        className={styles.result}
        variants={itemVariants}
          />

                                   <motion.img
        src={community}
        className={styles.community}
        variants={itemVariants}
          />

                                   <motion.img
        src={messageUserFlow}
        className={styles.messageUserFlow}
        variants={itemVariants}
          />

                                   <motion.img
        src={chat}
        className={styles.chat}
        variants={itemVariants}
          />

                <motion.img
        src={arrow}
        className={styles.arrow}
        variants={itemVariants}
          />

                          <motion.img
        src={arrow}
        className={styles.arrow2}
        variants={itemVariants}
          />

                                    <motion.img
        src={arrow}
        className={styles.arrow3}
        variants={itemVariants}
          />

                                              <motion.img
        src={arrow}
        className={styles.arrow4}
        variants={itemVariants}
          />

                                              <motion.img
        src={arrow}
        className={styles.arrow5}
        variants={itemVariants}
          />
    </motion.section>
  );
};

export default UserFlowSection;