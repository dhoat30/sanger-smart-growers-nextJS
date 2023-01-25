import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../Typography/ColumnTitle'
import Paragraph from '../Typography/Paragraph'
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion'
function TwoImageSection({ title, content, backgroundImage, frontImage, imageText, callToActionText, callToActionLink, hideImageOnMobile }) {
    const matches = useMediaQuery('(min-width:900px)');
    console.log(callToActionText)
    return (
        <>
            {matches ?
                <Container style={{ background: "var( --sanger--theme--white) " }}>
                    <TwoColumns className='grid max-width'>
                        {/* <div className='first-image-container'>
                            <Image fill={true} src={backgroundImage.url} alt={backgroundImage.alt ? backgroundImage.alt : "Background Image"} sizes="50vw" />
                        </div>
                        <Overlay></Overlay> */}

                        <div className="second-image-container">
                            <Image src={frontImage.url} fill alt={frontImage.alt ? frontImage.alt : "front image"} sizes="50vw" />
                        </div>
                        <Paper elevation={2} className='image-text'>
                            <div>
                                <h6 className="display-large">{imageText} </h6>
                                <p className="headline-medium"> Years of Experience</p>
                                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.5537 17.3536L37.2505 17.3536L37.2505 30.9454M18.0705 36.3866L37.0587 17.544" stroke="#241A00" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Paper>
                        <ContentColumn>
                            <ColumnTitle align="left"> {title} </ColumnTitle>
                            <Paragraph >{content}</Paragraph>
                            {callToActionText &&
                                <PrimaryButton variant="contained" callToActionText={callToActionText} href={callToActionLink} />

                            }
                        </ContentColumn>
                    </TwoColumns>

                </Container>
                :
                <MobileContainer>
                    {!hideImageOnMobile
                        &&
                        <MobileImageContainer>
                            <Image
                                src={frontImage.url}
                                alt={frontImage.alt ? frontImage.alt : "front image"}
                                fill={true}
                                sizes="100vw"
                            />
                        </MobileImageContainer>
                    }

                    <Content>
                        <ColumnTitle variant="medium">{title} </ColumnTitle>
                        <Paragraph>{content}</Paragraph>
                        {callToActionText &&
                            <PrimaryButton variant="contained" callToActionText={callToActionText} href={callToActionLink} />

                        }
                    </Content>
                </MobileContainer>
            }
        </>
    )
}

export default TwoImageSection
const Container = styled.section`
display: flex ;
align-items: flex-end; 
margin-top: 120px; 
margin-bottom: -80px; 
`
const TwoColumns = styled.div`
position: relative ;
top: -80px; 

.second-image-container{  
    position: relative;
    grid-column: 1/7;
    grid-row: 1/10;
    img { 
        filter: saturate(130%);
        width: 100%; 
        height: 100%;
        object-fit: cover; 
        object-position: 100% 100%;
    }
}

.image-text{ 
    background: var(--sanger--theme--sys--light--secondary-container);
    
    grid-column: 5/7;
    grid-row: 7/10;
    position: relative;
     left: 60px; 
   top: 60px;
    padding: 20px 20px; 
    border-radius: 4px; 
    display:flex; 
    align-items: center; 
    @media(max-width: 1200px){ 
        grid-column: 4/7;
    }
    svg{ 
        position: absolute ;
        right: 0; 
        top: 0; 
    }
}
`

const ContentColumn = styled.div`
position: sticky ;
top: 90px;
        grid-column: 9/13;
grid-row: 3/7;
   width: 100%; 
   a{ 
    margin-top: 16px; 
    display: inline-block ;
   }
   @media(max-width: 1200px){ 
    grid-row: 5/13;
   }
   p{ 
    margin-top: 16px; 
   }
`

// mobile css 
const MobileContainer = styled.section`
margin-top: 80px; 

`
const MobileImageContainer = styled.div`
position: relative;
width: 100%; 
height: 500px; 
img{ 
object-fit: cover; 
        filter: saturate(130%);
}
`

const Content = styled.div`
    border-radius: 32px; 
    position: relative ;
    top: -32px; 
    background: var(--sanger--theme--white) ;
    padding: 40px 80px 40px 80px;
    margin: 0 auto ;
    @media(max-width: 500px){ 
        padding: 40px 8px 40px 8px;

    }
    button{ 
        margin-top: 16px; 
    }
`