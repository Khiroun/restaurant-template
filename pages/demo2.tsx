import Head from "next/head";
import { useState } from "react";
import Header from "../src/components/demo2/Header";
import Hero from "../src/components/demo2/Hero";
import SiteMenu from "../src/components/demo2/SiteMenu";

const Demo2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen((prev) => !prev);

  return (
    <div
      style={{
        height: "300vh",
      }}
    >
      <Head>
        <title>Site web pour restaurant, exemple 2 | Ayssel tech</title>
      </Head>
      <SiteMenu open={menuOpen} />
      <Header menuOpen={menuOpen} toggle={toggle} />
      <Hero />
    </div>
  );
};

export default Demo2;
