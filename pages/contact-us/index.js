import React from 'react'
import ContactUsPage from '../../Components/Pages/ContactUsPage/ContactUsPage'
import SEO from '../../Components/SEO'

import getMenu from '../../util/get-menu'
import getSinglePage from '../../util/get-single-page'
function ContactUs({ pageData }) {
    const seo = {
        title: pageData.yoast_head_json.og_title,
        description: pageData.yoast_head_json.og_description,
        imageSrc: pageData.yoast_head_json.og_image && pageData.yoast_head_json.og_image[0].url
    }
    return (
        <>
            <SEO seo={seo} />
            <ContactUsPage
                pageData={pageData}
            />
        </>

    )
}

export default ContactUs
export async function getStaticProps(context) {

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const pageData = await getSinglePage('wed-love-to-hear-from-you')
    return {
        props: {
            menuData: menuData,
            pageData: pageData[0]
        },
        revalidate: 60
    }
}
