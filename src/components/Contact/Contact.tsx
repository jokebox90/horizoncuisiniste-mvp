// src/components/Contact/Contact.tsx

import styles from "@/components/Contact/Contact.module.css";
import designPNG from "@/static/img/logo-2.png";
import contactJPG from "@/static/img/contact.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMobilePhone,
  faRoad,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <article className={styles.component}>
      <div className={styles.box}>
        <div className={styles.body}>
          <div className={styles.image}>
            <Image src={contactJPG} alt="Salon" width={1024} height={768} />
          </div>
        </div>

        <div className={styles.head}>
          <h2 className={styles.title}>Contactez-nous</h2>

          <p className={styles.text}>
            Les défis de l'aménagement intérieur et des rénovatiions vous ont
            poussé à trouver une expertise fiable.
          </p>

          <p className={styles.text}>
            Sans une intervention adaptée, le cumul des problèmes peut nuire à
            l'esthétique et au fonctionnement de votre environnement.
          </p>

          <p className={styles.text}>
            Nous vous remercions de nous avoir choisis pour transformer ces
            défis en solutions créatives et performantes, en harmonie avec vos
            attentes décoratives.
          </p>

          <div className="w-full pt-8">
            <ul className="text-3xl font-sans font-bold flex flex-col gap-8">
              <li className="inline-flex gap-6 items-center">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  className="w-8 h-8 text-amber-600"
                />
                BONDYBUILDER
              </li>
              <li className="inline-flex gap-6 items-center">
                <FontAwesomeIcon
                  icon={faMobilePhone}
                  className="w-8 h-8 text-amber-600"
                />
                01 23 45 67 89
              </li>
              <li className="inline-flex gap-6 items-center">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="w-8 h-8 text-amber-600"
                />
                123, rue du Paradis
              </li>
              <li className="inline-flex gap-6 items-center">
                <FontAwesomeIcon
                  icon={faCity}
                  className="w-8 h-8 text-amber-600"
                />
                54321, Saint-Tillant
              </li>
            </ul>
          </div>

          <div className="w-full pt-16 pb-16 flex items-center justify-center">
            <button className="w-full max-w-xs px-2 py-4 bg-gradient-to-b from-amber-500 via-amber-500 to-amber-600 font-bold text-center text-2xl text-amber-50 rounded-xl shadow-2xl border-2 border-amber-600">
              Obtenir un devis dès
              <br />
              maintenant !
            </button>
          </div>

          <div className={styles.image}>
            <Image src={designPNG} alt="Salon" width={1280} height={960} />
          </div>
        </div>
      </div>
    </article>
  );
}
