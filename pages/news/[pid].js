import React from 'react'
import SingleNews from '../../Components/Pages/NewsPage/SingleNews/SingleNews'
import getAllPosts from '../../util/get-all-posts'
import getMenu from '../../util/get-menu'
import getPost from '../../util/get-post'
import SEO from '../../Components/SEO'
function Service({ menuData, slug, postData }) {
    const seo = {
        title: "Kiwifruit News and Insights | Sanger Smart Growers",
        description: "Our industry is rapidly advancing and so are we. We are eager to disseminate the latest and most significant updates, including news articles, employee news, and other relevant event information that could be of benefit to you",
        imageSrc: postData[0].yoast_head_json.og_image && postData[0].yoast_head_json.og_image[0].url

    }
    return (
        <>
            <SEO seo={seo} />
            <SingleNews
                postData={postData[0]}
            />
        </>

    )
}

export default Service
export async function getStaticProps(context) {
    const { params } = context
    const slug = params.pid

    //get home page data using category from hero images 
    const menuData = await getMenu()
    const postData = await getPost(slug)
    return {
        props: {
            menuData: menuData,
            postData: postData
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const servicesData = await getMenu()
    const posts = await getAllPosts()
    const paths = posts.map((item) => ({ params: { pid: item.slug } }))
    return {
        paths: paths,
        fallback: 'blocking'
    };
}