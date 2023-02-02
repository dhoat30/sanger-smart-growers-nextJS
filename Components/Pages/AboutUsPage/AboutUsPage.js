import React from 'react'
import HeroCenter from '../../UI/Hero/HeroCenter'
import styled from 'styled-components'
import Image from 'next/image'
import Paragraph from '../../UI/Typography/Paragraph'
import Paper from '@mui/material/Paper';
import RowTitle from '../../UI/Typography/RowTitle'
import CircleSection from './CircleSection/CircleSection'
import ImageContentSection from '../../UI/Sections/ImageContentSection'

function AboutUsPage({ pageData }) {
    const heroSection = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "hero_section_center_align") {
            return <HeroCenterStyle
                key={index}
                desktopImage={item.desktop_image.url}
                mobileImage={item.mobile_image.url}
                title={item.title}

            />
        }


    })
    const directorSection = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "image_content_section") {
            return <ImageContentSection
                key={index + 67}
                title={item.title}
                content={item.content}
                image={item.image}
                singleListRow={true} />
        }
    })
    // team sections 
    const teamSection = pageData.acf.service_content.map((item, index) => {
        if (item.acf_fc_layout === "team_section_with_description") {
            return item.sections.map((data, i) => {
                return (
                    <div className='team-wrapper' key={i + 52}>
                        <div className='flex-image-right' style={{ flexDirection: data.image_alignment === "Right" ? "row-reverse" : "row" }}>
                            <div className="image-container">
                                <Image src={data.image.url} fill
                                    sizes="(min-width: 900px) 60vw,
                                    100vw"
                                    alt={data.name}
                                />
                            </div>
                            <div className='content-wrapper'>
                                <h3 className='headline-medium'>{data.name}</h3>
                                <h4 className='headline-small'>{data.designation}</h4>
                                <Paragraph>{data.description}</Paragraph>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    })

    const cardSection = pageData.acf.service_content.map((item, index) => {
        // team section cards
        if (item.acf_fc_layout === "team_section_cards") {
            return (
                <CardWrapper className='max-width' key={index + 10}>
                    {
                        item.sections.map((data, i) => {
                            return (
                                <Paper elevation={1} key={i + 68} className="surface">
                                    <div className="image-container">
                                        <Image src={data.image.url} fill
                                            sizes="(min-width: 900px) 30vw,
                                    100vw"
                                            alt={data.name}
                                        />
                                    </div>
                                    <div className='content-wrapper'>
                                        <h3 className='headline-medium'>{data.name}</h3>
                                        <h4 className='headline-small'>{data.designation}</h4>
                                    </div>
                                    <div className="yellow-brick" />
                                </Paper >
                            )
                        })
                    }
                </CardWrapper>
            )
        }
    })

    const circleSection = pageData.acf.service_content.map((item, index) => {
        // team section cards
        if (item.acf_fc_layout === "circle_section") {
            return <CircleSection key={index + 200} data={item} />
        }
    })

    return (
        <>
            {heroSection}
            {directorSection}
            <TeamSection>
                <RowTitle title="Our Team" align="center" animation={true} />
                {teamSection}
            </TeamSection>
            {cardSection}
            {circleSection}
        </>
    )
}

export default AboutUsPage
const HeroCenterStyle = styled(HeroCenter)`
    height: 500px;
    img{ 
        object-position: middle;
    }
`

const TeamSection = styled.section`
padding: 120px 0 0 0; 
@media( max-width: 900px){ 
    padding: 40px 0 0 0; 
}
h2{ 
    margin-bottom: 40px; 
}
.team-wrapper{
   
    .flex-image-right{ 
    display: flex; 
    align-items: center; 
    @media(max-width: 700px){ 
        flex-wrap: wrap ;
    }
}
.image-container{ 
    position: relative;
    width: 50%; 
    height: 500px;
    @media( max-width: 900px){ 
    height: 350px; 
}
    img{ 
        object-fit: cover; 
    }
    @media(max-width: 700px){ 
        width: 100%; 
    }
}
.content-wrapper{ 
    width: 50%; 
    padding: 0 80px; 
     @media(max-width: 700px){ 
        width: 100%; 
    }
    @media(max-width: 900px){ 
        padding: 16px 8px 56px 8px; 
    }
    h4{ 
        color: var(--sanger--theme--sys--light--on-surface-variant);
        margin-bottom: 16px; 
    }

}
}
`

const CardWrapper = styled.section`
display: flex; 
gap: 32px; 
justify-content: center; 
align-items: center; 
margin-top: 60px; 
margin-bottom: 60px; 
@media(max-width: 1100px){ 
flex-wrap: wrap; 
gap: 16px; 
}

.surface{ 
    width: 400px;
    position: relative ;
    @media(max-width: 900px){ 
        width: 300px; 
    }
    @media(max-width: 650px){ 
        width: 100%; 
    }
z-index:2; 
    .yellow-brick{ 
    position: absolute ;
    left: 0;
    bottom: 0; 
    z-index: -1;  
    width: 100%; 
    height: 8px; 
    background: var(--sanger--theme--sys--dark--secondary);
    border-radius: 0 0 4px 4px; 
}
}

.image-container{ 
    position:  relative;
    width: 100%; 
    height: 400px; 
    @media(max-width: 900px){ 
        height: 300px; 
    }
    img{ 
        object-fit: cover; 
        object-position: center; 
    }
}
.content-wrapper{ 
    text-align: center; 
    padding:  16px; 
    h4{ 
        color: var(--sanger--theme--sys--light--on-surface-variant);
    }

}
`