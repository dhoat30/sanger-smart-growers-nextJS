import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components";
import Image from 'next/image';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollDownIcon from '../Icons/ScrollDownIcon';

function HeroJustImage({
  desktopImage,
  mobileImage,
  title,

  alt
}) {

  const matches = useMediaQuery('(min-width:700px)');

  return (
    <>
      <HeroContainer className="hero-section" >
        {matches ?
          <ImageStyle
            placeholder="blur"
            src={desktopImage}
            fill={true}
            alt={alt ? alt : title}
            blurDataURL={`/_next/image?url=${desktopImage}&w=16&q=1`}
            priority={true}
            sizes="100vw"
          /> :
          <ImageStyle
            placeholder="blur"
            src={mobileImage}
            fill={true}
            sizes="100vw"
            alt={alt ? alt : title}
            blurDataURL={`/_next/image?url=${mobileImage}&w=16&q=1`}
            priority={true}
          />
        }

        {/* <ScrollDownIconStyle /> */}
      </HeroContainer>
    </>

  );
}

export default HeroJustImage;
const HeroContainer = styled.section`
overflow: hidden;
position: relative;
display: flex; 
justify-content: center; 
align-items:center; 
height:60vh; 
width: 100%; 
margin-top: 60px; 
@media(max-width: 700px){ 
  height:400px;
  margin-top: 40px; 
}
`;

const ImageStyle = styled(Image)`
object-fit: cover; 
object-position: top; 
filter: contrast(120%);
filter: saturate(130%);

`

const ScrollDownIconStyle = styled(ScrollDownIcon)`
  top: calc(100% - 56px ) !important; 
  @media(max-width: 600px){ 
    top: calc(100% - 40px ) !important; 

  } 
`