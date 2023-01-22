import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/PrimaryButton'
import useMediaQuery from '@mui/material/useMediaQuery';

function FullWidthCard({ image, title, callToActionText, callToActionLink }) {
    const matches = useMediaQuery('(min-width:600px)');
    const headlineClass = matches ? "headline-large" : "headline-small"

    return (
        <Container>
            <div className='image-box'>
                <Image src={image.url} fill />
            </div>
            <div className='content'>
                <h6 className={headlineClass}>{title}</h6>
                <PrimaryButton href={callToActionLink} callToActionText={callToActionText} variant="contained" />
            </div>
        </Container>
    )
}

export default FullWidthCard

const Container = styled.div`
width: 50%; 
height: 80vh ;
position: relative; 
@media(max-width: 900px){ 
    height: 500px ;
}
@media(max-width: 600px){ 
    height: 400px ;
    width: 100%; 
    margin: 8px;
}
    .image-box{ 
        position: relative ;
        width: 100%; 
        height: 100%;
        img{ 
            object-fit: cover; 
        }
    }
    .content{ 
        position: absolute; 
        bottom: 0;
        width: 100%; 
        height: 300px; 
        background: radial-gradient(98.05% 98.05% at 1.89% 1.95%, rgba(255, 255, 255, 0.42) 0%, rgba(81, 90, 2, 0.06) 100%);
        backdrop-filter: blur(10px);
        display: flex; 
            align-items: center ;
            flex-direction: column; 
            justify-content: center;
            padding: 0 24px; 

            @media(max-width: 600px){ 
                height: 200px; 
}
        h6{ 
            color: white;
            text-align: center; 
            font-weight: 600; 
        }
        button{ 
            margin: 16px auto; 
            display: block; 
        }
    }
`