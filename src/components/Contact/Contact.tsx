// src/components/Contact/Contact.tsx

import styles from "@/components/Contact/Contact.module.css";
import designPNG from "@/static/img/design-1.png";
import contactJPG from "@/static/img/cuisine-bg.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faEnvelope,
  faMobilePhone,
  faRoad,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import { variants } from "@/components/Animate/Animate.variants";
import { useRef } from "react";
import CallToAction from "../Button/CallToAction";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  return (
    <article id="contact" ref={ref} className={styles.component}>
      <div className={styles.box}>
        <div className={styles.body}>
          <div className={styles.image}>
            <Image
              src={contactJPG}
              alt="Salon"
              width={1024}
              height={768}
              priority
            />
          </div>
        </div>

        <div className={styles.head}>
          <div className={styles.image}>
            <Image
              src={designPNG}
              alt="Design 2"
              width={1280}
              height={960}
              priority
            />
          </div>

          <div ref={ref4} className="relative w-full">
            <motion.div
              initial="slideInRightInitial"
              animate={isInView4 ? "slideInRightEarly" : "slideInRightInitial"}
              variants={variants}
            >
              <h2 className={styles.title}>
                Des questions sur votre projet de cuisine ? Comment pouvons-nous
                vous aider ?
              </h2>

              <p className={styles.text}>
                Vous avez des questions en tête ou êtes prêt à démarrer votre
                projet de cuisine ? Trouver le bon artisan peut sembler
                compliqué, mais nous sommes là pour faciliter les choses.
                Contactez Horizon Cuisiniste à Chennevières et débutons ensemble
                le voyage vers la cuisine de vos rêves. Notre équipe est à votre
                écoute pour planifier et concrétiser vos idées.
              </p>
            </motion.div>
          </div>

          <div ref={ref2} className={styles.list}>
            <motion.div
              initial="slideInDownInitial"
              animate={isInView2 ? "slideInDownEarly" : "slideInDownInitial"}
              variants={variants}
            >
              <ul>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faUserCheck} />
                  </div>
                  {process.env.NEXT_PUBLIC_PROJECT_NAME}
                </li>

                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  {process.env.NEXT_PUBLIC_PROJECT_EMAIL}
                </li>

                {/* <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMobilePhone} />
                  </div>
                  {process.env.NEXT_PUBLIC_PROJECT_PHONE_NUMBER}
                </li> */}

                {/* <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faRoad} />
                  </div>
                  {process.env.NEXT_PUBLIC_PROJECT_ADDRESS}
                </li> */}

                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCity} />
                  </div>
                  {process.env.NEXT_PUBLIC_PROJECT_LOCATION}
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="w-full inline-flex">
            <CallToAction />
          </div>
        </div>
      </div>
    </article>
  );
}
