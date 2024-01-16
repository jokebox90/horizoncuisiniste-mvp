// src/components/About/About.tsx

import styles from "@/components/About/About.module.css";
import designPNG from "@/static/img/logo-2.png";
import parisJPG from "@/static/img/paris.jpg";
import Image from "next/image";

export default function About() {
  return (
    <article className={styles.component}>
      <div className={styles.box}>
        <div className={styles.head}>
          <div className={styles.image}>
            <Image src={parisJPG} alt="Fournitures" width={1024} height={768} />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.image}>
            <Image src={designPNG} alt="Salon" width={320} height={240} />
          </div>

          <h2 className={styles.title}>Qui sommes-nous ?</h2>
          <p className={styles.text}>
            Situés au cœur de la dynamique de la ville, nous sommes fiers de porter le
            nom de &apos;BONDY&apos; comme une marque. Bondy est une collectivité engagée
            avec vitalité et énergie dans un mode de vie basé sur le bien-être
            et le progrès. Notre philosophie s&apos;inspire de sa solidité, de sa
            persévérance et de son dévouement, Nous portons toutes ces valeurs
            dans chacun des projets pour créer des espaces equilibrés entre
            élégance et prospérité.
          </p>
          <p className={styles.text}>
            Le terme &apos;BUILDER&apos;, associé à notre nom, représente notre conscience
            détails et notre passion pour des architectures raffinées. Chaque
            espace que nous concevons est le fruit d&apos;une quête harmonieuse
            d&apos;excellence. Ils reflétant notre promesse de créer des intérieurs
            où chaque élément est en parfaite symbiose avec le confort qui fait
            votre fierté.
          </p>
        </div>
      </div>
    </article>
  );
}
