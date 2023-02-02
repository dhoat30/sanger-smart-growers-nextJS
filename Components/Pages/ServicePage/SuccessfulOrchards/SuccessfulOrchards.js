import React, { useState } from 'react'
import HeroCenter from '../../../UI/Hero/HeroCenter'
import styled from 'styled-components'
import OrchardCard from './OrchardCard/OrchardCard'
import { motion } from 'framer-motion'

function SuccessfulOrchards({ pageData }) {
    const sections = pageData.acf.orchards.map((data, index) => {
        return <OrchardCard
            title={data.orchard.title}
            subtitle={data.orchard.subtitle}
            image={data.orchard.background_image.url}
            location={data.orchard.location}
            size={data.orchard.size}
            stage={data.orchard.stage}
            key={index} />
    })
    return (
        <>
            <HeroCenter
                desktopImage={pageData.acf.hero_section.desktop_image.url}
                mobileImage={pageData.acf.hero_section.mobile_image.url}
                title={pageData.acf.hero_section.title}
            />
            <Container>
                {sections}
            </Container>
        </>
    )
}

export default SuccessfulOrchards
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr; 
 margin-top: 20px; 
    grid-gap: 10px; 
    @media(max-width: 900px){ 
        grid-template-columns: 1fr; 
    }
`