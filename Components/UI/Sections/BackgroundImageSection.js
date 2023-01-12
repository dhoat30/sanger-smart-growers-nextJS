import React from 'react'
import styled from 'styled-components'
import Image from "next/image"
import RowTitle from '../Typography/RowTitle'
import Paragraph from '../Typography/Paragraph'
import PrimaryButton from '../Buttons/PrimaryButton'
function BackgroundImageSection({ title, content, callToActionLink, callToActionText, image, className }) {
    return (
        <Container>
            <div className='overlay'></div>

            <BackgroundImage className={className} image={image} style={{ backgroundImage: `url(${image.url})` }} />

            <div className='content'>
                <RowTitle title={title} align="center" hideIcon={true}></RowTitle>
                <Paragraph align="center">{content}</Paragraph>
                <PrimaryButton variant="contained" callToActionText={callToActionText} href={callToActionLink}></PrimaryButton>
            </div>
        </Container>
    )
}

export default BackgroundImageSection

const Container = styled.section`
   position: relative ;
 

.content{ 
max-width: 800px; 
width: 95% ;

margin: 0 auto; 
position: absolute ;
top: 50%; 
left: 50%;
z-index: 11; 
transform: translate(-50%, -50%); 
background: radial-gradient(98.05% 98.05% at 1.89% 1.95%, rgba(0, 0, 0, 0.42) 0%, rgba(81, 90, 2, 0.06) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
backdrop-filter: blur(30px);
padding: 40px; 
border-radius: 8px; 

@media(max-width: 600px){ 
    padding: 16px 8px; 
}
    h2, p, div{ 
        color: var(--sanger--theme--white); 
    }
    a{ 
        display: flex ;
        justify-content: center; 
    margin: 16px 0 0 0 ;
    }
   
 
}
`

const BackgroundImage = styled.div`
 padding-bottom:70vh; 
    background-repeat: no-repeat; 
    width: 100%; 
    background-attachment: fixed; 
    background-size: cover; 
    z-index: 1; 
    filter: saturate(120%); 
    @media(max-width: 600px){ 
    padding-bottom:90vh;
}
`