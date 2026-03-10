import React from 'react';
import { useEffect, useRef } from "react"

import { motion } from "framer-motion";
import styles from "./visualDesign.module.css";


import folder from "@/assets/ASLingo/visualDesign/folder.png";
import visual1 from "@/assets/ASLingo/visualDesign/visual1.png";
import visual2 from "@/assets/ASLingo/visualDesign/visual2.png";
import visual3 from "@/assets/ASLingo/visualDesign/visual3.png";
import visual4 from "@/assets/ASLingo/visualDesign/visual4.png";
import visual5 from "@/assets/ASLingo/visualDesign/visual5.png";
import visual6 from "@/assets/ASLingo/visualDesign/visual6.png";
import visual7 from "@/assets/ASLingo/visualDesign/visual7.png";
import visual8 from "@/assets/ASLingo/visualDesign/visual8.png";
import visual9 from "@/assets/ASLingo/visualDesign/visual9.png";
import visual10 from "@/assets/ASLingo/visualDesign/visual10.png";
import visual11 from "@/assets/ASLingo/visualDesign/visual11.png";
import visual12 from "@/assets/ASLingo/visualDesign/visual12.png";
import visual13 from "@/assets/ASLingo/visualDesign/visual13.png";
import visual14 from "@/assets/ASLingo/visualDesign/visual14.png";
import visual15 from "@/assets/ASLingo/visualDesign/visual15.png";
import visual16 from "@/assets/ASLingo/visualDesign/visual16.png";
import visual17 from "@/assets/ASLingo/visualDesign/visual17.png";
import visual18 from "@/assets/ASLingo/visualDesign/visual18.png";
import visual19 from "@/assets/ASLingo/visualDesign/visual19.png";
import visual20 from "@/assets/ASLingo/visualDesign/visual20.png";
import visual21 from "@/assets/ASLingo/visualDesign/visual21.png";
import visual22 from "@/assets/ASLingo/visualDesign/visual22.png";
import visual23 from "@/assets/ASLingo/visualDesign/visual23.png";
import visual24 from "@/assets/ASLingo/visualDesign/visual24.png";
import visual25 from "@/assets/ASLingo/visualDesign/visual25.png";
import visual26 from "@/assets/ASLingo/visualDesign/visual26.png";
import visual27 from "@/assets/ASLingo/visualDesign/visual27.png";



const VisualDesignSection: React.FC = () => {     
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
        const contentWidth = container.scrollWidth / 2

        if (scrollPositions[index] >= contentWidth) {
          scrollPositions[index] = 0
        }

        container.scrollLeft = scrollPositions[index]
        animationIds[index] = requestAnimationFrame(animate)
      }

      animationIds[index] = requestAnimationFrame(animate)
    })

    return () => {
      animationIds.forEach((id) => cancelAnimationFrame(id))
    }
  }, [])

const visualDesignsGroup1 = [
    {
      src: visual1,
      alt: "Lesson List View",
    },
    {
      src: visual2,
      alt: "Success visual",
    },
    {
      src: visual3,
      alt: "Calendar View",
    },
    {
      src: visual4,
      alt: "Quiz Cards",
    },
    {
      src: visual5,
      alt: "Multiple Choice",
    },
    {
      src: visual6,
      alt: "Login visual",
    },
  ]

  const visualDesignsGroup2 = [
 {
      src: visual7,
      alt: "Edit Profile",
    },
    {
      src: visual8,
      alt: "Dictionary View",
    },
    {
      src: visual9,
      alt: "Dictionary View",
    },
    {
      src: visual10,
      alt: "Dictionary View",
    },
        {
      src: visual11,
      alt: "Lesson List View",
    },
    {
      src: visual12,
      alt: "Success visual",
    },
  ]

  const visualDesignsGroup3 = [
    
    {
      src: visual13,
      alt: "Calendar View",
    },
    {
      src: visual14,
      alt: "Quiz Cards",
    },
    {
      src: visual15,
      alt: "Multiple Choice",
    },
    {
      src: visual16,
      alt: "Login visual",
    },
    {
      src: visual17,
      alt: "Edit Profile",
    },
    {
      src: visual18,
      alt: "Dictionary View",
    },
    {
      src: visual19,
      alt: "Dictionary View",
    },
  ]

    const visualDesignsGroup4 = [
 {
      src: visual20,
      alt: "Edit Profile",
    },
    {
      src: visual21,
      alt: "Dictionary View",
    },
    {
      src: visual22,
      alt: "Dictionary View",
    },
    {
      src: visual23,
      alt: "Dictionary View",
    },
        {
      src: visual24,
      alt: "Lesson List View",
    },
    {
      src: visual25,
      alt: "Success visual",
    },
  ]

  const visualDesignsGroup5 = [
    
    {
      src: visual13,
      alt: "Calendar View",
    },
    {
      src: visual14,
      alt: "Quiz Cards",
    },
    {
      src: visual15,
      alt: "Multiple Choice",
    },
    {
      src: visual16,
      alt: "Login visual",
    },
    {
      src: visual17,
      alt: "Edit Profile",
    },
    {
      src: visual26,
      alt: "Dictionary View",
    },
    {
      src: visual27,
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
    <section className={styles.visualDesignSection}>
        <ScrollColumn containerRef={scrollContainer1Ref} wireframes={visualDesignsGroup1} />
        <ScrollColumn containerRef={scrollContainer2Ref} wireframes={visualDesignsGroup2} />
        <ScrollColumn containerRef={scrollContainer3Ref} wireframes={visualDesignsGroup3} />
        <ScrollColumn containerRef={scrollContainer4Ref} wireframes={visualDesignsGroup4} />
        <ScrollColumn containerRef={scrollContainer5Ref} wireframes={visualDesignsGroup5} />

        <motion.img
        src={folder}
        className={styles.folder}
        initial={{ opacity: 0, y: 40, rotate: 0 }}    
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          />
    </section>
  );
};

export default VisualDesignSection;