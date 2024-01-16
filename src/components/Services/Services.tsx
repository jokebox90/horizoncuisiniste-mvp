// src/components/Services/Services.tsx

import styles from "@/components/Services/Services.module.css";
import démolitionJPG from "@/static/img/démolition.jpg";
import design1PNG from "@/static/img/design-1.png";
import design2PNG from "@/static/img/logo-2.png";
import electriciteJPG from "@/static/img/electricite.jpg";
import fournituresJPG from "@/static/img/fournitures.jpg";
import isolationJPG from "@/static/img/isolation.jpg";
import maconnerieJPG from "@/static/img/maconnerie.jpg";
import menuiserieJPG from "@/static/img/menuiserie.jpg";
import peinturesJPG from "@/static/img/peintures.jpg";
import plomberieJPG from "@/static/img/plomberie.jpg";
import revetementsJPG from "@/static/img/revetements.jpg";
import salonJPG from "@/static/img/salon.jpg";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Électricité",
      image: electriciteJPG,
      items: [
        "Installation des tableaux électrique",
        "Création et maintenance des réseaux",
        "Installation des prises, commandes et luminaires",
      ],
    },
    {
      title: "Revêtements muraux et sols",
      image: revetementsJPG,
      items: [
        "Pose des tapisseries et moquettes",
        "Pose des carrelages et parquets",
        "Pose des plinthes et installation des placards",
      ],
    },
    {
      title: "Peintures",
      image: peinturesJPG,
      items: [
        "Peintures murales et plafond",
        "Peinture sur tôle et sur plâtre",
        "Traitement des fissures",
      ],
    },
    {
      title: "Fournitures",
      image: fournituresJPG,
      items: [
        "Pose des meubles, lampes et luminaires",
        "Installation des douches, baignoires, WC",
      ],
    },
    {
      title: "Plomberie",
      image: plomberieJPG,
      items: [
        "Installation et rénovation des réseaux",
        "Eau chaude : chaudières, ballons",
        "Dépose et repose de radiateurs",
      ],
    },
    {
      title: "Maçonnerie & menuiserie",
      image: menuiserieJPG,
      items: [
        "Pose des fenêtres et des escaliers",
        "Pose de porte-fenêtres et verrières",
        "Pose de raccords et de plaques",
        "Création de placards et encadrements",
      ],
    },
    {
      title: "Maçonnerie & menuiserie - Gros œuvre",
      image: maconnerieJPG,
      items: [
        "Ouverture de murs et de fenêtres",
        "Charpente, toiture et étanchéité",
        "Coffrage et ouverture de cheminées",
      ],
    },
    {
      title: "Isolation",
      image: isolationJPG,
      items: [
        "Isolation de la toiture et des combles",
        "Isolation des murs et des sols",
      ],
    },
    {
      title: "Préparation et démolition",
      image: démolitionJPG,
      items: [
        "Protection des zones d'intervention",
        "Nettoyage à l'avancement et en fin de chantier",
      ],
    },
  ];
  return (
    <article className={styles.component}>
      <div className={styles.head}>
        <div className={styles.image}>
          <Image src={design2PNG} alt="Salon" width={320} height={240} />
        </div>

        <h2 className={styles.title}>
          Quels services pour réaliser vos projets ?
        </h2>

        <p className={styles.text}>
          Chaque membre de notre équipe est qualifié pour vous apporter une
          expertise polichée. Nous collaborons à chaque instant pour trouver des
          solutions élégantes à vos défis de décoration et de rénovation. Vos
          espaces sont ainsi repensés pour une meilleure qualité de vie.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.image}>
          <Image src={salonJPG} alt="Logo" width={1280} height={960} />
        </div>

        <div className={styles.cards}>
          <div className="col-span-full mb-8 flex justify-center">
            <Image
              src={design1PNG}
              alt="Salon"
              width={320}
              height={240}
              className="w-auto h-24"
            />
          </div>

          {services.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <ul className={styles.list}>
                  {item.items.map((val, index) => (
                    <li key={index} className={styles.text}>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={240}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
