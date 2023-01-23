import React from 'react'
import Card from '../../../UI/Card/Card'
import RowTitle from '../../../UI/Typography/RowTitle'
import Slider from "react-slick";
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';

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

    const serviceCards = servicesArr.service_content.map((data, index) => {
        if (matches) {
            return (
                <Grid md={4} sm={6} key={index}>
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

            <RowTitle title="Our Services" align="center" />

            {matches ?
                <Grid container justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 3, md: 1, lg: 3 }} sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}>
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