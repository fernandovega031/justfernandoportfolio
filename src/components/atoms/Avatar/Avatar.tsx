import styles from "./Avatar.module.css";
import { motion } from "framer-motion";

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <motion.img
      variants={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.9 }}
      className={styles.Avatar}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;