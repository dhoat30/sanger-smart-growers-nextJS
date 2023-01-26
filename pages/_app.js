import '../styles/globals.css'
import React, { useEffect, useState } from "react";

import Layout from '../Components/Layout'
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TV38GFT' });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}

export default MyApp
