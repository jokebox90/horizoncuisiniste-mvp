// src/components/About/About.tsx

import styles from "@/components/About/About.module.css";
import designPNG from "@/static/img/logo-2.png";
import parisJPG from "@/static/img/paris.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { variants } from "@/components/Animate/Animate.variants";
import CallToAction from "@/components/Button/CallToAction";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

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
              Situés au cœur de la dynamique de la ville, nous sommes fiers de
              porter le nom de &apos;BONDY&apos; comme une marque. Bondy est une
              collectivité engagée avec vitalité et énergie dans un mode de vie
              basé sur le bien-être et le progrès. Notre philosophie
              s&apos;inspire de sa solidité, de sa persévérance et de son
              dévouement, Nous portons toutes ces valeurs dans chacun des
              projets pour créer des espaces equilibrés entre élégance et
              prospérité.
            </p>
            <p className={styles.text}>
              Le terme &apos;BUILDER&apos;, associé à notre nom, représente
              notre conscience des détails et notre passion pour des
              architectures raffinées. Chaque espace que nous concevons est le
              fruit d&apos;une quête harmonieuse d&apos;excellence. Ils
              reflétant notre promesse de créer des intérieurs où chaque élément
              est en parfaite symbiose avec le confort qui fait votre fierté.
            </p>
          </motion.div>

          <CallToAction />
        </div>
      </div>
    </article>
  );
}
