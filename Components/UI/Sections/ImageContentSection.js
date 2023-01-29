import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/PrimaryButton'
import Paragraph from '../Typography/Paragraph'
import ColumnTitle from '../Typography/ColumnTitle'
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion'

function ImageContentSection({ title, content, image, link, linkText, backgroundColor, imageAlignment, className }) {
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
                type: "spring",
                bounce: 0,
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
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        offscreen: {
            opacity: 0,
            scale: 0.7,
            y: 20,
            transition: { duration: 0.2 }
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
            transition: { duration: 0.2 }
        }
    };

    return (
        <Section className={className} backgroundColor={backgroundColor} imageAlignment={imageAlignment} >
            <motion.div
                className="container max-width"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.6, once: true }}
                variants={containerVariants}>

                <motion.div className='image-container' variants={imgVariants} >
                    <Image src={image.url} width={500}
                        height={500}
                        style={{
                            width: '100%',
                            height: 'auto',
                            margin: "0 auto 0 auto",
                            display: "block"
                        }}
                        alt={image.alt ? image.alt : title} />
                </motion.div>

                <motion.div className='content' variants={contentVariants}>
                    <ColumnTitle>{title}</ColumnTitle>
                    <Paragraph >{content}</Paragraph>
                    {link && <PrimaryButton variant="contained" callToActionText={linkText} href={link} />
                    }
                </motion.div>

            </motion.div>
        </Section>
    )
}

export default ImageContentSection
const Section = styled.section`
background:  ${props => props.backgroundColor === "White" && "var(--sanger--theme--white)"};

.container{ 
    margin-top: 40px;
    margin-bottom: 40px;  
    display: flex;
padding-top: 120px; 
padding-bottom: 120px; 
align-items: flex-start; 
flex-direction: ${props => props.imageAlignment === "Right" ? "row-reverse" : null};
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
                    padding: 16px 8px 0 8px;
                    border-radius: 32px; 
                    position: relative;
                    top: 0; 
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