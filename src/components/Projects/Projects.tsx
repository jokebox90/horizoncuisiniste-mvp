// src/components/Projects/Projects.tsx

import styles from "@/components/Projects/Projects.module.css";
import chambreJPG from "@/static/img/chambre.jpg";
import cuisineJPG from "@/static/img/cuisine.jpg";
import design1PNG from "@/static/img/design-1.png";
import garageJPG from "@/static/img/garage.jpg";
import interieurJPG from "@/static/img/interieur.jpg";
import localTechniqueJPG from "@/static/img/local-technique.jpg";
import designPNG from "@/static/img/logo-2.png";
import logoPNG from "@/static/img/logo.png";
import salleDeBainJPG from "@/static/img/salle-de-bain.jpg";
import salonJPG from "@/static/img/salon.jpg";
import Image from "next/image";
import Button from "../Button/Button";

export default function Projects() {
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
        <div className={styles.head}>
          <h2 className={styles.title}>
            Dans quels espaces voulez-vous intervenir ?
          </h2>

          <p className={styles.text}>
            Alliant esthétique, sécurité et performance, faites appel à nos
            services pour moderniser des installations électriques et de
            plomberie vieillissantes. Nous transformons des pièces mal agencées
            en espaces ouverts et fluides, optimisant chaque mètre carré.
          </p>

          <div className={styles.image}>
            <Image src={designPNG} alt="Salon" width={1280} height={960} />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.image}>
            <Image
              src={design1PNG}
              alt="Salon"
              width={320}
              height={240}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.cards}>
              {espaces.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.image}>
                    <Image
                      src={item.image}
                      alt="Salon"
                      width={1280}
                      height={960}
                    />
                  </div>

                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="w-full pt-16 pb-16 flex items-center justify-center">
              <Button>
                Obtenir un devis dès
                <br />
                maintenant !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
