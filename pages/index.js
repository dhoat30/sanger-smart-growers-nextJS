import React, { useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import SEO from '../Components/SEO'

import getMenu from '../util/get-menu'
import getPage from '../util/get-page'
export default function Home({ homePageData }) {
  // const seo = {
  //   title: homePageData[0].yoast_head_json.title,
  //   description: homePageData[0].yoast_head_json.description,
  //   imageSrc: homePageData[0].yoast_head_json.og_image > 0 && homePageData[0].yoast_head_json.og_image[0].url
  // }
  return (

    <React.Fragment>
      {/* <SEO
        seo={seo}
      /> */}
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