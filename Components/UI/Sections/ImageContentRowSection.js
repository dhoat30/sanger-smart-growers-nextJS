import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import RowTitle from '../Typography/RowTitle'
import PrimaryButton from '../Buttons/PrimaryButton'
import Paragraph from '../Typography/Paragraph'
import ColumnTitle from '../Typography/ColumnTitle'
import useMediaQuery from '@mui/material/useMediaQuery';

function ImageContentRowSection({ title, content, image, link, linkText }) {
    const matches = useMediaQuery('(min-width:1000px)');

    let imageHeight

    if (matches) {
        imageHeight = (image.height / image.width * 100) / 2
    }
    else {
        imageHeight = (image.height / image.width * 100)
    }

    return (
        <Container>
            <div className='image-container' style={{ paddingBottom: `${imageHeight}%` }}>
                <Image src={image.url} fill={true} alt={image.alt} />
            </div>
            <div className='content'>
                <ColumnTitle>{title} </ColumnTitle>
                <Paragraph >{content} </Paragraph>
                {link && <PrimaryButton variant="contained" callToActionText={linkText} href={link} />
                }            </div>

        </Container>
    )
}

export default ImageContentRowSection
const Container = styled.div`
display: flex;
@media(max-width: 1000px){ 
            margin-top: 8px; 
        }
@media(max-width: 1000px){ 
           flex-wrap: wrap; 
        }
align-items: center; 
    .image-container{ 
        position: relative ;
        width: 50%; 
        @media(max-width: 1000px){ 
            width: 100%; 
        }
        img{ 
            object-fit: contain; 
          
        }
    }

    .content { 
        width: 50% ;
      padding: 0 80px;
        @media(max-width: 1000px){ 
            width: 100%; 
            padding: 40px 80px 40px 80px;
        background: var(--sanger--theme--white); 
        border-radius: 32px; 
        position: relative;
        top: -32px; 
        }
        @media(max-width: 500px){ 
        padding: 40px 8px 40px 8px;

    }
        p{ 
            margin-top: 16px; 
        }
        button{ 
            margin-top: 16px; 
        }
    }
`