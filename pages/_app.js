import '../styles/globals.css'
import React, { useEffect, useState } from "react";

import Layout from '../Components/Layout'
import { ThemeProvider } from '@mui/material/styles';
import { Progress } from '../Components/UI/Progress/Progress'
import { useProgressStore } from '../Store/useProgressStore';
import Script from 'next/script';

import theme from '../theme';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next';

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const isAnimating = useProgressStore((state) => state.isAnimating)
  const router = useRouter()
  const consent = getCookie('localConsent');

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TV38GFT' });
    window.gtag = function () {
      window.dataLayer.push({
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      })
    }


    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStart)
      router.events.off('routeChangeError', handleStart)
    }

  }, [router]);
  return (
    <>
      {
        consent === true && (
          <Script
            id="consupd"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      `,
            }}
          />
        )
      }
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Progress isAnimating={isAnimating} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>


  )
}

export default MyApp
