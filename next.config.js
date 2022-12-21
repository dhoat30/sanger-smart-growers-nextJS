const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
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
      }
    }
  }
  return {
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    env: {
      url: "https://data.gonogo.co.nz",
      SITE_URL: "https://gonogo.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.gonogo.co.nz']
    }
  }
}
