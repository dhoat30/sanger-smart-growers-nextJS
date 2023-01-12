import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

function SEO({ seo }) {
  const router = useRouter();

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-35JTPJVTX9"></Script>
      <Script id="gAnalytics-script"
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-35JTPJVTX9');`,
        }}
      />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <title>{seo.title}</title>
        <meta name="description" content={seo.description}></meta>

        {/* open graph meta */}
        <meta property="og:title" content={`${seo.title}`} key="ogtitle" />
        <meta property="og:description" content={seo.description} key="ogdesc" />
        <meta
          property="og:url"
          content={`https://sangersmartgrowers.co.nz${router.asPath}`}
          key="ogurl"
        />
        <meta property="og:image" content={seo.imageSrc} key="ogimage" />
        <meta property="og:site_name" content={"Sanger Smart Growers"} key="ogsitename" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
    </>

  );
}

export default SEO;
