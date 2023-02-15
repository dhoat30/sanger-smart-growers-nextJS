import React, { useState } from 'react'
import styled from 'styled-components'
import RowTitle from '../../../UI/Typography/RowTitle'
import { Paper } from '@mui/material'
import Paragraph from '../../../UI/Typography/Paragraph'
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion'

function CircleSection({ data }) {
    const matches = useMediaQuery('(max-width:700px)');
    const [showBox, setShowBox] = useState({ index: null })
    // card animation 
    const paragraphVariant = {
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        offscreen: {
            opacity: 0,
            y: 50,
        }
    }
    // card animation 
    const circleContainerVariant = {
        onscreen: {
            transition: {
                type: "spring",
                duration: 0.3,
                delayChildren: 3,
                staggerChildren: 2,
            }
        },
        offscreen: {
            transition: {
            }
        }
    }
    const circleItemVariant = {
        onscreen: {
            opacity: 1,
            transition: { delay: 0.2 }
        },
        offscreen: {
            opacity: 0,
            transition: { duration: 1 }
        }
    };

    const circles = data.circle_content.map((item, index) => {
        let circleSize, zIndex, backgroundColor, zIndexContent
        if (index === 0) {
            circleSize = "200px"
            zIndex = 10
            backgroundColor = "rgba(242, 192, 0, 1)"
            zIndexContent = 9
        }
        if (index === 1) {
            circleSize = "300px"
            zIndex = 4
            backgroundColor = "#FFD63D"
            zIndexContent = 3
        }
        if (index === 2) {
            circleSize = "400px"
            zIndex = 2
            backgroundColor = "#FFE584"
            zIndexContent = 1
        }

        return <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={circleContainerVariant}
            viewport={{ margin: "600px 0px 0px 0px", once: true }}
            className='graphic-wrapper'
            key={index}>
            <Circle as={motion.div}
                variants={circleItemVariant}
                onMouseLeave={() => setShowBox({ index: null })}
                onMouseEnter={e => setShowBox({ index: index })}
                circlesize={circleSize}
                zindex={zIndex}
                backgroundcolor={backgroundColor}>
                <div className='label'>{item.label}</div>
            </Circle>
            {showBox.index === index && !matches ?
                <Paper
                    sx={{ zIndex: zIndexContent, background: backgroundColor }}
                    className='content-wrapper'
                    elevation={1}>
                    <span className='content'>{item.content}</span>
                    <span className='pin-overflow-container'></span>
                </Paper>
                : null
            }

        </motion.div>
    })


    return (
        <CircleSectionStyle >
            <div className='title-wrapper max-width'>
                <RowTitle title={data.title} align="center" animation="true" />
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 1, once: true }}
                    variants={paragraphVariant}
                >
                    <Paragraph className="paragraph" align="center">{data.content}</Paragraph>
                </motion.div>
            </div>
            <div className='circle-wrapper '>
                {circles}
            </div>
        </CircleSectionStyle >
    )
}

export default CircleSection
const CircleSectionStyle = styled.section`
    padding-top: 120px; 
    padding-bottom: 40px; 
    background: var(--sanger--theme--white);
    @media(max-width: 900px){ 
        padding-top: 40px; 
    }
    .title-wrapper{ 
        max-width: 900px; 
        margin: 0 auto; 
        .paragraph{ 
            margin-top: 24px; 
        }
    }
    .circle-wrapper{ 
        position: relative;
        width: 100%; 
        padding: 240px 0; 
        cursor: pointer; 
        .graphic-wrapper{ 
            position: relative;
            width: 400px;
            margin: 0 auto;
            
            @media(max-width: 1000px){ 
                margin: 0 8px 0 8px;
            }
            @media(max-width: 700px){ 
                margin: 0 auto 0 auto;
            }
            .content-wrapper{ 
                position: absolute ;
                left: 500px; 
                /* background: var(--sanger--theme--sys--dark--secondary) ; */
                width: 300px; 
                top: -70px; 
                height: 150px; 
              
                padding: 16px;
                @media(max-width: 1350px){ 
                    left: 420px; 
            }
             @media(max-width: 1120px){ 
                width: 250px; 
                height: 200px; 
                top: -100px; 
            }
               
                &:before{ 
                    content:"" ;
                    position:absolute;
                    width: 300px; 
                    height: 1px; 
                    background: black;
                    left: -300px;
                    top: 50%;
               
                }
            }
        }   
        
    }
`
const Circle = styled.div`

             position: absolute;
            background: ${props => props.backgroundcolor && props.backgroundcolor}; 
            border-radius: 50%;  
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            display: flex ;
            align-items: flex-start; 
            justify-content: center; 
            width: ${props => props.circlesize && props.circlesize}; 
            height: ${props => props.circlesize && props.circlesize}; 
            z-index: ${props => props.zindex && props.zindex}; 
            .label{ 
                position: relative ;
                top: 20px; 
            }
`