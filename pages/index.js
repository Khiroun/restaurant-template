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
        <meta
          name="description"
          content="Création de sites web, sites vitrines, sites pros, ecommerces en Algérie utilisant les technologies modernes tel que React, React native et Nodejs | Ayssel tech"
        />
        <link
          rel="canonical"
          href="https://www.aysseltech.com/
"
        ></link>
      </Head>
      <Hero />
      <Services />
      <ContactSection />
    </div>
  );
};

export default home;
