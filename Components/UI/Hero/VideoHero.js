import React, { useState } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

function VideoHero({
    desktopVideoID,
    mobileVideoID,
    desktopImage,
    mobileImage,
    title,
    subtitle,
    callToActionText,
    callToActionLink,
}) {

    const [showImage, setShowImage] = useState(true)
    console.log(showImage)
    const matches = useMediaQuery('(min-width:700px)');
    const videoMatches = useMediaQuery('(max-width:550px)');

    // const titleClass = matches ? "headline-medium" : "headline-small"
    const subtitleClass = matches ? "headline-medium" : "headline-small"


    return (
        <Container>
            <div className='overlay'></div>

            <div className='video-box'>
                {showImage &&
                    <Image src={videoMatches ? mobileImage : desktopImage} fill alt={title} priority />
                }
                <Vimeo
                    className="hero-video"
                    video={videoMatches ? mobileVideoID : desktopVideoID}
                    autoplay={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    dnt={true}
                    background={true}
                    responsive={true}
                    onProgress={() => console.log("loaded")}
                />
            </div>

            <div className='content'>
                <h1 className="display-large">{title}</h1>
                <h2 className={subtitleClass} >{subtitle}</h2>
                <PrimaryButton callToActionText={callToActionText} href={callToActionLink} variant="contained" />
            </div>
        </Container>

    )
}

export default VideoHero

const Container = styled.div`
        position: relative ;
        top: 62px; 
        @media(max-width: 600px){ 
            top:56px;
        }
        .overlay{ 
            position: absolute ;
            width: 100%; 
            height: 100%; 
            background: rgba(0,0,0,0.4);
            z-index: 1; 
        }
    .video-box{ 
       width: 100%; 
        padding-bottom: 56.25%; 
            position: relative ;
            @media(max-width: 600px){ 
                padding-bottom: 125%; 
        }
            img{ 
                width: 100%; 
                height: 100%; 
                object-fit: cover; 
            }
        .hero-video{ 
            width: 100%; 
            height: 100%; 
            position: absolute ;
            >div{ 
                @media(max-width: 550px){ 
                    padding: 0 0 125% 0 !important; 
                }
              
            }
        }

    }
    .content{ 
        position: absolute ;
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%) ;
        text-align: center; 
        max-width: 1200px;
        width: 100%;  
        z-index: 1; 
        color: white; 
        
        h1{ 
           @media(max-width: 350px){ 
            font-size: 2rem; 
            line-height: 2.5rem; 
           }
        }
        h2{ 
            margin-top: 16px;
            @media(max-width: 350px){ 
            font-size: 1.2rem; 
            line-height: 1.4rem; 
            margin-top: 8px; 
           }
        }
        button{ 
            margin-top: 24px; 
            @media(max-width: 350px){ 
            
            margin-top: 16px; 
           }
        }
    }
`