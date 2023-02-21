import React from 'react'
import HeroCenter from '../../../UI/Hero/HeroCenter'
import styled from 'styled-components'
import JustTextSection from '../../../UI/Sections/JustTextSection'
import ImageContentSection from '../../../UI/Sections/ImageContentSection'
import ContactForm from '../../../UI/Forms/ContactForm'

function OurProcess({ pageData }) {
    const sections = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "hero_section_center_align") {
            return <HeroCenterStyle
                key={index}
                title={item.title}
                desktopImage={item.desktop_image.url}
                mobileImage={item.mobile_image.url}
            />
        }
        else if (item.acf_fc_layout === "just_text") {
            return <JustTextSection key={index}>{item.content}</JustTextSection>
        }
        else if (item.acf_fc_layout === "image_content_section") {
            return <ImageContentSection
                key={index}
                title={item.title}
                content={item.content}
                image={item.image}
                imageAlignment={item.image_alignment}
                backgroundColor={item.background_color}
            />
        }
    })
    return (
        <>
            {sections}
            <ContactForm
                title="Get In Touch"
                content="Please fill out the form below, and one of our team member will respond to your inquiry as soon as possible."
                formName="Kiwifruit Orchard Management"
                emailTo="designer@webduel.co.nz"
                leadType="lead"
                emailRoute="/api/sendEmail"
                formType="contact-form"
            />
        </>
    )
}

export default OurProcess
const HeroCenterStyle = styled(HeroCenter)`
height: 50vh;
`