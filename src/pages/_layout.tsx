// @/pages/_app.tsx

import { Architects_Daughter, Josefin_Sans, Josefin_Slab, Montserrat_Alternates, Playball } from "next/font/google";
import Head from "next/head";
import { Fragment, MouseEventHandler, ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import logoPNG from "@/static/img/logo.png";
import primaryPNG from "@/static/img/design-1.png";
import {
  CalendlyPopUp,
  CalendlyPopUpProvider,
} from "@/components/Calendly/Calendly";



const fontSans = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const mainClasses = [fontSans.variable, fontDisplay.variable].join(" ");

interface MainComponentProps {
  children: ReactNode[] | ReactNode;
}

function MainComponent({ children }: MainComponentProps) {
  return (
    <main id="main" className={mainClasses}>
      {children}

      <CalendlyPopUp />
    </main>
  );
}

interface LayoutProps {
  children: ReactNode[] | ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Head>
        <title>Horizon Cuisiniste, contrétiser vos visions d&apos;intérieur</title>
        <meta
          name="description"
          content="Horizon Cuisiniste, vos experts en rénovation intérieure à Bondy. Spécialisés dans les installations électriques et de plomberie, transformations espaces de vie et l'aménagement avec élégance et confort. Services incluant peinture, pose de revêtements muraux et sols, la maçonnerie et la menuiserie. Faites nous confiance pour des solutions de décoration et de rénovation sur mesure, alliant qualité et attention du détail. Contactez-nous pour redéfinir votre espace avec style et fonctionnalité"
        />
        <meta
          name="keywords"
          content="rénovation intérieur à bondy, décoration d'inérieur à bondy, installation électrique, installation plomberie, espace de vie, environement et confort,peinturier, revêtements muraux et sols, maçonnerie, charpenterie"
        />
        <meta
          name="og:title"
          content="Horizon Cuisiniste, sublimez votre intérieur avec une touche
          d'artisanat unique"
        />
        <meta
          name="og:description"
          content="Horizon Cuisiniste, vos experts en rénovation intérieure à Bondy. Spécialisés dans les installations électriques et de plomberie, transformations espaces de vie et l'aménagement avec élégance et confort. Services incluant peinture, pose de revêtements muraux et sols, la maçonnerie et la menuiserie."
        />
        <meta name="og:image" content={logoPNG.src} />
        <link rel="icon" type="image/x-icon" href={primaryPNG.src} />
      </Head>

      <CalendlyPopUpProvider>
        <MainComponent>{children}</MainComponent>
      </CalendlyPopUpProvider>

      <GoogleTagManager gtmId="G-M5CQMKJ2SC" />
    </Fragment>
  );
}
