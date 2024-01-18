// @/pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans, Josefin_Slab, Playball } from "next/font/google";
import Head from "next/head";
import { Fragment } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { PopupWidget } from "react-calendly";
import Layout from "./_layout";

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
