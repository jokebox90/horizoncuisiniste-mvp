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
import Button from "../Button/Button";

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
            Les défis de l&apos;aménagement intérieur et des rénovatiions vous
            ont poussé à trouver une expertise fiable.
          </p>

          <p className={styles.text}>
            Sans une intervention adaptée, le cumul des problèmes peut nuire à
            l&apos;esthétique et au fonctionnement de votre environnement.
          </p>

          <p className={styles.text}>
            Nous vous remercions de nous avoir choisis pour transformer ces
            défis en solutions créatives et performantes, en harmonie avec vos
            attentes décoratives.
          </p>

          <div className={styles.list}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faUserCheck} className={styles.icon} />
                BONDYBUILDER
              </li>

              <li>
                <FontAwesomeIcon icon={faMobilePhone} className={styles.icon} />
                01 23 45 67 89
              </li>

              <li>
                <FontAwesomeIcon icon={faRoad} className={styles.icon} />
                123, rue du Paradis
              </li>

              <li>
                <FontAwesomeIcon icon={faCity} className={styles.icon} />
                54321, Saint-Tillant
              </li>
            </ul>
          </div>

          <div className={styles.buttons}>
            <Button>
              Obtenir un devis dès
              <br />
              maintenant !
            </Button>
          </div>

          <div className={styles.image}>
            <Image src={designPNG} alt="Salon" width={1280} height={960} />
          </div>
        </div>
      </div>
    </article>
  );
}
