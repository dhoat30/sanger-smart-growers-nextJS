import React from 'react'
import styled from 'styled-components'
import HeroJustImage from '../../UI/Hero/HeroJustImage'
import RowTitle from '../../UI/Typography/RowTitle'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Card from '../../UI/Card/Card';
import SubscribeForm from '../../UI/Forms/SubscribeForm';
import Paper from '@mui/material/Paper';
import FacebookIcon from '../../UI/Icons/SocialMedia/FacebookIcon';

function NewsPage({ postsData }) {
    console.log(postsData.length)

    const newsCards = postsData.map((item, index) => {
        console.log(item)
        let content = item.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
        return <Grid key={item.id} item sm={6} xs={12} lg={6} md={4} xl={4}>
            <Card
                title={item.title.rendered}
                content={content.length > 10 && content.substring(0, 200) + "..."}
                image={item.fimg_url}
                callToActionText="READ MORE"
                callToActionLink={`/news/${item.slug}`}
                date={item.acf.date}
            />
        </Grid>

    })
    return (
        <>
            <HeroJustImage desktopImage="/news-hero.jpg" mobileImage="/news-hero.jpg" title="News Page Hero Image" />
            <Section className='max-width'>
                <RowTitle title="News" align="center" />

                <div className='two-column-grid'>
                    <Paper elevation={1} className='sidebar-wrapper'>
                        <div className='content-wrapper'>
                            <h3 className='headline-small'>Subscribe</h3>
                            <SubscribeForm />
                        </div>
                        <div className='content-wrapper'>
                            <h3 className='headline-small'>Find us on Social Media</h3>
                            <a href="https://www.facebook.com/SangerSmartGrowers" target="_blank">
                                <FacebookIcon fill="var(--sanger--theme--sys--light--tertiary)" hoverColor="#a60001" />

                            </a>
                        </div>
                    </Paper>
                    <Grid
                        container
                        justifyContent="flex-start"
                        spacing={3}>
                        {newsCards}
                    </Grid>
                </div>

            </Section>

        </>
    )
}

export default NewsPage
const Section = styled.section`
padding: 80px 0; 
.two-column-grid{ 
    display: grid; 
    grid-template-columns: 400px 1fr  ; 
    justify-content: space-between; 
    align-items: start;
    gap: 24px; 
    margin-top: 40px; 
    @media(max-width: 1200px){ 
        grid-template-columns: 1fr  ; 
    }
}
.sidebar-wrapper{ 
    padding: 0 24px; 
    position: sticky; 
    top: 80px;  
    @media(max-width: 1200px){ 
display: none;
    }
    .content-wrapper{
        margin: 32px 0; 
    }
    h3{ 
        position:  relative;
        padding-bottom: 8px;
        margin-bottom: 24px; 
        &:after{
            content: "";
            border-bottom: 1px solid var(--sanger--theme--ref--neutral-variant--neutral-variant90);
            position: absolute; 
            bottom: 0; 
            left: -24px; 
            width: calc(100% + 48px); 
        } 
     }
}
`