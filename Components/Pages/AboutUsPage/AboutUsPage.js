import React, { useState } from 'react'
import HeroCenter from '../../UI/Hero/HeroCenter'
import styled from 'styled-components'
import Image from 'next/image'
import Paragraph from '../../UI/Typography/Paragraph'
import Paper from '@mui/material/Paper';
import RowTitle from '../../UI/Typography/RowTitle'
import CircleSection from './CircleSection/CircleSection'
import ImageContentSection from '../../UI/Sections/ImageContentSection'
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

function AboutUsPage({ pageData }) {
    const matches = useMediaQuery('(max-width:700px)');
    const [entry, setEntry] = useState('')
    console.log(entry)
    // card animation 
    const teamContainerVariant = {
        onscreen: {
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.1,
                delayChildren: 0.3,
                staggerChildren: 0.1,
            }
        },
        offscreen: {
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        }
    }

    const teamImageVariant = {
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.3
            }
        },
        offscreen: {
            opacity: 0,
            scale: 0.9,
        }
    };

    const teamContentVariant = {
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

    // card animation 
    const iconContainerVariant = {
        onscreen: {
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
                delayChildren: 0.4,
                staggerChildren: 0.1,
            }
        },
        offscreen: {
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        }
    }

    const cardItemVariant = {
        onscreen: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        offscreen: {
            opacity: 0,
            y: 20,
            transition: { duration: 1 }
        }
    };
    const heroSection = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "hero_section_center_align") {
            return <HeroCenterStyle
                key={index}
                desktopImage={item.desktop_image.url}
                mobileImage={item.mobile_image.url}
                title={item.title}

            />
        }
    })
    const directorSection = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "image_content_section") {
            return <ImageContentSection
                key={index + 67}
                title={item.title}
                content={item.content}
                image={item.image}
                singleListRow={true} />
        }
    })
    // team sections 
    const teamSection = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "team_section_with_description") {
            return item.sections.map((data, i) => {
                return (
                    <div
                        className='team-wrapper' key={i + 52}>
                        <motion.div
                            as={motion.section}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.7, once: true }}
                            variants={teamContainerVariant}
                            className='flex-image-right'
                            style={{ flexDirection: data.image_alignment === "Right" ? "row-reverse" : "row" }}>
                            <motion.div
                                variants={teamImageVariant}
                                className="image-container">
                                <Image src={data.image.url} fill
                                    sizes="(min-width: 900px) 60vw,
                                    100vw"
                                    alt={data.name}
                                />
                            </motion.div>
                            <motion.div
                                variants={teamContentVariant}
                                className='content-wrapper'>
                                <h3 className='headline-medium'>{data.name}</h3>
                                <h4 className='headline-small'>{data.designation}</h4>
                                <Paragraph>{data.description}</Paragraph>
                            </motion.div>
                        </motion.div>
                    </div>
                )
            })
        }
    })

    const cardSection = pageData.acf.service_content.map((item, index) => {
        // team section cards
        if (item.acf_fc_layout === "team_section_cards") {
            return (
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.1, once: true }}
                    variants={iconContainerVariant}
                    className='max-width card-wrapper' key={index + 10}
                    onViewportEnter={() => setEntry("viewport entered")}
                    onViewportLeave={() => setEntry("viewport exit")}

                >
                    {
                        item.sections.map((data, i) => {
                            return (
                                <motion.div
                                    key={i + 23423}
                                    variants={cardItemVariant}
                                    className="surface elevation-light2"
                                >
                                    <div className="image-container">
                                        <Image src={data.image.url} fill

                                            alt={data.name}
                                        />
                                    </div>
                                    <div className='content-wrapper'>
                                        <h3 className='headline-medium'>{data.name}</h3>
                                        <h4 className='headline-small'>{data.designation}</h4>
                                    </div>
                                    <div className="yellow-brick" />
                                </motion.div>

                            )
                        })
                    }
                </motion.div>
            )
        }
    })

    const circleSection = pageData.acf.service_content.map((item, index) => {
        // team section cards
        if (item.acf_fc_layout === "circle_section") {
            return <CircleSection key={index + 200} data={item} />
        }
    })

    return (
        <>
            {heroSection}
            {directorSection}
            <TeamSection
            >
                <RowTitle title="Our Team" align="center" animation={true} />
                {teamSection}
            </TeamSection>
            <CardSection>
                {cardSection}
            </CardSection>
            {circleSection}
        </>
    )
}

export default AboutUsPage
const HeroCenterStyle = styled(HeroCenter)`
    height: 500px;
    img{ 
        object-position: middle;
    }
`

const TeamSection = styled.section`
padding: 120px 0 0 0; 
@media( max-width: 900px){ 
    padding: 40px 0 0 0; 
}
h2{ 
    margin-bottom: 40px; 
}
.team-wrapper{
   
    .flex-image-right{ 
    display: flex; 
    align-items: center; 
    @media(max-width: 900px){ 
        flex-wrap: wrap ;
    }
}
.image-container{ 
    position: relative;
    width: 50%; 
    height: 600px;
    @media( max-width: 900px){ 
    height: 400px; 
}   
@media( max-width: 500px){ 
    height: 350px; 
}
    img{ 
        object-fit: cover; 
    }
    @media(max-width: 900px){ 
        width: 100%; 
    }
}
.content-wrapper{ 
    width: 50%; 
    padding: 0 80px; 
    @media(max-width: 1366px){ 
        padding: 0 16px; 
    }
     @media(max-width: 900px){ 
        width: 100%; 
    }
    @media(max-width: 900px){ 
        padding: 16px 8px 56px 8px; 
    }
    h4{ 
        color: var(--sanger--theme--sys--light--on-surface-variant);
        margin-bottom: 16px; 
    }

}
}
`
const CardSection = styled.section`
.card-wrapper{ 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
gap: 40px; 
justify-content: center; 
align-items: center; 
margin-top: 80px; 
margin-bottom: 60px; 
@media(max-width: 1100px){ 
gap: 16px; 
grid-template-columns: 1fr 1fr ; 
}
@media(max-width: 700px){ 
grid-template-columns: 1fr; 
}

.surface{ 
    border-radius: 4px; 
    width: 100%;
    position: relative ;
 background: white; 
z-index:2; 
    .yellow-brick{ 
    position: absolute ;
    left: 0;
    bottom: 0; 
    z-index: -1;  
    width: 100%; 
    height: 8px; 
    background: var(--sanger--theme--sys--dark--secondary);
    border-radius: 0 0 4px 4px; 
}
}
}

.image-container{ 
    position:relative ;
    width: 100%; 
    height: 400px;

    overflow: hidden ;
    @media(max-width: 1500px){ 
        height: 350px; 
    }
    @media(max-width: 700px){ 
        height: 500px; 
    }
    @media(max-width: 500px){ 
        height: 300px; 
    }
    img{ 
        object-fit: cover; 
        object-position: top; 
        transition: .3s;
        transition-timing-function: ease-in-out;
        cursor: pointer; 
        &:hover{ 
            transform: scale(1.1); 
            
        }
    }
}
    .content-wrapper{ 
    text-align: center; 
    padding:  16px; 
    h4{ 
        color: var(--sanger--theme--sys--light--on-surface-variant);
    }
}
`
