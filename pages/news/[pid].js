import React from 'react'
import SingleNews from '../../Components/Pages/NewsPage/SingleNews/SingleNews'
import getAllPosts from '../../util/get-all-posts'

import getMenu from '../../util/get-menu'
import getPost from '../../util/get-post'
function Service({ menuData, slug, postData }) {
    console.log(postData)
    return (
        <SingleNews
            postData={postData[0]}
        />
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
    console.log(servicesData[0])
    const paths = posts.map((item) => ({ params: { pid: item.slug } }))
    return {
        paths: paths,
        fallback: 'blocking'
    };
}