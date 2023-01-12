import React from 'react'
import styled from 'styled-components'
import Card from '../../UI/Card/Card'
import IconCard from '../../UI/Card/IconCard'
import Hero from '../../UI/Hero/Hero'
import HeroGlassMorphism from '../../UI/Hero/HeroGlassMorphism'
import ParallaxImage from '../../UI/Images/ParallaxImage'
import TwoImageSection from '../../UI/Sections/TwoImageSection'
import Grid from '@mui/material/Unstable_Grid2';
import RowTitle from '../../UI/Typography/RowTitle'
import OverflowImageContentSection from '../../UI/Sections/OverflowImageContentSection'

function ServicePage({ servicesData }) {

    console.log(servicesData.all_fields.service_content)
    const serviceContent = servicesData.all_fields.service_content.map((data, index) => {
        if (data.acf_fc_layout === "hero_section_with_glass_morphism") {
            return <HeroGlassMorphism
                key={index}
                desktopImage={data.desktop_image.url}
                mobileImage={data.mobile_image.url}
                title={data.title}
                subtitle={data.subtitle}
                callToActionLink={data.call_to_action_link}
                callToActionText={data.call_to_action_text}
            />

        }
        else if (data.acf_fc_layout === "dual_image_section") {
            return <TwoImageSection
                key={index}
                title={data.title}
                content={data.content}
                backgroundImage={data.background_image}
                frontImage={data.foreground_image}
                imageText={data.card_text}
                hideImageOnMobile={true}
                callToActionText={data.call_to_action_text}
                callToActionLink={data.call_to_action_link}
            />
        }

        else if (data.acf_fc_layout === "parallax_image") {
            return <ParallaxImage
                key={index}
                image={data.desktop_image.url}
            />
        }
        else if (data.acf_fc_layout === "icon_card_section") {
            const card = data.card.map((item, index) => {
                return (
                    <Grid md={4} sm={6} key={index} >
                        <IconCard
                            title={item.card_title}
                            content={item.content}
                            image={item.icon}
                        />
                    </Grid>
                )
            })
            return (
                <IconContainer className='max-width' key={index}>
                    <RowTitle title={data.section_title} align="center" />
                    <Grid container justifyContent="center" rowSpacing={4} columnSpacing={{ xs: 4, sm: 8, md: 8, lg: 16 }} sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}>
                        {card}
                    </Grid>
                </IconContainer>
            )
        }

        else if (data.acf_fc_layout === "image_content_section" && data.image_overflow) {
            return <OverflowImageContentSection
                image={data.image}
                title={data.title}
                content={data.content}
                imageAlignment={data.image_alignment}
                backgroundColor={data.background_color}
            />
        }
    })

    return (
        <>
            {serviceContent}

        </>
    )
}

export default ServicePage


const IconContainer = styled.div`
    margin-top: 120px; 
    margin-bottom: 120px; 
`