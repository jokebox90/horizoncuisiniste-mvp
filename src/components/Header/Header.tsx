// src/components/Header/Header.tsx

import styles from "@/components/Header/Header.module.css";
import logoPNG from "@/static/img/logo.png";
import bgPNG from "@/static/img/bg.png";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { variants } from "@/components/Animate/Animate.variants";
import CallToAction from "@/components/Button/CallToAction";

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isInView]);

  return (
    <header id="header" className={styles.component}>
      <div className={styles.head}>
        <motion.div
          initial="slideInDownInitial"
          animate={animate ? "slideInDownEarly" : "slideInDownInitial"}
          variants={variants}
          className={styles.image}
        >
          <Image src={logoPNG} alt="Logo" width={640} height={480} priority />
        </motion.div>
      </div>

      <div ref={ref} className={styles.body}>
        <div className={styles.content}>
          <div className={styles.first}>
            <motion.div
              initial="slideInRightInitial"
              animate={animate ? "slideInRight" : "slideInRightInitial"}
              variants={variants}
            >
              <h1 className={styles.company}>{process.env.NEXT_PUBLIC_PROJECT_NAME}</h1>

              <div className={styles.divider}></div>

              <h2 className={styles.title}>
                Quelle est la recette d&apos;une rénovation de cuisine réussie&nbsp;?
              </h2>
            </motion.div>
          </div>

          <div ref={ref} className={styles.last}>
            <p className={styles.text}>
              Vous en avez assez de votre ancienne cuisine qui a perdu de son
              éclat ? Préparer un repas devient plus une corvée qu&apos;un plaisir ?
              Chez Horizon Cuisiniste à Chennevières, on transforme ce rêve en
              réalité. Laissez-nous réinventer votre espace avec une cuisine
              moderne et fonctionnelle, où cuisiner redevient un véritable plaisir.
            </p>

            <CallToAction />
          </div>
        </div>
      </div>
    </header>
  );
}
