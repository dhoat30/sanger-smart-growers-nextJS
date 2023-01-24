import React from 'react'
import HeroJustImage from '../../UI/Hero/HeroJustImage'
import RowTitle from '../../UI/Typography/RowTitle'
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import Card from '../../UI/Card/Card';
import styled from 'styled-components';
import ImageContentSection from '../../UI/Sections/ImageContentSection';
import { Typography } from '@mui/material';
import Paragraph from '../../UI/Typography/Paragraph';
import Image from 'next/image';

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
    console.log(pageData.acf.service_content)
    const matches = useMediaQuery('(min-width:600px)');

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
                            <RowTitle title="Seasonal Work" align="center" />
                            <Grid container justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 3, md: 1, lg: 3 }} sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}>
                                {/* nest map to create cards */}
                                {data.card.map((item, i) => {
                                    return (
                                        <Grid md={4} sm={6} key={i}>
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
            console.log(data)
            return (
                <RowSection>
                    <div className='max-width content'>
                        <h3 className='headline-large'>{data.title}</h3>
                        <Paragraph>{data.content}</Paragraph>
                    </div>
                    <div className='image-container'>
                        <Image src={data.image.url} fill />
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
padding-top: 40px; 
background: linear-gradient(179.15deg,#010101 0.73%,#050102 95.84%);
.content{ 
    max-width: 900px; 

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