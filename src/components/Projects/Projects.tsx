// src/components/Projects/Projects.tsx

import { variants } from "@/components/Animate/Animate.variants";
import styles from "@/components/Projects/Projects.module.css";
import design1PNG from "@/static/img/design-1.png";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import CallToAction from "@/components/Button/CallToAction";
import Overview from "./Overview";

interface ProjectsProps {
  data: {
    title?: string;
    logo?: StaticImageData;
    image?: StaticImageData;
    description?: string;
    items: Array<any>;
  };
}

export default function Projects({ data }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

  return (
    <article id="projects" className={styles.component}>
      <div className={styles.box}>
        <div ref={ref} className={styles.head}>
          <motion.div
            initial="slideInRightInitial"
            animate={isInView ? "slideInRightEarly" : "slideInRightInitial"}
            variants={variants}
          >
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: data.title as string }} />

            <p className={styles.text}>{data.description}</p>
          </motion.div>

          {
            <motion.div
              initial="revealInitial"
              animate={isInView ? "reveal" : "revealInitial"}
              variants={variants}
              className={styles.image}
            >
              <Image
                src={design1PNG}
                alt="Design 2"
                width={1280}
                height={960}
                priority
              />
            </motion.div>
          }
        </div>

        <div className={styles.body}>
          {data.logo ? (
            <div className={styles.image}>
              <motion.div
                initial="slideInDownInitial"
                animate={isInView2 ? "slideInDownEarly" : "slideInDownInitial"}
                variants={variants}
              >
                <Image
                  src={data.logo}
                  alt="Design 1"
                  width={320}
                  height={240}
                  priority
                />
              </motion.div>
            </div>
          ) : null}

          <div ref={ref2} className={styles.content}>
            <div className={styles.overviews}>
              {data.items.map((item, index) => (
                <Overview key={index} data={item} />
              ))}
            </div>

            <CallToAction />
          </div>
        </div>
      </div>
    </article>
  );
}
