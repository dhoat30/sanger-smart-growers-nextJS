import React from 'react'
import HeroJustImage from '../../UI/Hero/HeroJustImage'
import RowTitle from '../../UI/Typography/RowTitle'
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import Card from '../../UI/Card/Card';
import styled from 'styled-components';
import ImageContentSection from '../../UI/Sections/ImageContentSection';
import Paragraph from '../../UI/Typography/Paragraph';
import Image from 'next/image';
import { motion } from 'framer-motion';

function WorkWithUsPage({ pageData }) {
    // slider settings 
    var settings = {
        // dots: true,
        className: "slider variable-width",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        infinite: false,
        useTransform: false,
        dots: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "32px",
                }
            },
            {
                breakpoint: 350,
                settings: {
                    centerPadding: "0",
                }
            }
        ]
    };
    const matches = useMediaQuery('(min-width:600px)');


    // animation variations 
    const containerVariants = {
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
    }

    // card animation 
    const cardContainerVariant = {
        onscreen: {
            transition: {
                type: "spring",
                bounce: 0,
                duration: 2,
                delayChildren: 0.7,
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

    const sections = pageData.acf.service_content.map((data, index) => {

        if (data.acf_fc_layout === "hero_section_just_image") {
            return (
                <HeroJustImage
                    key={index}
                    desktopImage={data.desktop_image.url}
                    mobileImage={data.mobile_image.url}
                    alt={data.desktop_image.alt}
                />
            )
        }
        else if (data.acf_fc_layout === "cards") {
            // {/* check if the breakpoint is 600px to show carousel */}
            if (matches) {
                return (
                    <CardSection key={index}>
                        <div className='max-width'>
                            <RowTitle title="Seasonal Work" align="center" animation={true} />
                            <Grid
                                as={motion.div}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ amount: 0.4, once: true }}
                                variants={cardContainerVariant}
                                container
                                justifyContent="center"
                                rowSpacing={3}
                                columnSpacing={{ xs: 1, sm: 3, md: 1, lg: 3 }}
                                sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}>
                                {/* nest map to create cards */}
                                {data.card.map((item, i) => {
                                    return (
                                        <Grid md={4} sm={6} key={i} component={motion.div}
                                            variants={cardItemVariant}>
                                            <Card
                                                align="center"
                                                title={item.title}
                                                content={item.content}
                                                image={item.image.url}
                                                callToActionText={item.call_to_action_text}
                                                callToActionLink={`${item.call_to_action_link}`}
                                                buttonVariant="contained"
                                            />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    </CardSection>
                )
            }
            else {
                return (
                    <CardSection key={index}>
                        <div className='max-width'>
                            <RowTitle title="Seasonal Work" align="center" />
                            <SliderStyle {...settings} >
                                {/* nest map to create cards */}
                                {data.card.map((item, i) => {
                                    return (
                                        <CardStyle
                                            key={i}
                                            align="center"
                                            title={item.title}
                                            content={item.content}
                                            image={item.image.url}
                                            callToActionText={item.call_to_action_text}
                                            callToActionLink={`${item.call_to_action_link}`}
                                            buttonVariant="contained"
                                        />
                                    )
                                })}
                            </SliderStyle>

                        </div>
                    </CardSection>
                )
            }

        }
        else if (data.acf_fc_layout === "image_content_section") {
            return <ImageContentSectionStyle
                key={index}
                title={data.title}
                content={data.content}
                image={data.image}
                imageAlignment={data.image_alignment}
                backgroundColor={data.background_color}
            />
        }

        else if (data.acf_fc_layout === "image_content_section_row") {
            return (
                <RowSection key={index}>
                    <motion.div
                        className='max-width content'
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.6, once: true }}
                        variants={containerVariants}
                    >
                        <h3 className='headline-large'>{data.title}</h3>
                        <Paragraph >{data.content}</Paragraph>
                    </motion.div>
                    <div className='image-container'>
                        <Image src={data.image.url} fill alt={data.image.alt ? data.image.alt : data.title} />
                    </div>
                </RowSection>
            )
        }
    })

    return (
        <>
            {sections}
        </>
    )
}

export default WorkWithUsPage

const CardSection = styled.section`
background: var(--sanger--theme--white);
                        padding: 40px 8px 0 8px;
                    border-radius: 32px 32px 0 0; 
                    
                    position: relative;
                    top: -32px; 
                    margin-bottom: -32px; 
                    @media(max-width: 600px){ 
    padding-top: 0; 
    padding-bottom: 0;
}

.max-width { 
   padding-top: 40px;
   padding-bottom: 40px;  

}
`

const CardStyle = styled(Card)`
margin: 0 10px; 
height: auto; 
`
const SliderStyle = styled(Slider)`
    margin-top: 24px; 
    .slick-slide{ 
        position: relative ;
        top: -1px; 
    }
`

const ImageContentSectionStyle = styled(ImageContentSection)`
    @media(max-width: 600px){ 
        padding: 40px 0; 
    }
    .content{ 
        @media(max-width: 600px){ 
       top: 0; 
    }
}
    .image-container{ 
        @media(max-width: 600px){ 
      padding: 0 8px; 
      display: block ;
    }
    }
    
`

const RowSection = styled.section`
padding-top: 80px;
@media(max-width: 600px){ 
    padding-top: 40px; 
}
background: linear-gradient(179.15deg,#010101 0.73%,#050102 95.84%);
.content{ 
    max-width: 900px; 
    padding-bottom: 40px;  

    @media(min-width: 900px){ 
        margin: 0 auto; 
    }
    h3{ 
    color:  var(--sanger--theme--white);
    font-weight: 500;
    text-align: center; 
}
p{ 
    color:  var(--sanger--theme--white);
    text-align: center; 
    margin-top: 16px; 
    font-weight: 300; 
}
}
.image-container{ 
    position: relative;
    width: 100%; 
    height: 50vh; 
    img{ object-fit: cover; }
}
`