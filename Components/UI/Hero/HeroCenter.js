import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components";
import Image from 'next/image';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollDownIcon from '../Icons/ScrollDownIcon';
import { motion } from 'framer-motion'

function HeroCenter({
  desktopImage,
  mobileImage,
  title,
  subtitle,
  callToActionText,
  callToActionLink,
}) {
  const matches = useMediaQuery('(min-width:700px)');
  const subtitleClass = matches ? "headline-medium" : "body-large"
  const titleClass = matches ? "display-large" : "headline-large"

  const overlayVariants = {

    onscreen: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.5,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      }
    },
    offscreen: {
      y: "-100vh",
      opacity: 0
    }
  }
  const childVariants = {
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: 2 }
    },
    offscreen: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

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
            blurDataURL={`/_next/image?url=${mobileImage}&w=16&q=1`}
            priority={true}
          />
        }
        <GlassBackground
          as={motion.div}
          initial="offscreen"
          animate="onscreen"
          variants={overlayVariants}
        >
          <Content as={motion.div} variants={childVariants}>
            <h1 className={titleClass} >{title}</h1>
            <h2 className={subtitleClass} >{subtitle}</h2>
            <HeroBtnContainer >
              <PrimaryButton callToActionText={callToActionText} href={callToActionLink} variant="contained" />
            </HeroBtnContainer>
          </Content>
        </GlassBackground>
        <ScrollDownIconStyle />
      </HeroContainer>
    </>

  );
}

export default HeroCenter;
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
@media(max-width: 700px){ 
  height:500px;
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
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 56%, rgba(0,0,0,0.9) 100%);

position: absolute ;
top: 0; 
left: 0; 
z-index: 10; 
width: 100%;  
height: 100%;
display: flex ;
align-items: center; 
`
const Content = styled.div`
width: 100%; 
padding: 0 80px; 
display: flex; 
flex-direction: column; 
align-items: center; 
color: var( --sanger--theme--white); 
@media(max-width: 1366px){ 
  padding: 0 24px; 
}

h2{ 
  margin-top: 8px; 
  text-align: center; 
}
h1{ 
  text-align: center; 
}
`
const ScrollDownIconStyle = styled(ScrollDownIcon)`
  top: calc(100% - 56px ) !important; 
  @media(max-width: 600px){ 
    top: calc(100% - 40px ) !important; 

  } 
`