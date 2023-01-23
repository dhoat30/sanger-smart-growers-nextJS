import React from 'react'
import PlantEnquiryPage from '../../Components/Pages/PlantEnquiryPage/PlantEnquiryPage'
import SEO from '../../Components/SEO'

import getMenu from '../../util/get-menu'
import getSinglePage from '../../util/get-single-page'
function PlantEnquiry({ pageData }) {
    const seo = {
        title: pageData.yoast_head_json.og_title,
        description: pageData.yoast_head_json.og_description,
        imageSrc: pageData.yoast_head_json.og_image[0].url
    }
    return (
        <>
            <SEO seo={seo} />
            <PlantEnquiryPage
                pageData={pageData}
            />
        </>
    )
}

export default PlantEnquiry
export async function getStaticProps(context) {

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const pageData = await getSinglePage('plant-enquiry')

    return {
        props: {
            menuData: menuData,
            pageData: pageData[0]
        },
        revalidate: 60
    }
}
