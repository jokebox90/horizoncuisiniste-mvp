// src/components/About/About.tsx

import styles from "@/components/About/About.module.css";
import designPNG from "@/static/img/design-1.png";
import parisJPG from "@/static/img/paris-bg.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { variants } from "@/components/Animate/Animate.variants";
import CallToAction from "@/components/Button/CallToAction";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <article id="about" ref={ref} className={styles.component}>
      <div className={styles.box}>
        <div className={styles.head}>
          <motion.div
            initial="revealInitial"
            animate={isInView ? "reveal" : "revealInitial"}
            variants={variants}
            className={styles.image}
          >
            <Image
              src={parisJPG}
              alt="Paris"
              width={1024}
              height={768}
              priority
            />
          </motion.div>
        </div>

        <div className={styles.body}>
          <motion.div
            initial="revealInitial"
            animate={isInView ? "reveal" : "revealInitial"}
            variants={variants}
            className={styles.image}
          >
            <Image
              src={designPNG}
              alt="Design 2"
              width={320}
              height={240}
              priority
            />
          </motion.div>

          <motion.div
            initial="slideInRightInitial"
            animate={isInView ? "slideInRight" : "slideInRightInitial"}
            variants={variants}
          >
            <h2 className={styles.title}>Qui sommes-nous ?</h2>
            <p className={styles.text}>
              Rencontrez l'équipe d'Horizon Cuisiniste, des artisans passionnés
              par la création de cuisines uniques. Basés au cœur du
              Val-de-Marne, nous apportons notre savoir-faire artisanal à chaque
              projet. Avec un œil attentif pour le détail et un engagement
              envers un service client exceptionnel, nous sommes prêts à faire
              de votre projet de cuisine une réalité pleine de caractère et de
              moments inoubliables.
            </p>
          </motion.div>

          <CallToAction />
        </div>
      </div>
    </article>
  );
}
