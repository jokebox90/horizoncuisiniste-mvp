// src/components/Services/Services.tsx

import styles from "@/components/Services/Services.module.css";
import design1PNG from "@/static/img/design-1.png";
import design2PNG from "@/static/img/logo-2.png";
import mainBackgroundJPG from "@/static/img/cuisine-bg.jpg";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { variants } from "@/components/Animate/Animate.variants";
import { ReactNode, useRef } from "react";
import CallToAction from "@/components/Button/CallToAction";

interface ServicesProps {
  data: {
    title?: string;
    image?: StaticImageData;
    description?: string;
    items: Array<any>;
  };
}

export default function Services({ data }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <article id="services" className={styles.component}>
      <div ref={ref} className={styles.head}>
        <motion.div
          initial="revealInitial"
          animate={isInView ? "reveal" : "revealInitial"}
          variants={variants}
          className={styles.image}
        >
          <Image
            src={design1PNG}
            alt="Design 1"
            width={320}
            height={240}
            priority
          />
        </motion.div>

        <motion.div
          initial="slideInRightInitial"
          animate={isInView ? "slideInRightEarly" : "slideInRightInitial"}
          variants={variants}
        >
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: data.title as string }}
          />

          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: data.description as string }}
          />
        </motion.div>
      </div>

      <div className={styles.body}>
        <div className={styles.image}>
          <Image
            src={mainBackgroundJPG}
            alt="Logo"
            width={1280}
            height={960}
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-primary-50 opacity-50"></div>
        </div>

        <CardGroup data={data} />

        <CallToAction />
      </div>
    </article>
  );
}

interface CardItem {
  title: string;
  image: StaticImageData;
  items: Array<ReactNode[] | ReactNode>;
}

interface CardGroupProps {
  data: {
    title?: string;
    image?: StaticImageData;
    description?: string;
    items: Array<CardItem>;
  };
}

function CardGroup({ data }: CardGroupProps) {
  const ref2 = useRef<HTMLDivElement>(null);
  const isInView2 = useInView(ref2);

  return (
    <div className={styles.content}>
      {data.image ? (
        <div ref={ref2} className="col-span-full mb-8 flex justify-center">
          <motion.div
            initial="slideInDownInitial"
            animate={isInView2 ? "slideInDownEarly" : "slideInDownInitial"}
            variants={variants}
            className="w-auto h-24"
          >
            <Image
              src={design1PNG}
              alt="Design 1"
              width={320}
              height={240}
              priority
              className="w-auto h-24"
            />
          </motion.div>
        </div>
      ) : null}

      {data.items.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

interface CardProps {
  data: CardItem;
}

function Card({ data }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.content}>
        <motion.div
          initial="revealInitial"
          animate={isInView ? "reveal" : "revealInitial"}
          variants={variants}
          className={styles.image}
        >
          <Image
            src={data.image}
            alt={data.title}
            width={320}
            height={240}
            priority
          />
        </motion.div>

        <motion.div
          initial="slideInRightInitial"
          animate={isInView ? "slideInRight" : "slideInRightInitial"}
          variants={variants}
          className={styles.motion}
        >
          <div className={styles.overlay}></div>
          <h3
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          {Array.isArray(data.items) ? (
            <ul className={styles.list}>
              {data.items.map((val, index) => (
                <li key={index} className={styles.item}>
                  {val}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.text}>{data.items}</div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
