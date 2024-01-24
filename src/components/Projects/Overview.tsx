// src/components/Projects/Projects.tsx

import { variants } from "@/components/Animate/Animate.variants";
import styles from "@/components/Projects/Overview.module.css";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface OverviewProps {
  data: {
    icon?: IconProp;
    title?: string;
    image?: StaticImageData;
    description?: string;
  };
}

export default function Overview({ data }: OverviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const hasMedia = data.image || data.icon ? true : false;

  return (
    <div ref={ref} className={styles.component}>
      <div className={styles.content}>
        {hasMedia ? (
          <div className={styles.start}>
            {data.image ? (
              <motion.div
                initial="revealInitial"
                animate={isInView ? "reveal" : "revealInitial"}
                variants={variants}
                className={styles.image}
              >
                <Image
                  src={data.image}
                  alt={data.title || "Aperçu"}
                  width={1280}
                  height={960}
                />
              </motion.div>
            ) : null}

            {data.icon ? (
              <motion.div
                initial="revealInitial"
                animate={isInView ? "reveal" : "revealInitial"}
                variants={variants}
                className={styles.listIcon}
              >
                <FontAwesomeIcon icon={data.icon} />
              </motion.div>
            ) : null}
          </div>
        ) : null}

        <div className={styles.end}>
          <motion.div
            initial="slideInRightInitial"
            animate={isInView ? "slideInRight" : "slideInRightInitial"}
            variants={variants}
            className={styles.motion}
          >
            {data.title ? (
              <div className={styles.title}>
                <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
              </div>
            ) : null}

            {data.description ? (
              <div className={styles.description}>
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
