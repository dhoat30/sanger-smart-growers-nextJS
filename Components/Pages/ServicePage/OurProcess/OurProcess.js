import React from 'react'
import HeroCenter from '../../../UI/Hero/HeroCenter'
import styled from 'styled-components'
import JustTextSection from '../../../UI/Sections/JustTextSection'
import ImageContentSection from '../../../UI/Sections/ImageContentSection'

function OurProcess({ pageData }) {
    console.log(pageData)
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
        </>
    )
}

export default OurProcess
const HeroCenterStyle = styled(HeroCenter)`
height: 50vh;
`