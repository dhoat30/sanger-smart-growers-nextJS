import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../Typography/ColumnTitle'
import Paragraph from '../Typography/Paragraph'
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';

function TwoImageSection({ title, content, backgroundImage, frontImage, imageText, callToActionText, callToActionLink, hideImageOnMobile }) {
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <>
            {matches ?
                <Container style={{ background: "var( --sanger--theme--white) " }}>
                    <TwoColumns className='grid max-width'>
                        <div className='first-image-container'>
                            <Image fill={true} src={backgroundImage.url} alt={backgroundImage.alt ? backgroundImage.alt : "Background Image"} sizes="50vw" />
                        </div>
                        <Overlay></Overlay>
                        <div className='image-text'>
                            <h6 className="display-large">{imageText} </h6>
                            <p className="label-medium"> Years of Experience</p>
                            <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5537 17.3536L37.2505 17.3536L37.2505 30.9454M18.0705 36.3866L37.0587 17.544" stroke="#241A00" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="second-image-container">
                            <Image src={frontImage.url} fill={true} alt={frontImage.alt ? frontImage.alt : "front image"} sizes="50vw" />
                        </div>
                        <ContentColumn>
                            <ColumnTitle align="left"> {title} </ColumnTitle>
                            <Paragraph >{content}</Paragraph>
                            <PrimaryButton variant="contained" callToActionText={callToActionText} href={callToActionLink} />
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
                        <PrimaryButton variant="contained" callToActionText={callToActionText} href={callToActionLink} />
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
margin-top: 240px; 
margin-bottom: -120px; 
`
const TwoColumns = styled.div`
position: relative ;
top: -120px; 
.first-image-container{ 
    grid-column: 1/6;
    grid-row: 1/8;
}
.second-image-container{ 
    grid-column: 3/8;
    grid-row: 5/12;
    img { 
        filter: saturate(130%);
    }
}
 >div{ 
    position: absolute;
    width: 100%; 
    height: 100%;
    img{ 
        object-fit: cover; 
        object-position: 100% 100%;
    }
}
.image-text{ 
    background: var(--sanger--theme--sys--light--secondary-container);
    grid-column: 2/4;
    grid-row: 4/6;
    position: relative;
    left: 60px; 
    top: 10px;
    display: flex; 
    padding: 20px 20px; 
 
    width: 250px; 
    p{ 
        margin: 5px 0 10px 20px; 
    }
    svg{ 
        position: absolute ;
        right: 0; 
        top: 0; 
    }
}
`
const Overlay = styled.div`
    background-color: rgba(61,61,61, 0.7);
    grid-column: 1/6;
    grid-row: 1/8;
`

const ContentColumn = styled.div`
        grid-column: 9/13;
   grid-row: 6/13;
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