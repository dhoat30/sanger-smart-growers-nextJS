import React from 'react'
import SEO from '../../Components/SEO'
import WorkWithUsPage from '../../Components/Pages/WorkWithUsPage/WorkWithUsPage'
import getMenu from '../../util/get-menu'
import getSinglePage from '../../util/get-single-page'
import SeasonPage from '../../Components/Pages/WorkWithUsPage/SeasonPage/SeasonPage'
import OurProcess from '../../Components/Pages/ServicePage/OurProcess/OurProcess'
import getPost from '../../util/get-post'
import getAllPosts from '../../util/get-all-posts'
import NewsPage from '../../Components/Pages/NewsPage/NewsPage'
function PickingSeason({ postsData }) {

    const seo = {
        title: "Kiwifruit News and Insights | Sanger Smart Growers",
        description: "Our industry is rapidly advancing and so are we. We are eager to disseminate the latest and most significant updates, including news articles, employee news, and other relevant event information that could be of benefit to you"
    }
    return (
        <>
            <SEO seo={seo} />
            <NewsPage postsData={postsData} />
        </>
    )
}

export default PickingSeason
export async function getStaticProps(context) {

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const postsData = await getAllPosts()
    return {
        props: {
            menuData: menuData,
            postsData: postsData
        },
        revalidate: 60
    }
}
