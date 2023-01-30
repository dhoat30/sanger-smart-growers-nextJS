import React from 'react'
import SEO from '../../Components/SEO'
import WorkWithUsPage from '../../Components/Pages/WorkWithUsPage/WorkWithUsPage'
import getMenu from '../../util/get-menu'
import getSinglePage from '../../util/get-single-page'
import SeasonPage from '../../Components/Pages/WorkWithUsPage/SeasonPage/SeasonPage'
import OurProcess from '../../Components/Pages/ServicePage/OurProcess/OurProcess'
function PickingSeason({ pageData }) {
    const seo = {
        title: pageData.yoast_head_json.og_title,
        description: pageData.yoast_head_json.og_description,
        imageSrc: pageData.yoast_head_json.og_image && pageData.yoast_head_json.og_image[0].url
    }
    return (
        <>
            <SEO seo={seo} />
            <OurProcess pageData={pageData} />
        </>
    )
}

export default PickingSeason
export async function getStaticProps(context) {

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const pageData = await getSinglePage('our-process')

    return {
        props: {
            menuData: menuData,
            pageData: pageData[0]
        },
        revalidate: 60
    }
}
