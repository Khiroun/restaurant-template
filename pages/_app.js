import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "../globalstyle/index.css";
import "../globalstyle/App.css";
import "../globalstyle/navbar.css";
import "../globalstyle/FooterOverlay.css";
import "../globalstyle/Newsletter.css";
import "../globalstyle/MenuItem.css";
import "../globalstyle/AboutUs.css";
import "../globalstyle/Chef.css";
import "../globalstyle/Footer.css";
import "../globalstyle/Gallery.css";
import "../globalstyle/Header.css";
import "../globalstyle/Intro.css";
import "../globalstyle/Laurels.css";
import "../globalstyle/SpecialMenu.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/images/logo-white-transparent.webp" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
