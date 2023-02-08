import '../index.scss'
import "../components/animation/ImageReveal.scss";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ThemeProvider } from 'theme-ui';
import { Provider, Updater } from '../context';
import { theme } from '../theme';
import { Web3Provider } from '@ethersproject/providers';
import Head from 'next/head';
import { AppProps } from 'next/app';



gsap.registerPlugin(CSSRulePlugin);

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}



function _App({ Component }: AppProps) {
  return (
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          <Provider>
            <Head>
              <meta charSet="utf-8" />
              <link rel="icon" href="favicon.ico" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="theme-color" content="#000000" />
              <link rel="apple-touch-icon" href="favicon.ico" />
              <link rel="manifest" href="/manifest.json" />

              <title>Metakrew - Your Identity in the Metaverse</title>
              <meta name="description" content="9750 Randomly Generated Krewmates" />

              <meta itemProp="name" content="Metakrew - Your Identity in the Metaverse" />
              <meta itemProp="description" content="9750 Randomly Generated Krewmates" />
              <meta itemProp="image" content="https://res.cloudinary.com/metakey/image/upload/v1636502498/metakrewLandingPageNew/website_background_1000_cjarcc.png" />

              <meta property="og:url" content="https://metakrew.com/" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Metakrew - Your Identity in the Metaverse" />
              <meta property="og:description" content="9750 Randomly Generated Krewmates" />
              <meta property="og:image" content="https://res.cloudinary.com/metakey/image/upload/v1636502498/metakrewLandingPageNew/website_background_1000_cjarcc.png" />

              <meta name="twitter:card" content="https://res.cloudinary.com/metakey/image/upload/v1636502498/metakrewLandingPageNew/website_background_1000_cjarcc.png" />
              <meta name="twitter:title" content="Metakrew - Your Identity in the Metaverse" />
              <meta name="twitter:description" content="9750 Randomly Generated Krewmates" />
              <meta name="twitter:image" content="https://res.cloudinary.com/metakey/image/upload/v1636502498/metakrewLandingPageNew/website_background_1000_cjarcc.png" />
            </Head>
            <Component />
            <Updater />
          </Provider>
        </ ThemeProvider>
      </Web3ReactProvider>
    </React.StrictMode>
  )
}

export default _App
