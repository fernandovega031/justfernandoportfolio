import styles from "./wireframe.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react"

import wireframeTitle from "@/assets/ASLingo/wireframes/wireframes.png";
import screen1 from "@/assets/ASLingo/wireframes/screen1.png";
import screen2 from "@/assets/ASLingo/wireframes/screen2.png";
import screen3 from "@/assets/ASLingo/wireframes/screen3.png";
import screen4 from "@/assets/ASLingo/wireframes/screen4.png";
import screen5  from "@/assets/ASLingo/wireframes/screen5.png";
import screen6 from "@/assets/ASLingo/wireframes/screen6.png";
import screen7 from "@/assets/ASLingo/wireframes/screen7.png";
import screen8 from "@/assets/ASLingo/wireframes/screen8.png";
import screen9 from "@/assets/ASLingo/wireframes/screen9.png";
import screen10  from "@/assets/ASLingo/wireframes/screen10.png";
import screen11 from "@/assets/ASLingo/wireframes/screen11.png";
import screen12 from "@/assets/ASLingo/wireframes/screen12.png";
import screen13 from "@/assets/ASLingo/wireframes/screen13.png";
import screen14 from "@/assets/ASLingo/wireframes/screen14.png";
import screen15  from "@/assets/ASLingo/wireframes/screen15.png";
import screen16 from "@/assets/ASLingo/wireframes/screen16.png";
import screen17 from "@/assets/ASLingo/wireframes/screen17.png";
import screen18 from "@/assets/ASLingo/wireframes/screen18.png";
import screen19 from "@/assets/ASLingo/wireframes/screen19.png";

const WireframeSection: React.FC = () => { 
    
  const scrollContainer1Ref = useRef<HTMLDivElement>(null)
  const scrollContainer2Ref = useRef<HTMLDivElement>(null)
  const scrollContainer3Ref = useRef<HTMLDivElement>(null)
  const scrollContainer4Ref = useRef<HTMLDivElement>(null)
  const scrollContainer5Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containers = [
      { ref: scrollContainer1Ref, speed: 0.5 },
      { ref: scrollContainer2Ref, speed: 0.7 },
      { ref: scrollContainer3Ref, speed: 0.4 },
      { ref: scrollContainer4Ref, speed: 0.8 },
      { ref: scrollContainer5Ref, speed: 0.3 },
    ]

    const animationIds: number[] = []
    const scrollPositions = [0, 0, 0, 0, 0]

    containers.forEach((containerConfig, index) => {
      const container = containerConfig.ref.current
      if (!container) return

      const animate = () => {
        scrollPositions[index] += containerConfig.speed
        const contentHeight = container.scrollHeight / 2

        if (scrollPositions[index] >= contentHeight) {
          scrollPositions[index] = 0
        }

        container.scrollTop = scrollPositions[index]
        animationIds[index] = requestAnimationFrame(animate)
      }

      animationIds[index] = requestAnimationFrame(animate)
    })

    return () => {
      animationIds.forEach((id) => cancelAnimationFrame(id))
    }
  }, [])


    const wireframesGroup1 = [
    {
      src: screen1,
      alt: "Lesson List View",
    },
    {
      src: screen2,
      alt: "Success Screen",
    },
    {
      src: screen3,
      alt: "Calendar View",
    },
    {
      src: screen4,
      alt: "Quiz Cards",
    },
    {
      src: screen5,
      alt: "Multiple Choice",
    },
    {
      src: screen6,
      alt: "Login Screen",
    },
  ]

  const wireframesGroup2 = [
 {
      src: screen7,
      alt: "Edit Profile",
    },
    {
      src: screen8,
      alt: "Dictionary View",
    },
    {
      src: screen9,
      alt: "Dictionary View",
    },
    {
      src: screen10,
      alt: "Dictionary View",
    },
        {
      src: screen11,
      alt: "Lesson List View",
    },
    {
      src: screen12,
      alt: "Success Screen",
    },
  ]

  const wireframesGroup3 = [
    
    {
      src: screen13,
      alt: "Calendar View",
    },
    {
      src: screen14,
      alt: "Quiz Cards",
    },
    {
      src: screen15,
      alt: "Multiple Choice",
    },
    {
      src: screen16,
      alt: "Login Screen",
    },
    {
      src: screen17,
      alt: "Edit Profile",
    },
    {
      src: screen18,
      alt: "Dictionary View",
    },
    {
      src: screen19,
      alt: "Dictionary View",
    },
  ]

    const wireframesGroup4 = [
 {
      src: screen7,
      alt: "Edit Profile",
    },
    {
      src: screen8,
      alt: "Dictionary View",
    },
    {
      src: screen9,
      alt: "Dictionary View",
    },
    {
      src: screen10,
      alt: "Dictionary View",
    },
        {
      src: screen11,
      alt: "Lesson List View",
    },
    {
      src: screen12,
      alt: "Success Screen",
    },
  ]

  const wireframesGroup5 = [
    
    {
      src: screen13,
      alt: "Calendar View",
    },
    {
      src: screen14,
      alt: "Quiz Cards",
    },
    {
      src: screen15,
      alt: "Multiple Choice",
    },
    {
      src: screen16,
      alt: "Login Screen",
    },
    {
      src: screen17,
      alt: "Edit Profile",
    },
    {
      src: screen18,
      alt: "Dictionary View",
    },
    {
      src: screen19,
      alt: "Dictionary View",
    },
  ]


const ScrollColumn = ({
    containerRef,
    wireframes,
  }: {
    containerRef: React.RefObject<HTMLDivElement | null>
    wireframes: Array<{ src: string; alt: string }>
  }) => (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.wireframeGrid}>
        {wireframes.map((wireframe, index) => (
          <div key={`first-${index}`} className={styles.wireframeCard}>
            <div className={styles.cardInner}>
              <img src={wireframe.src || "/placeholder.svg"} alt={wireframe.alt} className={styles.wireframeImage} />
            </div>
          </div>
        ))}
        {wireframes.map((wireframe, index) => (
          <div key={`second-${index}`} className={styles.wireframeCard}>
            <div className={styles.cardInner}>
              <img src={wireframe.src || "/placeholder.svg"} alt={wireframe.alt} className={styles.wireframeImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (

        <section className={styles.wireframeSection}>



     <div className={styles.container}>

                    <div className={styles.topGradient} />

      <div className={styles.columnsWrapper}>

          <ScrollColumn containerRef={scrollContainer1Ref} wireframes={wireframesGroup1} />
          <ScrollColumn containerRef={scrollContainer2Ref} wireframes={wireframesGroup2} />
          <ScrollColumn containerRef={scrollContainer3Ref} wireframes={wireframesGroup3} />
          <ScrollColumn containerRef={scrollContainer4Ref} wireframes={wireframesGroup4} />
          <ScrollColumn containerRef={scrollContainer5Ref} wireframes={wireframesGroup5} />
      </div>

      <div className={styles.bottomGradient} />
      
    </div>

        <motion.img
        src={wireframeTitle}
        className={styles.wireframeTitle}
        initial={{ opacity: 0, y: 40, rotate: 0 }}    
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          />


    </section>

  );
};

export default WireframeSection;