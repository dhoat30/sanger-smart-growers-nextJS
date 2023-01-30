import React from 'react'
import SEO from '../../Components/SEO'
import WorkWithUsPage from '../../Components/Pages/WorkWithUsPage/WorkWithUsPage'
import getMenu from '../../util/get-menu'
import getSinglePage from '../../util/get-single-page'
import SeasonPage from '../../Components/Pages/WorkWithUsPage/SeasonPage/SeasonPage'
import OurProcess from '../../Components/Pages/ServicePage/OurProcess/OurProcess'
import getPost from '../../util/get-post'
import getAllPosts from '../../util/get-all-posts'
function PickingSeason({ postsData }) {
    console.log(postsData)

    // const seo = {
    //     title: postsData.yoast_head_json.og_title,
    //     description: postsData.yoast_head_json.og_description,
    //     imageSrc: postsData.yoast_head_json.og_image && pageData.yoast_head_json.og_image[0].url
    // }
    return (
        <>
            {/* <SEO  /> */}
            <h1>hello</h1>
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
