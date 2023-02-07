import React from 'react'
import SEO from '../../Components/SEO'
import getSinglePage from '../../util/get-single-page'
import getMenu from '../../util/get-menu'
import AboutUsPage from '../../Components/Pages/AboutUsPage/AboutUsPage'
function AboutUs({ menuData, pageData }) {
    const seo = {
        title: pageData.yoast_head_json.og_title,
        description: pageData.yoast_head_json.og_description,
        imageSrc: pageData.yoast_head_json.og_image && pageData.yoast_head_json.og_image[0].url
    }

    return (
        <>
            <SEO seo={seo} />
            <AboutUsPage
                pageData={pageData}
            />
        </>
    )
}

export default AboutUs
export async function getStaticProps(context) {

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const pageData = await getSinglePage("about-us")
    return {
        props: {
            menuData: menuData,
            pageData: pageData[0]
        },
        revalidate: 60
    }
}
