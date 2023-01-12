import React from 'react'
import ServicePage from '../../Components/Pages/ServicePage/ServicePage'

import getMenu from '../../util/get-menu'
function Service({ menuData, slug }) {

    const serviceData = menuData.services.find(item => slug === item.slug)
    return (

        <ServicePage servicesData={serviceData} />
    )
}

export default Service
export async function getStaticProps(context) {
    const { params } = context
    const slug = params.pid

    //get home page data using category from hero images 
    const menuData = await getMenu()

    return {
        props: {
            menuData: menuData,
            slug: slug
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const servicesData = await getMenu()
    console.log(servicesData[0])
    const paths = servicesData.services.map((item) => ({ params: { pid: item.slug } }))
    return {
        paths: paths,
        fallback: 'blocking'
    };

}