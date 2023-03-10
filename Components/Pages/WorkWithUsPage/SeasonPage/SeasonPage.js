import ContactForm from "../../../UI/Forms/ContactForm"
import HeroJustImage from "../../../UI/Hero/HeroJustImage"
import JobForm from '../../../UI/Forms/JobForm'
import styled from "styled-components"
import JustTextSection from "../../../UI/Sections/JustTextSection"
import ImageContentSection from "../../../UI/Sections/ImageContentSection"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HorizontalScroll from "../../../UI/Scroll/HorizontalScroll"
import useMediaQuery from '@mui/material/useMediaQuery';
import GlassMorphismSection from "../../../UI/Sections/GlassMorphismSection"

function SeasonPage({ pageData }) {
    const matches = useMediaQuery('(min-width:1000px)');
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
                        emailRoute="/api/sendJobEmail"
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
            if (matches) {
                return <HorizontalScroll key={25} items={data.item} />
            }
            else {
                return data.item.map((data, index) => {
                    return <ImageContentSection key={index + 102}
                        title={data.title}
                        content={data.content}
                        image={data.image}
                    />
                })
            }
        }

        else if (data.acf_fc_layout === "glass_morphism_section") {
            return <GlassMorphismSection key={index + 62}
                title={data.title}
                content={data.content}
                image={data.background_image}
            />


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