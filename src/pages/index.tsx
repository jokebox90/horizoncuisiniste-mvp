// src/pages/index.tsx

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import protectionJPG from "@/static/img/protection.jpg";
import meublesJPG from "@/static/img/meubles.jpg";
import sanitairesJPG from "@/static/img/sanitaires.jpg";
import electromenagersJPG from "@/static/img/electromenagers.jpg";
import cloisonsJPG from "@/static/img/cloisons.jpg";
import finitionsJPG from "@/static/img/finitions.jpg";
import quicaillerieJPG from "@/static/img/quicaillerie.jpg";
import installationJPG from "@/static/img/installation.jpg";
import {
  faArrowsLeftRightToLine,
  faArrowsTurnToDots,
  faBuildingShield,
  faFaucetDrip,
  faPaintBrush,
  faShuffle,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export default function Home() {
  const projects = [
    {
      title: "Protection et nettoyage du chantier",
      icon: faBuildingShield,
      description:
        "Quand on parle rénovation, l&apos;image d&apos;un champ de bataille vous vient à l&apos;esprit ? Pas de panique ! Avec nous, fini la poussière et les débris qui s&apos;invitent au quotidien. On protège tout et on nettoie en continu, pour que vous viviez les travaux sans vous en apercevoir.",
    },
    {
      title: "Démolition et dépose de l&apos;ancienne Cuisine",
      icon: faShuffle,
      description:
        "Votre vieille cuisine a perdu de son charme ? Elle est aussi démodée que peu fonctionnelle, et ça vous déprime rien qu&apos;à la voir. Laissez-nous faire le grand ménage ! On débarrasse le passé pour accueillir un nouveau style qui respire la modernité.",
    },
    {
      title: "Réfection de la plomberie et installation électrique",
      icon: faFaucetDrip,
      description:
        "Des tuyaux capricieux et des prises d&apos;un autre temps ? Gare aux fuites et aux courts-circuits ! On intervient pour remettre à neuf votre plomberie et votre électricité. Objectif : une cuisine sécurisée, opérationnelle et au goût du jour.",
    },
    {
      title: "Préparation et finition des sols et des murs",
      icon: faArrowsTurnToDots,
      description:
        "Marre des murs qui font grise mine et des sols qui racontent l&apos;histoire de chaque éclaboussure ? On se charge de tout effacer. Préparation minutieuse et finition soignée, on transforme vos surfaces pour un intérieur qui en met plein la vue.",
    },
    {
      title: "Installation de faux plafond et cloisons",
      icon: faArrowsLeftRightToLine,
      description:
        "Des imperfections au plafond ? Une acoustique à améliorer ? On a la solution discrète mais efficace : un faux plafond. Il cache, il isole, il sublime, et tout ça, en toute discrétion.",
    },
    {
      title: "Pose des meubles, sanitaires, et électroménagers",
      icon: faWarehouse,
      description:
        "Installer une cuisine, c&apos;est souvent un puzzle géant. Entre les notices à décrypter et les vis égarées, c&apos;est la croix et la bannière. Mais pour vous, c&apos;est repos assuré : on assemble, on installe, vous profitez.",
    },
    {
      title: "Finitions, peinture et béton ciré",
      icon: faPaintBrush,
      description:
        "Les finitions, c&apos;est souvent le petit plus qui traîne en longueur. Mais pas chez nous ! On s&apos;attelle aux derniers détails avec autant de soin que si c&apos;était pour nous. Peinture, béton ciré, tout est fait pour durer et pour enchanter.",
    },
  ];

  const services = [
    {
      title: "Bâches de protection et matériel de nettoyage",
      image: protectionJPG,
      items: (
        <Fragment>
          <p>
            Lorsque nos super bâches entrent en scène, elles garantissent un
            espace de vie préservé et elles s&apos;adaptent à la nature des
            travaux.
          </p>
          <p>
            Du début à la fin, elles couvrent votre intérieur avec une précision
            millimétrée.
          </p>
          <p>
            Et pour le nettoyage ? Notre équipement de pointe fait des miracles,
            pour que votre maison reste aussi propre qu&apos;un sous neuf, même
            en plein chantier.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Meubles de cuisine, caissons, et finitions",
      image: meublesJPG,
      items: (
        <Fragment>
          <p>
            Imaginez des meubles de cuisine qui s&apos;adaptent à votre style
            comme un gant, avec des caissons conçus pour durer et des finitions
            qui captent le regard.
          </p>
          <p>
            Installés par nos soins, là où l&apos;élégance côtoie la
            fonctionnalité, ils transforment votre cuisine en un espace qui fait
            "Wow !" dès le premier coup d&apos;œil.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Équipements Sanitaires",
      image: sanitairesJPG,
      items: (
        <Fragment>
          <p>
            Quand il s&apos;agit de votre zone de confort culinaire, nos
            sanitaires éclatants et nos mitigeurs scintillants sont là pour
            apporter cette touche de luxe et d&apos;efficacité.
          </p>
          <p>
            Installés stratégiquement au cœur de votre cuisine, ils promettent
            une brillance durable et une facilité d&apos;utilisation
            quotidienne.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Appareils électroménagers",
      image: electromenagersJPG,
      items: (
        <Fragment>
          <p>
            Nos appareils électroménagers ne sont pas là pour faire de la
            figuration. Performants et élégants, ils sont intégrés à votre
            espace pour faire de chaque repas une expérience gastronomique. Là
            où vous en avez besoin, ils s&apos;ajustent parfaitement pour vous
            servir au quotidien.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Matériaux pour plafonds et cloisons",
      image: cloisonsJPG,
      items: (
        <Fragment>
          <p>
            Nos matériaux pour vos plafonds et cloisons sont choisis avec soin
            pour vous assurer un confort acoustique et thermique sans égal. À
            chaque coin et recoin de votre cuisine, ils sont posés avec minutie,
            pour un bien-être qui se ressent dans toute la pièce.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Matériaux de finition pour les sols et les murs",
      image: finitionsJPG,
      items: (
        <Fragment>
          <p>
            Au sol comme au mur, notre peinture de caractère et notre béton ciré
            de qualité sont appliqués avec le plus grand soin. Le résultat ? Une
            cuisine aussi belle que durable, où chaque finition raconte une
            histoire de qualité et de style.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Installation électrique",
      image: installationJPG,
      items: (
        <Fragment>
          <p>
            Derrière chaque interrupteur et chaque prise se cache notre
            savoir-faire électrique. Un réseau flambant neuf, pensé pour votre
            sécurité et adapté à vos besoins, mis en place par des experts de la
            mise aux normes.
          </p>
          <p>
            Allumez la lumière et laissez vos appareils s&apos;exprimer dans un
            concert de satisfaction.
          </p>
        </Fragment>
      ),
    },
    {
      title: "Quincaillerie pour Montage et Installation",
      image: quicaillerieJPG,
      items: (
        <Fragment>
          <p>
            Notre quincaillerie, c&apos;est l&apos;assurance d&apos;une
            installation solide et fiable. À chaque jointure, à chaque fixation,
            elle tient bon. Pourquoi ? Pour que tout reste en place, impeccable
            et sécurisé, année après année. Parce que chez nous, bien fixer
            c&apos;est fixer pour de bon.
          </p>
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Header />
      <Projects
        data={{
          title:
            "Quelles sont les étapes clés d&apos;une rénovation de cuisine&nbsp;?",
          description: `Se lancer dans la rénovation de votre cuisine vous
              semble un défi insurmontable ? Entre la sélection des matériaux
              et la coordination des travaux, ça peut vite devenir un casse-tête.
              Pas de souci ! Chez Horizon Cuisiniste, nous prenons les choses en
              main du début à la fin. Découvrez comment nous transformons chaque
              étape en une expérience fluide et sans stress, avec notre
              expertise artisanale.`,
          items: projects,
        }}
      />
      <Services
        data={{
          title: `Comment choisir l&apos;équipement parfait pour votre cuisine ?`,
          description: `Depuis Chennevières, votre équipe d&apos;Horizon Cuisiniste sélectionne méticuleusement des matériaux et équipements de haute qualité pour votre cuisine. Nous veillons à ce que chaque élément, de la robustesse des caissons à la brillance des mitigeurs, s&apos;intègre parfaitement dans votre projet. Nous vous promettons une cuisine qui allie parfaitement style et fonctionnalité, conçue pour résister au temps.`,
          items: services,
        }}
      />
      <Contact />
      <About />
      <Footer />
    </Fragment>
  );
}
