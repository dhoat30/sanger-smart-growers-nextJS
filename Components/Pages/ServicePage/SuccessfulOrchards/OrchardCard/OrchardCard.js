import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery';

function OrchardCard({ image, title, subtitle, location, size, stage }) {
    const [showInfo, setShowInfo] = useState(false)
    const matches = useMediaQuery('(min-width:900px)');
    let containerVariants
    if (matches) {
        containerVariants = {
            onMouseEnter: {
                x: 0,
                transition: {
                    ease: "easeInOut",
                    duration: 0.3,
                }
            },
            onMouseLeave: {
                x: "100%",
                transition: {
                    ease: "easeInOut",
                    duration: 0.3,
                }
            }
        }
    }


    return (
        <CardWrapper>
            <div
                className='image-wrapper'
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                <Image
                    src={image}
                    fill
                    alt={title}
                    sizes="(max-width: 768px) 100vw,,
                50vw"
                />
            </div>

            <motion.div className='content-wrapper'
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
                animate={showInfo ? "onMouseEnter" : "onMouseLeave"}
                variants={containerVariants}
            >
                <div className='content'>
                    <h2 className='headline-large'>{title}</h2>
                    <h3 className='headline-small'>{subtitle}</h3>
                    <h4 className='body-large flex'>
                        <span>Location:</span>
                        <span>{location}</span>
                    </h4>
                    <h4 className='body-large flex'>
                        <span>Size:</span>
                        <span>{size}</span>
                    </h4>
                    <h4 className='body-large flex'>
                        <span>Stage:</span>
                        <span>{stage}</span>
                    </h4>
                </div>
            </motion.div>
        </CardWrapper>
    )
}

export default OrchardCard

const CardWrapper = styled.div`
  width: 100%; 
  overflow: hidden;

    position: relative;
.image-wrapper{ 
    width: 100%; 
    height: 70vh;
    position: relative;
    @media(max-width: 900px){ 
        height: 80vh;
    }
    img{ 
        object-fit: cover; 
        filter: contrast(120%);
filter: saturate(130%);
    }
}
.content-wrapper{ 
    background: radial-gradient(98.05% 98.05% at 1.89% 1.95%, rgba(0, 0, 0, 0.42) 0%, rgba(81, 90, 2, 0.06) 100%);
        backdrop-filter: blur(10px);
        position: absolute;
        top: 0; 
        right: 0; 
        width: 50%; 
        height: 100%;
        display: flex;
        align-items: flex-end; 
        @media(max-width: 900px){ 
            bottom: 0; 
            width: 100%; 
            height: 350px; 
            top: auto; 
        }
        .content{ 
            padding: 0 16px 80px 16px; 
            @media(max-width: 900px){ 
                padding: 0 16px 32px 16px; 

        }
            color: white; 
            h3{ 
            margin: 8px 0 24px 0;  
            }

            .flex{ 
                display: flex;
                justify-content: space-between;
                margin: 16px 0; 
            }
        }
}
`