import React from 'react'
import Card from '../../../UI/Card/Card'
import RowTitle from '../../../UI/Typography/RowTitle'
import Slider from "react-slick";
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import { motion } from 'framer-motion'

function Services({ servicesArr }) {
    const matches = useMediaQuery('(min-width:600px)');

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

    // card animation 
    const iconContainerVariant = {
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

    const serviceCards = servicesArr.service_content.map((data, index) => {
        if (matches) {
            return (
                <Grid md={4} sm={6} key={index} component={motion.div}
                    variants={cardItemVariant}>
                    <Card
                        title={data.service_name}
                        content={data.service_excerpt}
                        image={data.thumbnail.url}
                        callToActionText={data.call_to_action_text}
                        callToActionLink={`/services${data.call_to_action_link}`}
                    />
                </Grid >
            )
        }
        else {
            return (<CardStyle
                key={index}
                title={data.service_name}
                content={data.service_excerpt}
                image={data.thumbnail.url}
                callToActionText={data.call_to_action_text}
                callToActionLink={`/services${data.call_to_action_link}`}
            />)
        }



    })
    return (
        <Section className='max-width section-gutter'>
            <RowTitle title="Our Services" align="center" animation={true} />

            {matches ?
                <Grid
                    container
                    justifyContent="center"
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 3, md: 1, lg: 3 }}
                    sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}
                    as={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.4, once: true }}
                    variants={iconContainerVariant}

                >
                    {serviceCards}
                </Grid> :
                <SliderStyle {...settings} >
                    {serviceCards}
                </SliderStyle>
            }

        </Section >
    )
}

export default Services
const Section = styled.section`
margin-left: 0;
margin-right: 0; 
margin-bottom: 160px ; 
@media(max-width: 900px){ 
    margin-top: 120px ; 
    margin-bottom: 80px ; 
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