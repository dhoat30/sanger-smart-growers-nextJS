import ContactForm from "../../../UI/Forms/ContactForm"
import HeroJustImage from "../../../UI/Hero/HeroJustImage"
import JobForm from '../../../UI/Forms/JobForm'
import styled from "styled-components"
import JustTextSection from "../../../UI/Sections/JustTextSection"
import ImageContentSection from "../../../UI/Sections/ImageContentSection"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HorizontalScroll from "../../../UI/Scroll/HorizontalScroll"

function SeasonPage({ pageData }) {
    const sections = pageData.acf.service_content.map((data, index) => {
        if (data.acf_fc_layout === "hero_section_with_just_image") {
            return (
                <div key={15}>
                    <HeroJustImage
                        key={index}
                        desktopImage={data.desktop_image.url}
                        mobileImage={data.mobile_image.url}
                        alt={data.desktop_image.alt}
                        title={pageData.title.rendered}
                    />
                    <JobFormStyle
                        title={`Join ${pageData.title.rendered}`}
                        content="Please fill the form below and one of our team members will contact you as soon as possible. <br>We look forward to working with you this season!"
                        formName={`Join ${pageData.title.rendered} Job Form`}
                        emailTo="designer@webduel.co.nz"
                        leadType="other"
                    />
                </div>
            )
        }
        else if (data.acf_fc_layout === "just_text") {
            return (
                <JustTextSection key={18}>{data.content}</JustTextSection>
            )
        }
        else if (data.acf_fc_layout === "image_content_section") {
            return <ImageContentSection
                key={20}
                title={data.title}
                content={data.content}
                image={data.image}
                backgroundColor={data.background_color}
                imageAlignment={data.image_alignment}
            />
        }
        else if (data.acf_fc_layout === "scrolled_content") {
            return <HorizontalScroll key={25} items={data.item} />
        }
    })
    return (
        <>{sections} </>
    )
}

export default SeasonPage

const JobFormStyle = styled(JobForm)`
    margin: 0; 
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