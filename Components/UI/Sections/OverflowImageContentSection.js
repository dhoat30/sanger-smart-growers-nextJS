import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import RowTitle from '../Typography/RowTitle'
import PrimaryButton from '../Buttons/PrimaryButton'
import Paragraph from '../Typography/Paragraph'
import ColumnTitle from '../Typography/ColumnTitle'
import useMediaQuery from '@mui/material/useMediaQuery';

function OverflowImageContentSection({ title, content, image, link, linkText, imageAlignment, backgroundColor }) {
    const matches = useMediaQuery('(min-width:900px)');
    if (!image) {
        return
    }
    let imageHeight
    console.log(image)
    if (matches) {
        imageHeight = (image.height / image.width * 100) / 2
    }
    else {
        imageHeight = (image.height / image.width * 100)
    }

    return (
        <Section backgroundColor={backgroundColor}>
            <Container className={`${matches && "max-width"}`} imagealignment={imageAlignment} >
                <div className='image-container' style={{ paddingBottom: `${imageHeight}%` }}>
                    <Image src={image.url} fill={true} alt={image.alt} />
                </div>
                <div className='content' imagealignment={imageAlignment}>
                    <ColumnTitle>{title}</ColumnTitle>
                    <Paragraph >{content}</Paragraph>
                    {link && <PrimaryButton variant="contained" callToActionText={linkText} href={link} />
                    }
                </div>

            </Container>
        </Section>

    )
}

export default OverflowImageContentSection
const Section = styled.section`
background-color: ${props => props.backgroundColor === "White" && "var(--sanger--theme--white)"}; 
margin-bottom: 240px; 
@media(max-width: 900px){ 
    margin-bottom: 40px;
}
`
const Container = styled.div`
display: flex;

flex-direction: ${props => props.imagealignment === "Right" ? "row-reverse" : "row"}; 

@media(max-width: 900px){ 
            margin-top: 8px; 
        }
@media(max-width: 900px){ 
           flex-wrap: wrap; 
        }
        align-items: flex-start; 
justify-content: space-between; 
    .image-container{ 
        position: relative ;
        bottom: -120px; 
        width: 50%; 
        @media(max-width: 900px){ 
            width: 100%; 
            bottom: 0; 
        }
        img{ 
            object-fit: contain; 
          
        }
    }

    .content { 
        margin-top: 136px;
        width: 50% ;
        position: sticky ;
        top: 120px; 
       margin-bottom: 24px; 
       padding: ${props => props.imagealignment === "Right" ? "0 120px 0 80px" : "0 80px 0 80px"}; 
      @media(max-width: 1366px){
        padding: 0 40px 0 40px;

      } 
        @media(max-width: 900px){ 
            margin-top: 0;
            width: 100%; 
            padding: 40px 8px 10px 8px;
        background: var(--sanger--theme--white); 
        border-radius: 32px; 
        position: relative;
        top: -48px; 
        margin-bottom: 0; 
        }
     
        p{ 
            margin-top: 16px; 
        }
        button{ 
            margin-top: 16px; 
        }
    }
`