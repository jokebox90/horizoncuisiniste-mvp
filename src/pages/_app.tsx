// @/pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans, Josefin_Slab, Playball } from "next/font/google";
import Head from "next/head";
import { Fragment } from "react";

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

export default function App({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}
