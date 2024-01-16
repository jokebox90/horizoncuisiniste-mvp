// src/components/Projects/Projects.tsx

import { variants } from "@/components/Animate/Animate.variants";
import Button from "@/components/Button/Button";
import styles from "@/components/Projects/Projects.module.css";
import chambreJPG from "@/static/img/chambre.jpg";
import cuisineJPG from "@/static/img/cuisine.jpg";
import design1PNG from "@/static/img/design-1.png";
import garageJPG from "@/static/img/garage.jpg";
import localTechniqueJPG from "@/static/img/local-technique.jpg";
import designPNG from "@/static/img/logo-2.png";
import salleDeBainJPG from "@/static/img/salle-de-bain.jpg";
import salonJPG from "@/static/img/salon.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const espaces = [
    {
      title: "Salon",
      image: salonJPG,
    },
    {
      title: "Cuisine",
      image: cuisineJPG,
    },
    {
      title: "Salle de bain",
      image: salleDeBainJPG,
    },
    {
      title: "Chambre",
      image: chambreJPG,
    },
    {
      title: "Garage",
      image: garageJPG,
    },
    {
      title: "Local technique",
      image: localTechniqueJPG,
    },
  ];

  return (
    <article className={styles.component}>
      <div className={styles.box}>
        <div ref={ref} className={styles.head}>
          <motion.div
            initial="slideInRightInitial"
            animate={isInView ? "slideInRightEarly" : "slideInRightInitial"}
            variants={variants}
          >
            <h2 className={styles.title}>
              Dans quels espaces voulez-vous intervenir ?
            </h2>

            <p className={styles.text}>
              Alliant esthétique, sécurité et performance, faites appel à nos
              services pour moderniser des installations électriques et de
              plomberie vieillissantes. Nous transformons des pièces mal
              agencées en espaces ouverts et fluides, optimisant chaque mètre
              carré.
            </p>
          </motion.div>

          <motion.div
            initial="revealInitial"
            animate={isInView ? "reveal" : "revealInitial"}
            variants={variants}
            className={styles.image}
          >
            <Image src={designPNG} alt="Design 2" width={1280} height={960} />
          </motion.div>
        </div>

        <div className={styles.body}>
          <div className={styles.image}>
            <motion.div
              initial="slideInDownInitial"
              animate={isInView2 ? "slideInDownEarly" : "slideInDownInitial"}
              variants={variants}
            >
              <Image src={design1PNG} alt="Design 1" width={320} height={240} />
            </motion.div>
          </div>

          <div ref={ref2} className={styles.content}>
            <div className={styles.cards}>
              {espaces.map((item, index) => (
                <div key={index} className={styles.card}>
                  <motion.div
                    initial="revealInitial"
                    animate={isInView2 ? "reveal" : "revealInitial"}
                    variants={variants}
                    className={styles.image}
                  >
                    <Image
                      src={item.image}
                      alt="Salon"
                      width={1280}
                      height={960}
                    />
                  </motion.div>

                  <motion.div
                    initial="slideInRightInitial"
                    animate={isInView2 ? "slideInRight" : "slideInRightInitial"}
                    variants={variants}
                  >
                    <h3 className={styles.title}>{item.title}</h3>
                  </motion.div>
                </div>
              ))}
            </div>

            <div ref={ref3} className="w-full overflow-hidden">
              <motion.div
                initial="slideInDownInitial"
                animate={isInView3 ? "slideInDownEarly" : "slideInDownInitial"}
                variants={variants}
                className="w-full pt-16 pb-16 flex items-center justify-center"
              >
                <Button>
                  Obtenir un devis dès
                  <br />
                  maintenant !
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
