// src/pages/index.tsx

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Projects />
      <Services />
      <Contact />
      <About />
      <Footer />
    </Fragment>
  );
}
