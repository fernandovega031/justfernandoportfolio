import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  delay?: number;
};

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;