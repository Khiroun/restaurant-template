import React from "react";
import Head from "next/head";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../src/container";
import { Navbar } from "../src/components";

const App = () => (
  <div>
    <Head>
      <title>Création de sites web en Algérie | Ayssel tech</title>
    </Head>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
