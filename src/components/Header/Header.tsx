// src/components/Header/Header.tsx

import styles from "@/components/Header/Header.module.css";
import logoPNG from "@/static/img/logo.png";
import salonJPG from "@/static/img/salon.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src={logoPNG}
            alt="Logo"
            width={640}
            height={480}
            className="w-full h-auto"
          />
        </div>

        <div className={styles.body}>
          <div className={styles.bg}>
            <div className={styles.image}>
              <Image src={salonJPG} alt="Logo" width={1280} height={960} />
            </div>
          </div>

          <div className={styles.inner}>
            <h1 className="uppercase font-bold font-sans">Bondy builder</h1>
            <div className="w-1/6 mb-16 bg-amber-500 h-1"></div>
            <p className="font-sans text-5xl mb-4">
              Une idée d'aménagement à concrétiser ?
            </p>
            <p className="font-handwriting text-4xl mb-8">
              Ensemble, matérialisons votre vision de la décoration et des
              travaux d'intérieur.
            </p>
            <button className="w-full max-w-xs px-2 py-4 bg-gradient-to-b from-amber-500 via-amber-500 to-amber-600 font-bold text-center text-2xl rounded-xl shadow-2xl border-2 border-amber-600">
              Obtenir un devis dès
              <br />
              maintenant !
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
