import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
function TwoColumnLayoutRight({title, content, images, dangerouslySetInnerHTML, two_column_graphics_alignment, bgColor}) {
  const imagesBox = images.map(imgData=> { 
    // if two images 
    if(images.length ===2 ){ 
      return (
        <DoubleImage key={imgData.image.id} className="box-shadow">
          <ImageStyle src={imgData.image.url} layout="responsive" alt={title} width="100%" height={`${(imgData.image.height/imgData.image.width*100)}`}/> 
        </DoubleImage> 
      )
    }
    // if single image 
    if(images.length ===1 ){ 
      return (
        <SingleImage key={imgData.image.id} >
          <ImageStyle src={imgData.image.url} layout="responsive" alt={title} width="100%" height={`${(imgData.image.height/imgData.image.width*100)}`}/> 
        </SingleImage> 
      )
    }
  })  
  return (
    <Section bgColor={bgColor}>
    <div className="max-width" >
    <ContentBox>
             <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
       </ContentBox>
      {
        images.length === 2  ? 
          <DoubleImagesContainer>   {imagesBox}</DoubleImagesContainer>
          : 
          <ImagesContainer>
          {imagesBox}
       </ImagesContainer>
        }
      
      
    
    </div>
 </Section>
  )
}

export default TwoColumnLayoutRight
const Section = styled.section`
background-color: ${props => props.bgColor === "Light Blue" && "var(--lightBlue)"}; 

>div{ 
  padding: 140px 10px; 
  display: flex; 
  justify-content: space-around; 
align-items: center; 
@media(max-width: 800px){ 
  flex-wrap: wrap-reverse; 
  padding: 70px 10px; 

}
}

`
const ImagesContainer = styled.div`
  width: 50%; 
  max-width: 500px; 
  @media(max-width: 800px){ 
    width: 100%; 
    margin-top: 30px; 
  }

`
// dobule image container
const DoubleImagesContainer = styled.div`
width: 50%; 
display: grid; 
grid-template-columns:repeat(12, 1fr); 
grid-template-rows:repeat(6, auto); 

>div:nth-child(1){ 
  grid-column: 1/9;
  grid-row: 1/4;

}
>div:nth-child(2){ 
  grid-column: 5/13;
  grid-row: 3/7;
z-index: 4; 
}
@media(max-width: 800px){ 
  width: 100%; 
  margin-top: 30px; 
}
`
const SingleImage = styled.div`
display: block; 
width: 100%;
`
const DoubleImage = styled.div`
display: block; 
width: 100%;
`
const ImageStyle = styled(Image)``

const ContentBox = styled.div`
width: 40%;
P{ 
  margin-bottom: 10px; 
}
@media(max-width: 800px){ 
  width: 100%; 
}
`
const Content = styled.p`

`