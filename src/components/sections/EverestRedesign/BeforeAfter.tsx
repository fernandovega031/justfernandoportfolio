import styles from "./BeforeAfter.module.css";
import { motion } from "framer-motion";

import after1 from '@/assets/EverestRedesign/After/Slide1.png';
import after2 from '@/assets/EverestRedesign/After/Slide2.png';
import after3 from '@/assets/EverestRedesign/After/Slide3.png';
import after4 from '@/assets/EverestRedesign/After/Slide4.png';
import after5 from '@/assets/EverestRedesign/After/Slide5.png';

import Before1 from '@/assets/EverestRedesign/Before/Slide1.png';
import Before2 from '@/assets/EverestRedesign/Before/Slide2.png';
import Before3 from '@/assets/EverestRedesign/Before/Slide3.png';
import Before4 from '@/assets/EverestRedesign/Before/Slide4.png';
import Before5 from '@/assets/EverestRedesign/Before/Slide5.png';

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

const BeforeAfterSection: React.FC = () => {     
  return (
    <motion.section className={styles.beforeAfterSection}>
    
    <div className={styles.slide1}>

      <div className={styles.header}>
        <div className={styles.beforeSection}>
          <span className={styles.beforeText}>Before</span>

        </div>

        <div className={styles.ampersandSection}>

          <span className={styles.ampersand}>&</span>
        </div>

        <div className={styles.afterSection}>
          <span className={styles.afterText}>After</span>

        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.glowEffect}></div>
        <h2 className={styles.title}>Cleaner header</h2>
            <br />
        <p className={styles.description}>
          <strong>Simplification</strong> of the header through a limited

          <br />
          and strategically defined set of options, reducing
          <br />
          cognitive load and facilitating initial navigation.
        </p>


                <motion.img
        src={Before1}
        className={styles.before1Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

        <motion.img
        src={after1}
        className={styles.after1Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

      </div>

      </div>

    <div className={styles.slide2}>
      {/* Title with glow */}
      <div className={styles.titleSection2}>
        <div className={styles.glow} />
        <h1 className={styles.title}>Straight to the point</h1>
      </div>

                      <motion.img
        src={Before2}
        className={styles.before2Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

        <motion.img
        src={after2}
        className={styles.after2Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />


      {/* Content section */}
      <div className={styles.contentSection2}>
        <p className={styles.description}>
          <strong>Reduction</strong> of options and visual
          <br />
          elements per section to optimise
          <br />
          space usage and improve
          <br />
          readability through more
          <br />
          intentional spacing.
        </p>

      </div>




    </div>


    <div className={styles.slide3}>
      {/* Title with glow */}
      <div className={styles.titleSection3}>
        <div className={styles.glow} />
        <h1 className={styles.title}>Imagery as a complement</h1>
      </div>

                      <motion.img
        src={Before3}
        className={styles.before3Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

        <motion.img
        src={after3}
        className={styles.after3Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

      {/* Content section */}
      <div className={styles.contentSection3}>
        <p className={styles.description}>
            Use of imagery aligned with the
            <br/>
             <strong>brand identity</strong> to reinforce the
               <br/>
             visual message and support the
               <br/>
            promotion of the establishment’s
              <br/>
             products and services.
        </p>

      </div>

    </div>
      
    <div className={styles.slide4}>
      {/* Title with glow */}
      <div className={styles.titleSection4}>
        <div className={styles.glow} />
        <h1 className={styles.title}>Less is more</h1>
      </div>


        <motion.img
        src={Before4}
        className={styles.before4Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

        <motion.img
        src={after4}
        className={styles.after4Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />


      {/* Content section */}
      <div className={styles.contentSection4}>
        <p className={styles.description}>
        Removal of unnecessary 
        <br/>information to avoid <strong> visual  </strong>
        <br/> <strong> overload </strong> and improve focus within
        <br/> the “About” section.
        </p>

      </div>

    </div>

        <div className={styles.slide5}>
      {/* Title with glow */}
      <div className={styles.titleSection5}>
        <div className={styles.glow} />
        <h1 className={styles.title}>Simple components</h1>
      </div>

              <motion.img
        src={Before5}
        className={styles.before5Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

        <motion.img
        src={after5}
        className={styles.after5Img}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
          />

      {/* Content section */}
      <div className={styles.contentSection5}>
        <p className={styles.description}>
        Use of visually <strong> simple components </strong>
        <br/> to maintain clarity, reduce
        <br/>distractions, and prevent visual
        <br/>saturation.
        </p>

      </div>

    </div>


    </motion.section>
  );
};

export default BeforeAfterSection;