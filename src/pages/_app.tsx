// src/pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Josefin_Sans, Josefin_Slab, Playball } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
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
  inter.className,
  fontJosefinSlab.variable,
  fontJosefinSans.variable,
  fontPlayball.variable,
].join(" ");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main id="main" className={mainClasses}>
      <Component {...pageProps} />
    </main>
  );
}
