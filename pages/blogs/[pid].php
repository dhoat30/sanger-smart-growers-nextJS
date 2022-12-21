// import React from 'react'
// import getSingleCpt from '../../util/get-single-cpt'
// import getCPT from '../../util/get-cpt'
// import getContact from '../../util/get-contact'
// import BlogPage from '../../Components/Pages/Blogs/BlogPage'
// function blogs({singleBlogData, featuresData, stillThinkingData}) {
//   return (
//   //  <BlogPage
//   //  blogData={singleBlogData[0]}
//   //  featuresData={featuresData}
//   //  stillThinkingData={stillThinkingData}
//   //  />
//     <h1>blogData</h1>
//   )
// }

// export default blogs
// // export async function getStaticProps(context) {
// //   const {params} = context
// //   const slug = params.pid

// //   // get home page data using category from hero images 
// //   const featuresData = await getCPT("features")
// //   const contactData = await getContact();
// //   const stillThinkingData = await getSingleCpt('videos', "still-thinking")
// //   const allModulesData = await getCPT('modules')
// // const allBlogData = await getCPT("posts")
// // const singleBlogData = allBlogData.filter(item=> item.slug === slug)

// //   return {
// //     props: {
    
// //      featuresData: featuresData, 
// //      contactData: contactData,
// //      stillThinkingData: stillThinkingData, 
// //      allModulesData: allModulesData,
// //       allBlogData: allBlogData, 
// //       singleBlogData: singleBlogData
// //     },
// //     revalidate: 60
// //   }
// // }

// // export async function getStaticPaths(){ 
// //   const allBlogData = await getCPT('posts')
// //   const paths = allBlogData.map((item)=>({ params: {pid: item.slug} }))
// //   return{ 
// //    paths: paths, 
// //    fallback: 'blocking' 
// //   };

// // }