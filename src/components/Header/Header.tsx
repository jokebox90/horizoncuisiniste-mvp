// src/components/Header/Header.tsx

import Button from "@/components/Button/Button";
import styles from "@/components/Header/Header.module.css";
import logoPNG from "@/static/img/logo.png";
import salonJPG from "@/static/img/salon.jpg";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { variants } from "../Animate/Animate.variants";

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
          <Image src={logoPNG} alt="Logo" width={640} height={480} />
        </motion.div>
      </div>

      <div className={styles.body}>
        <div
          ref={ref}
          className="absolute bottom-16 left-0 w-full h-0 max-h-0"
        ></div>

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
            <Button>
              <motion.span
                initial="slideInRightInitial"
                animate={animate ? "slideInRight" : "slideInRightInitial"}
                variants={variants}
              >
                Obtenir un devis dès
                <br />
                maintenant !
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
