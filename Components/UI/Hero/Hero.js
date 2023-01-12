import React, { useState, useEffect, useContext } from 'react'


import styled from "styled-components";
import VideoContext from '../../../Store/video-context';
import Image from 'next/image';
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';


function Hero({
  desktopImage,
  mobileImage,
  title,
  subtitle,
  callToActionText,
  callToActionLink,
}) {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();
  const matches = useMediaQuery('(min-width:700px)');

  const videoCtx = useContext(VideoContext)

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
            priority
          /> :
          <ImageStyle
            placeholder="blur"
            src={mobileImage}
            fill={true}

            alt={title}
            blurDataURL={`/_next/image?url=${desktopImage}&w=16&q=1`}
            priority
          />
        }

        <Content >
          <h1 className="display-large">{title}</h1>
          <h2 className={subtitleClass} >{subtitle}</h2>
          <HeroBtnContainer >
            <PrimaryButton callToActionText={callToActionText} href={callToActionLink} variant="contained" />

          </HeroBtnContainer>
        </Content>
      </HeroContainer>
      <Overlay />
    </>

  );
}

export default Hero;
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
justify-content: center;
align-items: center;
gap: 15px;
margin-top: 24px;
flex-wrap: wrap; 
`

const Content = styled.div`
position: absolute ;
top: 50%; 
left: 50%; 
transform: translate(-50%, -50%);
z-index: 10; 
max-width: 900px;
width: 100%;  
color: var( --sanger--theme--white); 
h2{ 
  margin-top: 16px; 
}
`

const Overlay = styled.div`
  position: absolute;
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 90vh ;
  background: rgba(0,0,0, 0.37);
  z-index: 1; 
  margin-top: 60px; 

  @media(max-width: 500px){ 
  height:85vh; 
  margin-top: 50px; 
}
`