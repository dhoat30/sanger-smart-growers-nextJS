import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import RowTitle from '../Typography/RowTitle'
import PrimaryButton from '../Buttons/PrimaryButton'
import Paragraph from '../Typography/Paragraph'
import ColumnTitle from '../Typography/ColumnTitle'
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion'

function OverflowImageContentSection({ title, content, image, link, linkText, imageAlignment, backgroundColor }) {
    const matches = useMediaQuery('(min-width:900px)');
    if (!image) {
        return
    }
    let imageHeight
    if (matches) {
        imageHeight = (image.height / image.width * 100) / 2
    }
    else {
        imageHeight = (image.height / image.width * 100)
    }
    const containerVariants = {
        onscreen: {
            transition: {
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
            }
        },
        offscreen: {

        }
    }

    const imgVariants = {
        onscreen: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.5
            }
        },
        offscreen: {
            opacity: 0,
            scale: 0.9,
            y: 50
        }
    };
    const contentVariants = {
        onscreen: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.8 }
        },
        offscreen: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.3 }
        }
    };
    return (
        <Section
            backgroundColor={backgroundColor}
        >
            <Container
                as={motion.div}
                className={`${matches && "max-width"}`}
                imagealignment={imageAlignment}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.7, once: true }}
                variants={containerVariants}
            >
                <motion.div variants={imgVariants}
                    className='image-container'
                    style={{ paddingBottom: `${imageHeight}%` }}
                >
                    <Image

                        src={image.url}
                        fill
                        alt={image.alt ? image.alt : title}
                        sizes="(max-width: 900px) 100vw,
                                100vw"
                    />
                </motion.div>
                <motion.div
                    className='content'
                    imagealignment={imageAlignment}
                    variants={contentVariants}
                >
                    <ColumnTitle>{title}</ColumnTitle>
                    <Paragraph >{content}</Paragraph>
                    {link && <PrimaryButton variant="contained" callToActionText={linkText} href={link} />
                    }
                </motion.div>

            </Container>
        </Section >

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