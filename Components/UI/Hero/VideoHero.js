import React, { useState, useRef, useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { motion } from 'framer-motion'

function VideoHero({
    desktopVideo,
    mobileVideo,
    desktopImage,
    mobileImage,
    title,
    subtitle,
    callToActionText,
    callToActionLink,
}) {
    const [showVideo, setShowVideo] = useState(false)

    const matches = useMediaQuery('(min-width:700px)');
    const videoMatches = useMediaQuery('(max-width:550px)');

    // const titleClass = matches ? "headline-medium" : "headline-small"
    const subtitleClass = matches ? "headline-medium" : "headline-small"
    useEffect(() => {
        setTimeout(() => {
            setShowVideo(true)
        }, 2000)
    }, [])
    // animation variants 
    const heroContentVariant = {
        show: {
            scale: 1,
            top: "50%",
            left: "50%",
            opacity: 1,
            transform: "translate(-50%, -50%)",
            transition: {
                delay: 35,
                duration: 0.4,
                delayChildren: 35,
                staggerChildren: 0.1,
            },
        },
        hide: {
            scale: 0,
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0
        }
    }
    console.log(matches)
    console.log(heroContentVariant.show.transition)
    const heroContentItemsVariants = {
        show: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            y: 50,
        }
    }
    return (
        <Container>

            <div className='video-box'>
                <Image src={videoMatches ? mobileImage : desktopImage} fill alt={title} priority />
                {showVideo &&
                    <video loop autoPlay muted>
                        <source src={videoMatches ? mobileVideo : desktopVideo} type="video/mp4" />
                    </video>
                }
            </div>

            <motion.div
                initial="hide"
                animate={"show"}
                variants={heroContentVariant}
                className='content'>
                <motion.h1 variants={heroContentItemsVariants} className="display-large">{title}</motion.h1>
                <motion.h2 variants={heroContentItemsVariants} className={subtitleClass} >{subtitle}</motion.h2>
                <motion.div variants={heroContentItemsVariants} >
                    <PrimaryButton callToActionText={callToActionText} href={callToActionLink} variant="contained" />
                </motion.div>
            </motion.div>
        </Container>

    )
}

export default VideoHero

const Container = styled.div`
        position: relative ;
        top: 62px; 
        @media(max-width: 600px){ 
            top:56px;
        }

    .video-box{ 
       width: 100%; 
        padding-bottom: 56.25%; 
            position: relative ;
            @media(max-width: 600px){ 
                padding-bottom: 125%; 
        }
            img{ 
                width: 100%; 
                height: 100%; 
                object-fit: cover; 
             
            }
            video{ 
                width: 100%; 
            height: 100%; 
            position: absolute;
            }
        .hero-video{ 
           
            >div{ 
                @media(max-width: 550px){ 
                    padding: 0 0 125% 0 !important; 
                }
              
            }
        }

    }
    .content{ 
        position: absolute ;
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%) ;
        width: 100%;  
        z-index: 1; 
        color: white; 
        @media(max-width: 1366px){ 
            margin: 0 8px; 
        }
        h1{ 
            text-align: center; 
           @media(max-width: 350px){ 
            font-size: 2rem; 
            line-height: 2.5rem; 
           }
        }
        h2{ 
            font-weight: 300; 
            margin-top: 16px;
            text-align:center; 
            @media(max-width: 350px){ 
            font-size: 1.2rem; 
            line-height: 1.4rem; 
            margin-top: 8px; 
           }
        }
        button{ 
            margin-top: 24px; 
            margin-left: auto; 
            margin-right: auto; 
            display: block ;
            @media(max-width: 350px){ 
            margin-top: 16px; 
           }
        }
    }
`