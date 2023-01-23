import React from 'react'
import PlantEnquiryPage from '../../Components/Pages/PlantEnquiryPage/PlantEnquiryPage'

import getMenu from '../../util/get-menu'
import getSinglePage from '../../util/get-single-page'
function JobForm({ pageData }) {
    console.log(pageData)
    return (
        // <PlantEnquiryPage
        //     pageData={pageData}
        // />
        <h1>hafsd</h1>
    )
}

export default JobForm
export async function getStaticProps(context) {

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const pageData = await getSinglePage('job-application-form')
    console.log(pageData)
    return {
        props: {
            menuData: menuData,
            pageData: pageData[0]
        },
        revalidate: 60
    }
}
