import styles from "./TimelineCard.module.css";
import {useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tag?: string;
}

interface TimelineCardProps {
  event: TimelineEvent;
  align: "left" | "right";
}

const tagClassMap: Record<string, string> = {
  Education: styles.tagMilestone,
  Career: styles.tagEngineering,
  Personal: styles.tagBusiness,
  Launch: styles.tagLaunch,
};


const TimelineCard: React.FC<TimelineCardProps> = ({
  event,
  align,
}) => {     
  const controls = useAnimation();

  const { inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className={styles.card}>
      <div
        className={`${styles.cardInner} ${align === "right" ? styles.cardInnerRight : styles.cardInnerLeft}`}
      >
        <span className={styles.date}>{event.date}</span>
        {event.tag && (
          <span className={`${styles.tag} ${tagClassMap[event.tag] ?? styles.tagDefault}`}>
            {event.tag}
          </span>
        )}
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.description}>{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;