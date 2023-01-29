import React from 'react'
import styled from 'styled-components'
import IconCard from '../../UI/Card/IconCard'
import HeroGlassMorphism from '../../UI/Hero/HeroGlassMorphism'
import ParallaxImage from '../../UI/Images/ParallaxImage'
import TwoImageSection from '../../UI/Sections/TwoImageSection'
import Grid from '@mui/material/Unstable_Grid2';
import RowTitle from '../../UI/Typography/RowTitle'
import OverflowImageContentSection from '../../UI/Sections/OverflowImageContentSection'
import ContactForm from '../../UI/Forms/ContactForm'
import HeroCenter from '../../UI/Hero/HeroCenter'
import ImageContentSection from '../../UI/Sections/ImageContentSection'
import JustTextSection from '../../UI/Sections/JustTextSection'
import FullWidthCard from '../../UI/Card/FullWidthCard'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function ServicePage({ servicesData }) {
    const router = useRouter()

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
        else if (data.acf_fc_layout === "hero_section_center_align") {
            return <HeroCenter
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
                    <Grid md={4} sm={6} key={index}
                        component={motion.div}
                        variants={cardItemVariant}
                    >
                        <IconCard
                            title={item.card_title}
                            content={item.content}
                            image={item.icon}
                        />
                    </Grid>
                )
            })

            return (
                <IconContainer
                    className='max-width'
                    key={index}>
                    <RowTitle title={data.section_title} align="center" animation={true} />
                    <Grid
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.4, once: true }}
                        variants={iconContainerVariant}
                        container
                        justifyContent="center"
                        rowSpacing={4}
                        columnSpacing={{ xs: 4, sm: 8, md: 8, lg: 16 }}
                        sx={{ maxWidth: "1366px", margin: "40px auto 0 auto" }}>
                        {card}
                    </Grid>
                </IconContainer>
            )
        }
        else if (data.acf_fc_layout === "image_content_section" && !data.image_overflow) {
            return <ImageContentSection
                key={index}
                title={data.title}
                content={data.content}
                image={data.image}
                backgroundColor={data.background_color}
                imageAlignment={data.image_alignment}
            />

        }
        else if (data.acf_fc_layout === "image_content_section" && data.image_overflow) {

            return <OverflowImageContentSection
                key={index}
                image={data.image}
                title={data.title}
                content={data.content}
                imageAlignment={data.image_alignment}
                backgroundColor={data.background_color}
            />
        }
        else if (data.acf_fc_layout === "just_text") {
            return <JustTextSection key={index}>{data.content}</JustTextSection>
        }
    })

    let plantCards
    if (router.query.pid === "kiwifruit-nursery") {
        plantCards = servicesData.all_fields.plants.map((data, index) => {
            return <FullWidthCard
                key={index}
                image={data.image}
                title={data.title}
                callToActionLink={data.call_to_action_link}
                callToActionText={data.call_to_action_text}
            />
        }

        )
    }

    return (
        <>
            {serviceContent}

            {plantCards ?
                <PlantSection>
                    {plantCards}
                </PlantSection>
                :
                <ContactForm
                    title="Get In Touch"
                    content="Please fill out the form below, and one of our team member will respond to your inquiry as soon as possible."
                    formName="Kiwifruit Orchard Management"
                    emailTo="designer@webduel.co.nz"
                    leadType="lead"
                    emailRoute="/api/sendEmail"
                    formType="contact-form"
                />
            }
        </>
    )
}

export default ServicePage


const IconContainer = styled.div`
    margin-top: 120px; 
    margin-bottom: 120px; 
`
const PlantSection = styled.section`
display:  flex;
@media(max-width: 600px){ 
   flex-wrap: wrap; 
}
`