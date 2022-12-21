import React from "react";
import styled from "styled-components";
import Image from "next/image";
function RowLayout({ title, content, images, bgColor }) {
  return (
    <Section imageExist={images[0].image} bgColor={bgColor}>
      <FlexBox className="max-width">
        <ContentBox>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ContentBox>
        {images[0].image && (
        <ImageContainer className="box-shadow">
        
            <Image
              src={images[0].image.url}
              layout="responsive"
              alt={title}
              width="100%"
              height={(images[0].image.height / images[0].image.width) * 100}
            />
         
        </ImageContainer>
         )}
      </FlexBox>
    </Section>
  );
}
// width={images[0].image.width} height={images[0].image.height}
export default RowLayout;
const Section = styled.section`
padding: 70px 0;
min-height: ${(props)=> props.imageExist ? "90vh" : "0"};
display: flex; 
flex-direction: column; 
justify-content: center; 
background-color: ${props => props.bgColor === "Light Blue" && "var(--lightBlue)"}; 
text-align: center;
  position: relative;

  @media (max-width: 500px) {

    padding: 40px 0 40px 0;
  }
`;
const FlexBox = styled.div`
  margin: 0 auto; 
  max-width: 1000px;
`;


const ContentBox = styled.div`

`
const ImageContainer = styled.div`
  display: block;
  max-width: 700px;
  width: 100%;
  margin: 40px auto 0 auto;

`;