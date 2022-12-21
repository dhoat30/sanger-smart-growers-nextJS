import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
function BlogArchive({allBlogData}) {
    const blogCards = allBlogData.map(item=>{ 
      console.log(item)
      const date = new Date (item.date_gmt)
      let month = date.getMonth()+1
      if (month < 10){ 
        month = "0" + month
      }
      const publishDate = `${date.getDate()}/${month}/${date.getFullYear()}`
    
        return (
            <Card key={item.id}>
                <Link href={`/blogs/${item.slug}`}>
                    <div>
                <ImageContainer>
                    <Image
                    src={item.acf.hero_image.url}
                    layout="fill"
                    alt={item.title.rendered}
                    objectFit="cover"
                    /> 
                </ImageContainer>
                <Content>
                    <h3 className="author">Writen by {item.author_meta.first_name} {item.author_meta.last_name} | {publishDate}</h3>

                    <h2>{item.title.rendered} </h2>
                    <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}/>
                </Content>
                </div>
                </Link>
            </Card>
        )
    })
  return (
    <Section >
      <div className='hero-section'> 
      <Heading>Our Blogs</Heading>

      </div>
        <FlexBox className="max-width">
            {blogCards}
        </FlexBox> 
    </Section>
  )
}

export default BlogArchive
const Section = styled.section`

@media (max-width: 1100px) {
    padding: 50px 20px; 
  }
  .hero-section{ 
    background: linear-gradient(180deg, #FF8B67 0%, #FB7F09 100%);
    padding: 150px 0 100px 0;
    display: flex; 
    align-items: center; 
    justify-content: center; 
   
  }
`
const Heading = styled.h1`
text-align: center; 
color: white;
`
const FlexBox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 50px 40px;
margin: 100px auto;
@media (max-width: 900px) {
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 600px) {
  grid-template-columns: 1fr;
}
`
const Card = styled.div`
width: 100%; 
cursor: pointer; 
background: var(--lightBlue);
transition: 200ms easi-in-out; 
&:hover{ 
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
}
`

const ImageContainer = styled.div`
position: relative; 
width: 100%; 
height: 300px; 
`
const Content = styled.div`
padding: 10px 10px 20px 10px; 
h3{ 
  font-size: 0.8rem; 
  font-weight: 400; 
  line-height: 1.3rem;
  margin:0 0 10px 0; 
}
h2{ 
    font-size: 1.3rem; 
    font-weight: 700; 
    line-height: 1.7rem; 
}
`