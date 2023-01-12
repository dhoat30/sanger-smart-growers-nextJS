import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';

function TechCarousel({ logoArr }) {
    var settings = {
        // dots: true,
        className: "slider variable-width",

        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        infinite: true,
        useTransform: false,
        variableWidth: true,
        centerMode: true,


    };
    const carousel = logoArr.map(data => {
        return (
            <Card key={data.company_logo.ID}>
                <Image src={data.company_logo.url} width={150} height={54} alt={data.company_logo.title} />
            </Card>
        )
    })
    return (
        <Container className='max-width'>
            <h6 className='display-medium '>We work with trusted industry leaders </h6>
            <Slider {...settings} >
                {carousel}
            </Slider>
        </Container>

    )
}

export default TechCarousel
const Container = styled.section`
overflow: hidden; 
 padding: 56px 0; 
    .slick-slider{ 
        margin-top: 32px; 
    }
`
const Card = styled.div`
    margin: 0 10px; 
`