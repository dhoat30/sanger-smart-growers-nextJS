const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      trailingSlash: true,
      i18n: {
        locales: ['en'],
        defaultLocale: 'en',
      },
      env: {
        url: "http://sangersmartgrowers.local/",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['sangersmartgrowers.local']
      },
      compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      }
    }
  }
  return {
    trailingSlash: true,
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    env: {
      url: "https://data.sangergrowers.co.nz",
      SITE_URL: "sangergrowers.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.sangergrowers.co.nz']
    },
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  }
}
