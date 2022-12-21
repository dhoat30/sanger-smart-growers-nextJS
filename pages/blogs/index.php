// import React, { useEffect } from 'react'
// import BlogArchive from '../../Components/Pages/Blogs/BlogArchive'
// import SEO from '../../Components/SEO'
// import getContact from '../../util/get-contact'
// import getCPT from '../../util/get-cpt'
// import getPage from '../../util/get-page'
// import getSingleCpt from '../../util/get-single-cpt'
// export default function Home({ homePageData, featuresData, testimonialsData, contactData, stillThinkingData, allBlogData }) {
//   // const seo = {
//   //   title: homePageData[0].yoast_head_json.title,
//   //   description: homePageData[0].yoast_head_json.description,
//   //   imageSrc: homePageData[0].yoast_head_json.og_image > 0 &&  homePageData[0].yoast_head_json.og_image[0].url
//   // }
//   // console.log(allBlogData)
//   return (
//     // <React.Fragment>
//     //   <SEO
//     //     seo={seo}
//     //   />
//     //   <BlogArchive allBlogData={allBlogData} />
//     //   </React.Fragment>
//     <h1>hello</h1>
//   )
// }

// // export async function getStaticProps(context) {
// //   // get home page data using category from hero images
// //   const homePageData = await getPage('home-page')
// //   const featuresData = await getCPT("features")
// //   const testimonialsData = await getCPT("testimonials")
// //   const stillThinkingData = await getSingleCpt('videos', "still-thinking")
// //   const allModulesData = await getCPT('modules')
// //   const contactData = await getContact();
// //   const allBlogData = await getCPT('posts')
// //   return {
// //     props: {
// //       homePageData: homePageData,
// //       featuresData: featuresData,
// //       testimonialsData: testimonialsData,
// //       contactData: contactData,
// //       stillThinkingData: stillThinkingData,
// //       allModulesData: allModulesData,
// //       allBlogData: allBlogData
// //     },
// //     revalidate: 60
// //   }
// // }