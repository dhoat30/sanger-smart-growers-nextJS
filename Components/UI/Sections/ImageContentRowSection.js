import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/PrimaryButton'
import Paragraph from '../Typography/Paragraph'
import ColumnTitle from '../Typography/ColumnTitle'
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion'

function ImageContentRowSection({ title, content, image, link, linkText }) {
    const matches = useMediaQuery('(min-width:1000px)');

    let imageHeight

    if (matches) {
        imageHeight = (image.height / image.width * 100) / 2
    }
    else {
        imageHeight = (image.height / image.width * 100)
    }

    // card animation 
    const containerVariant = {
        onscreen: {
            transition: {
                bounce: 0,
                staggerChildren: 0.3,
            }
        },
        offscreen: {
            transition: {
                ease: "easeInOut",
                bounce: 0,
                duration: 0.3
            }
        }
    }
    const imageVariant = {
        onscreen: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.3
            }
        },
        offscreen: {
            opacity: 0,
            x: "-100%",
            scale: 0.5,

        }
    };
    const contentVariant = {
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3
            }
        },
        offscreen: {
            opacity: 0,
            y: 50,
        }
    };
    return (
        <Container as={motion.section}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 1, once: true }}
            variants={containerVariant}
        >
            <motion.div variants={imageVariant} className='image-container' style={{ paddingBottom: `${imageHeight}%` }}>
                <Image src={image.url} fill={true} alt={image.alt} />
            </motion.div>
            <motion.div variants={contentVariant} className='content'>
                <ColumnTitle>{title}</ColumnTitle>
                <Paragraph >{content}</Paragraph>
                {link && <PrimaryButton variant="contained" callToActionText={linkText} href={link} />
                }            </motion.div>

        </Container>
    )
}

export default ImageContentRowSection
const Container = styled.section`
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