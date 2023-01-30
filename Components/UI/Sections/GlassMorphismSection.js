import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Paragraph from '../Typography/Paragraph'
function GlassMorphismSection({ title, content, image }) {
    return (
        <Section>
            <div className="image-wrapper">
                <Image sizes="100vw"
                    src={image.url} alt={image.alt ? image.alt : title} fill />
            </div>
            <div className='content-wrapper'>
                <div className='content'>
                    <h2 className='headline-large'>
                        {title}
                    </h2>
                    <Paragraph singleListRow={true}>{content}</Paragraph>
                </div>

            </div>
        </Section>
    )
}

export default GlassMorphismSection
const Section = styled.section`
        position: relative ;
    .image-wrapper{ 
        width: 100%; 
        height: 500px;
        position: relative ;
        img{ 
            object-fit: cover; 
            filter: contrast(140%);

        }
    }
    .content-wrapper{ 
        position: absolute; 
        top: 0; 
        left: 0; 
        height: 100%; 
        width: 500px;
        background: radial-gradient(98.05% 98.05% at 1.89% 1.95%, rgba(0, 0, 0, 0.42) 0%, rgba(81, 90, 2, 0.06) 100%);
        backdrop-filter: blur(10px);
        color: white; 
        display: flex; 
        align-items: center; 
        padding: 0 80px; 
        @media(max-width: 1366px){ 
            padding: 0 8px; 
            width: 400px;

        }
        @media(max-width: 900px){ 
           width: 40%; 
        }
        @media(max-width: 600px){ 
           width: 60%; 
           
        }
        @media(max-width: 500px){ 
           width: 100%; 
        }
      
        ul{ 
            color: white; 
        }
    }
`