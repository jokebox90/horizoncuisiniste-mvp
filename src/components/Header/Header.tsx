// src/components/Header/Header.tsx

import styles from "@/components/Header/Header.module.css";
import logoPNG from "@/static/img/logo.png";
import salonJPG from "@/static/img/salon.jpg";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { variants } from "@/components/Animate/Animate.variants";
import { CalendlyPopUpToggleButton } from "@/components/Calendly/Calendly";

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
    <header className={styles.component}>
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
        <motion.div
          initial="revealInitial"
          animate={animate ? "reveal" : "revealInitial"}
          variants={variants}
          className={styles.image}
        >
          <Image src={salonJPG} alt="Salon" width={1280} height={960} />
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial="slideInRightInitial"
            animate={animate ? "slideInRight" : "slideInRightInitial"}
            variants={variants}
          >
            <h1 className={styles.company}>Bondy builder</h1>

            <div className={styles.divider}></div>

            <h2 className={styles.title}>
              Une idée d&apos;aménagement à concrétiser ?
            </h2>

            <p className={styles.text}>
              Ensemble, matérialisons votre vision de la décoration et des
              travaux d&apos;intérieur.
            </p>
          </motion.div>

          <motion.div
            initial="slideInDownInitial"
            animate={animate ? "slideInDownEarly" : "slideInDownInitial"}
            variants={variants}
          >
            <CalendlyPopUpToggleButton>
                Obtenir un devis dès
                <br />
                maintenant !
            </CalendlyPopUpToggleButton>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
