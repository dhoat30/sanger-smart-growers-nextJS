import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components";
import Image from 'next/image';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';

function HeroGlassMorphism({
  desktopImage,
  mobileImage,
  title,
  subtitle,
  callToActionText,
  callToActionLink,
}) {

  const matches = useMediaQuery('(min-width:700px)');
  const subtitleClass = matches ? "headline-medium" : "headline-small"
  return (
    <>
      <HeroContainer className="hero-section" >
        {matches ?
          <ImageStyle
            placeholder="blur"
            src={desktopImage}
            fill={true}
            alt={title}
            blurDataURL={`/_next/image?url=${desktopImage}&w=16&q=1`}
            priority={true}
          /> :
          <ImageStyle
            placeholder="blur"
            src={mobileImage}
            fill={true}

            alt={title}
            blurDataURL={`/_next/image?url=${desktopImage}&w=16&q=1`}
            priority={true}
          />
        }
        <GlassBackground>
          <Content >
            <h1 className="display-large">{title}</h1>
            <h2 className={subtitleClass} >{subtitle}</h2>
            <HeroBtnContainer >
              <PrimaryButton callToActionText={callToActionText} href={callToActionLink} variant="contained" />

            </HeroBtnContainer>
          </Content>
        </GlassBackground>

      </HeroContainer>
    </>

  );
}

export default HeroGlassMorphism;
const HeroContainer = styled.section`
overflow: hidden;
position: relative;
display: flex; 
justify-content: center; 
align-items:center; 
height:90vh; 
width: 100%; 
text-align: center; 
margin-top: 60px; 
@media(max-width: 500px){ 
  height:85vh; 
  margin-top: 40px; 
}
`;

const ImageStyle = styled(Image)`
object-fit: cover; 
`
const HeroBtnContainer = styled.div`
display: flex;
gap: 15px;
margin-top: 24px;
flex-wrap: wrap; 
`
const GlassBackground = styled.div`
background: radial-gradient(98.05% 98.05% at 1.89% 1.95%, rgba(255, 255, 255, 0.42) 0%, rgba(81, 90, 2, 0.06) 100%);
backdrop-filter: blur(10px);
position: absolute ;
top: 0%; 
left: 0; 
z-index: 10; 
width: 50%;  
height: 100%;
display: flex ;
align-items: center; 
@media(max-width: 1366px){ 
  width: 60%;  
}
@media(max-width: 500px){ 
  width: 100%; 
  background:rgba(0,0,0,0.4);

  backdrop-filter: blur(0);
}
`
const Content = styled.div`
width: 100%; 
padding: 0 80px; 

color: var( --sanger--theme--white); 
@media(max-width: 1366px){ 
  padding: 0 24px; 
}

h2{ 
  margin-top: 16px; 
  text-align: left; 
}
h1{ 
  text-align: left; 
}
`
