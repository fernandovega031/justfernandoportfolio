import styles from "./Timeline.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import TimelineCard from "@/components/atoms/TimelineCard/TimelineCard";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tag?: string;
}

const events: TimelineEvent[] = [
  {
    date: "November 2019",
    title: "Bachelor's in Multimedia & Digital Animation @ UANL",
    description:
      "My professional path started here, diving into different challenges.",
    tag: "Education",
  },
  {
    date: "December 2019",
    title: "Front-End Developer @ Finden Labs",
    description:
      "I built up my skills and took a liking to Front-End programming.",
    tag: "Career",
  },
  {
    date: "June 2020",
    title: "Sr. Engineer @ IZZI Telecom",
    description:
      "This position helped me learn how to work in bigger teams and pick up different technologies.",
    tag: "Career",
  },
  {
    date: "July 2022",
    title: "Ireland's Journey Kickoff",
    description:
      "I chose to make a big change in my life to live new experiences.",
    tag: "Personal",
  },
  {
    date: "August 2022",
    title: "English Course @ Academic Bridge",
    description:
      "I worked on my English speaking skills to connect more with the world.",
    tag: "Education",
  },  {
    date: "October 2022",
    title: "Bartender @ The Old StoreHouse",
    description:
      "Applying both life lessons and English skills to interact with clients effectively.",
    tag: "Career",
  },    {
    date: "April 2023",
    title: "Product Designer (Freelance)",
    description:
      "Role change, meaning new challenges to face and more experiences.",
    tag: "Career",
  },
      {
    date: "May 2025",
    title: "Visual Designer @ LeadVenture",
    description:
      "Here I am today, growing my UX/UI Design skills even more.",
    tag: "Career",
  },
];




  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const TimelineSection: React.FC = () => {     
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
    <motion.section className={styles.Timeline} variants={containerVariants} initial="hidden" animate={controls} ref={ref}>



      <div className={styles.lineDesktop} />
      <div className={styles.lineMobile} />

    <div className={styles.eventsContainer}>
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.eventRow}
            >
              <div className={styles.dotDesktop} />
              <div className={styles.dotMobile} />

              <div
                className={`${styles.cardDesktop} ${isLeft ? styles.cardDesktopLeft : styles.cardDesktopRight}`}
              >
                <TimelineCard event={event} align={isLeft ? "right" : "left"} />
              </div>

              <div className={styles.cardMobile}>
                <TimelineCard event={event} align="left" />
              </div>
            </motion.div>
          );
        })}
    </div>


    </motion.section>
  );
};



export default TimelineSection;