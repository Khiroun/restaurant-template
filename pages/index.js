import React from "react";
import Head from "next/head";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import ContactSection from "../src/components/ContactSection";
const home = () => {
  return (
    <div>
      <Head>
        <title>Création de sites web en Algérie | Ayssel tech</title>
      </Head>
      <Hero />
      <Services />
      <ContactSection />
    </div>
  );
};

export default home;
