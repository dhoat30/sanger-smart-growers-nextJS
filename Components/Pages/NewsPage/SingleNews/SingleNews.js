import React from 'react'
import styled from 'styled-components'
import HeroJustImage from '../../../UI/Hero/HeroJustImage'
import SubscribeForm from '../../../UI/Forms/SubscribeForm'
import Paper from '@mui/material/Paper';
import FacebookIcon from '../../../UI/Icons/SocialMedia/FacebookIcon';
function SingleNews({ postData }) {
    return (
        <>
            <HeroJustImageStyle
                desktopImage={postData.fimg_url}
                mobileImage={postData.fimg_url}
                title={postData.title.rendered}
            />

            <ContentWrapper className='two-column-grid max-width'>
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
                <Content >
                    <h1 className='headline-large'>{postData.title.rendered}</h1>
                    <h4 className='body-medium'>{postData.acf.date}</h4>
                    <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
                </Content>
            </ContentWrapper>

        </>
    )
}
export default SingleNews
const HeroJustImageStyle = styled(HeroJustImage)`

`
const ContentWrapper = styled.section`
padding: 40px 0; 
 display: grid; 
    grid-template-columns: 400px 1fr  ; 
    justify-content: space-between; 
    align-items: start;
    gap: 80px; 
    margin-top: 40px; 
    @media(max-width: 1200px){ 
        grid-template-columns: 1fr  ; 
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
const Content = styled.div`
    h4{ 
        margin: 8px 0; 
    }
>div{ 
    margin-top: 24px; 
}
.wp-block-image { 
    margin: 40px 0; 
}
.is-layout-flex{ 
    display: flex; 
    flex-wrap: wrap ;
    gap: 10px; 
    >div{ 
        width: calc(50% - 20px); 
    }
  
}
img{ 
        width: 100%; 
        height: auto; 
        filter: contrast(120%);
filter: saturate(130%);
    }
    p{ 
        font-size: var(--sanger--theme--body--large);
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: 0.5px;
  color: var( --sanger--theme--sys--light--on-surface-variant); 
  margin-bottom: 8px; 
    }
`
