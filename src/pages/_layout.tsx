// @/pages/_app.tsx

import { Josefin_Sans, Josefin_Slab, Playball } from "next/font/google";
import Head from "next/head";
import { Fragment, ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import dynamic from "next/dynamic";

const fontJosefinSans = Josefin_Sans({
  subsets: ["latin-ext"],
  variable: "--font-josefin-sans",
});
const fontJosefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
});
const fontPlayball = Playball({
  weight: "400",
  subsets: [],
  variable: "--font-playball",
});

const mainClasses = [
  fontJosefinSlab.variable,
  fontJosefinSans.variable,
  fontPlayball.variable,
].join(" ");

const PopupWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupButton),
  {
    ssr: false,
  }
);

interface LayoutProps {
  children: ReactNode[] | ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Head>
        <title>
          BONDY BUILDER, sublimez votre intérieur avec une touche
          d&apos;artisanat unique
        </title>
        <meta
          name="description"
          content="Rencontrez l'équipe Bondy Builder, vos experts en rénovation intérieure à Bondy. Spécialisés dans la modernisation des installations électriques et de plomberie, nous transformons vos espaces de vie avec élégance et confort. Nos services incluent la peinture, la pose de revêtements muraux et de sols, la maçonnerie et plus encore. Faites confiance à notre équipe pour des solutions de décoration et de rénovation sur mesure, alliant qualité et attention aux détails. Contactez-nous pour redéfinir votre espace avec style et fonctionnalité"
        />
      </Head>

      <main id="main" className={mainClasses}>
        {children}

        <PopupWidget
          url="https://calendly.com/bondybuilder/30min"
          rootElement={
            (typeof window !== "undefined"
              ? document.getElementById("__next")
              : null) as HTMLElement
          }
          text="Click here to schedule!"
          className="bg-amber-300"
        />
      </main>

      <GoogleTagManager gtmId="G-M5CQMKJ2SC" />
    </Fragment>
  );
}
