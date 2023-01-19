import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import RowTitle from '../Typography/RowTitle'
import PrimaryButton from '../Buttons/PrimaryButton'
import Paragraph from '../Typography/Paragraph'
import ColumnTitle from '../Typography/ColumnTitle'
import useMediaQuery from '@mui/material/useMediaQuery';

function ImageContentSection({ title, content, image, link, linkText, backgroundColor, imageAlignment }) {
    const matches = useMediaQuery('(min-width:900px)');

    let imageHeight

    if (matches) {
        imageHeight = (image.height / image.width * 100) / 2
    }
    else {
        imageHeight = (image.height / image.width * 100)
    }

    return (
        <Section backgroundcolor={backgroundColor} imagealignment={imageAlignment} >
            <div className="container max-width">
                <div className='image-container'>
                    <Image src={image.url} width={500}
                        height={500}
                        style={{
                            width: '100%',
                            height: 'auto',
                            margin: "0 auto 0 auto",
                            display: "block"
                        }}
                        alt={image.alt} />
                </div>
                <div className='content'>
                    <ColumnTitle>{title}</ColumnTitle>
                    <Paragraph >{content}</Paragraph>
                    {link && <PrimaryButton variant="contained" callToActionText={linkText} href={link} />
                    }
                </div>
            </div>
        </Section>
    )
}

export default ImageContentSection
const Section = styled.section`
background:  ${props => props.backgroundcolor === "White" && "var(--sanger--theme--white)"};

.container{ 
    margin: 40px 0; 
    display: flex;
padding-top: 120px; 
padding-bottom: 120px; 
align-items: flex-start; 
flex-direction: ${props => props.imagealignment === "Right" ? "row-reverse" : null};
@media(max-width: 600px){ 
    flex-wrap: wrap ;
    padding-top: 0; 
    margin:  24px 0;
    padding-bottom: 0; 
}
}

    .image-container{ 
        position: relative ;
        width: 50%; 
        @media(max-width: 600px){ 
   width: 100%; 
}
        img{ 
            object-fit: contain; 
        }
    }

    .content { 
        width: 50% ;
      padding: 0 80px;
      position: sticky ;
      top: 120px; 
      @media(max-width: 900px){ 
        padding: 0 16px;

      }
      @media(max-width: 600px){ 
        background:  ${props => props.backgroundcolor === "White" && "var(--sanger--theme--white)"};
            width: 100%; 
                        width: 100%; 
                        padding: 40px 8px 0 8px;
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