import React from 'react'
import PlantEnquiryForm from '../../UI/Forms/PlantEnquiryForm'
import HeroJustImage from '../../UI/Hero/HeroJustImage'
import styled from 'styled-components'
const PlantEnquiryPage = ({ pageData }) => {
    console.log(pageData)
    return (
        <>
            <HeroJustImage
                desktopImage={pageData.acf.hero_image.desktop_image.url}
                mobileImage={pageData.acf.hero_image.mobile_image.url}
                alt={pageData.acf.hero_image.desktop_image.alt}
            />
            <PlantEnquiryFormStyle
                title={pageData.title.rendered}
                content={pageData.content.rendered}
                formName={pageData.title.rendered}
                emailTo="designer@webduel.co.nz"
                leadType="lead"
                emailRoute="/api/sendEmail"
            />
        </>
    )
}

export default PlantEnquiryPage
const PlantEnquiryFormStyle = styled(PlantEnquiryForm)`
margin: 0 !important; 
position: relative; 
top: -120px;
@media(max-width: 900px){ 
    top: -40px;
}
>div{ 
    @media(max-width: 900px){ 
        width: 100%; 
    border-radius: 32px; 
}
 
}
`