import React from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import SEO from '../Components/SEO'
import getMenu from '../util/get-menu'
import getPage from '../util/get-page'

export default function Home({ homePageData }) {
  const seo = {
    title: homePageData.seo.title,
    description: homePageData.seo.description,
    imageSrc: homePageData.seo.image
  }
  return (

    <React.Fragment>
      <SEO
        seo={seo}
      />
      <HomePage homePageData={homePageData} />
    </React.Fragment>
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const homePageData = await getPage('home-page')
  const menuData = await getMenu();
  return {
    props: {
      homePageData: homePageData,
      menuData: menuData
    },
    revalidate: 60
  }
}