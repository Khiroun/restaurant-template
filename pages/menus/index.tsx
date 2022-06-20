import Head from "next/head";
import CommentCaMarche from "../../src/components/MenusPageComponents/CommentCaMarche";
import Hero from "../../src/components/MenusPageComponents/Hero";
import Pourquoi from "../../src/components/MenusPageComponents/Pourquoi";
import TrySection from "../../src/components/MenusPageComponents/TrySection";

const PageMenus = () => {
  return (
    <div>
      <Head>
        <title>
          Obtenez votre code QR pour afficher le menu! | ayssel tech
        </title>
      </Head>
      <Hero />
      <Pourquoi />
      <CommentCaMarche />
      <TrySection />
    </div>
  );
};

export default PageMenus;
