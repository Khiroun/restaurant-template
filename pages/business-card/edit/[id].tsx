import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BusinessCardEditor from "../../../src/components/BusinessCardEditor";
import Navbar from "../../../src/components/Hero/Navbar";
import colors from "../../../src/constants/colors";

const Edit = () => {
  const router = useRouter();
  useEffect(() => {
    screen.orientation.lock("landscape").catch(() => {});
  }, []);
  const { id } = router.query;
  if (typeof id !== "string") return null;
  return (
    <div>
      <Head>
        <title>
          Créez & personalisez votre carte de visite gratuitement | Algérie |
          Ayssel tech
        </title>
        <meta
          name="description"
          content="Faites vos cartes de visite avec notre outil en ligne intuitif & facile - Superbes modèles à personnaliser - 100 % gratuit ! | Ayssel tech"
        />
        <link rel="canonical" href="https://ayssel.tech/business-card" />
        <meta
          property="og:url"
          content="https://www.aysseltech.com/business-card"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Faire des cartes de visite gratuites | Algérie | Ayssel tech"
        />
        <meta
          property="og:description"
          content="Faites vos cartes de visite avec notre outil en ligne intuitif & facile - Superbes modèles à personnaliser - 100 % gratuit ! | Ayssel tech"
        />
        <meta
          property="og:image"
          content="https://www.aysseltech.com/images/modele1.PNG"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Faire des cartes de visite gratuites | Algérie | Ayssel tech"
        />
        <meta property="og:locale" content="FR_FR" />
        <meta property="og:site_name" content="Ayssel tech" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Faire des cartes de visite gratuites | Algérie | Ayssel tech",
              "url": "https://www.aysseltech.com/business-card",
              "sameAs": ["https://www.facebook.com/ayssel.tech/", "https://www.instagram.com/ayssel.tech/"]
            }
            `}
        </script>
      </Head>
      <Navbar
        style={{
          backgroundColor: colors.secondary.dark,
          padding: "0 20px",
        }}
        brandImageSize="60px"
        dropdownButtonStyle={{
          transform: "translateX(-20px)",
        }}
      />
      <BusinessCardEditor id={id} />
    </div>
  );
};

export default Edit;
