import React from 'react'
import PlantEnquiryForm from '../../UI/Forms/PlantEnquiryForm'
import HeroJustImage from '../../UI/Hero/HeroJustImage'
import styled from 'styled-components'
import ContactForm from '../../UI/Forms/ContactForm'
const ContactUsPage = ({ pageData }) => {
    return (
        <>
            <HeroJustImage
                desktopImage={pageData.acf.hero_image.desktop_image.url}
                mobileImage={pageData.acf.hero_image.mobile_image.url}
                alt="Contact Us"
            />

            <ContactFormStyle
                title={pageData.title.rendered}
                content={pageData.content.rendered}
                formName={pageData.title.rendered}
                emailTo="info@sangergrowers.co.nz"
                leadType="lead"
                emailRoute="/api/sendEmail"
                formType="contact-form"
            />
        </>
    )
}

export default ContactUsPage
const ContactFormStyle = styled(ContactForm)`
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