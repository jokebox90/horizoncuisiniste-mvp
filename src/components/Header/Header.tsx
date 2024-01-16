// src/components/Header/Header.tsx

import styles from "@/components/Header/Header.module.css";
import logoPNG from "@/static/img/logo.png";
import salonJPG from "@/static/img/salon.jpg";
import Image from "next/image";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles.component}>
      <div className={styles.image}>
        <Image src={logoPNG} alt="Logo" width={640} height={480} />
      </div>

      <div className={styles.body}>
        <div className={styles.image}>
          <Image src={salonJPG} alt="Logo" width={1280} height={960} />
        </div>

        <div className={styles.content}>
          <h1 className={styles.company}>Bondy builder</h1>

          <div className={styles.divider}></div>

          <h2 className={styles.title}>
            Une idée d&apos;aménagement à concrétiser ?
          </h2>

          <p className={styles.text}>
            Ensemble, matérialisons votre vision de la décoration et des travaux
            d&apos;intérieur.
          </p>

          <Button>
            Obtenir un devis dès
            <br />
            maintenant !
          </Button>
        </div>
      </div>
    </header>
  );
}
