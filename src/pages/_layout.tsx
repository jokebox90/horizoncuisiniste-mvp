// @/pages/_app.tsx

import {
  Architects_Daughter,
  Josefin_Sans,
  Josefin_Slab,
  Montserrat_Alternates,
  Playball,
} from "next/font/google";
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
        <title>
          Horizon Cuisiniste, expert en rénovation de cuisines modernes et
          fonctionnelles en Ile-de-France
        </title>
        <meta
          name="description"
          content="Horizon Cuisiniste à Chennevières se spécialise dans la rénovation de cuisines, transformant des espaces avec élégance et expertise artisanale. Profitez de services complets, de la démolition à l'installation de meubles et appareils modernes. Obtenez un devis gratuit pour une cuisine alliant style, confort et fonctionnalité."
        />
        <meta
          name="keywords"
          content="rénovation intérieur à bondy, décoration d'inérieur à bondy, installation électrique, installation plomberie, espace de vie, environement et confort,peinturier, revêtements muraux et sols, maçonnerie, charpenterie"
        />
        <meta
          name="og:title"
          content="Horizon Cuisiniste, expert en rénovation de cuisines modernes et
          fonctionnelles en Ile-de-France"
        />
        <meta
          name="og:description"
          content="Horizon Cuisiniste à Chennevières se spécialise dans la rénovation de cuisines, transformant des espaces avec élégance et expertise artisanale. Profitez de services complets, de la démolition à l'installation de meubles et appareils modernes. Obtenez un devis gratuit pour une cuisine alliant style, confort et fonctionnalité."
        />
        <meta name="og:image" content={logoPNG.src} />
        <link rel="icon" type="image/x-icon" href={primaryPNG.src} />
      </Head>

      <CalendlyPopUpProvider>
        <MainComponent>{children}</MainComponent>
      </CalendlyPopUpProvider>

      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
      />
    </Fragment>
  );
}
