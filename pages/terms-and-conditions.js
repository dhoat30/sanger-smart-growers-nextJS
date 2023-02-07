import React from 'react'
import SEO from '../Components/SEO'
import LegalPage from '../Components/Pages/Legal/LegalPage'
import getSinglePage from '../util/get-single-page'
import getMenu from '../util/get-menu'
function termsCondition({ pageData, featuresData, testimonialsData, contactData }) {
    console.log(pageData)

    const seo = {
        title: pageData[0].yoast_head_json.title,
        description: pageData[0].yoast_head_json.description,
        imageSrc: pageData[0].yoast_head_json.og_image > 0 && pageData[0].yoast_head_json.og_image[0].url
    }
    return (
        <React.Fragment>
            <SEO
                seo={seo}
            />
            <LegalPage
                pageData={pageData[0]}
            />


        </React.Fragment>

    )
}

export default termsCondition
export async function getStaticProps(context) {
    // get home page data using category from hero images
    const menuData = await getMenu();
    const pageData = await getSinglePage('terms-and-conditions')

    return {
        props: {
            pageData: pageData,
            menuData: menuData
        },
        revalidate: 60
    }
}