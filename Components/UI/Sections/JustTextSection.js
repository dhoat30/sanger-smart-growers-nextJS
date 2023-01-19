import React from 'react'
import styled from 'styled-components'

function JustTextSection({ children }) {
    return (
        <Section>
            <div className='max-width' dangerouslySetInnerHTML={{ __html: children }} />

        </Section>
    )
}

export default JustTextSection
const Section = styled.section`
    background: var(--sanger--theme--white); 
    .max-width{ 
        padding: 80px 0; 

        @media(max-width: 500px){ 
            padding: 40px 0; 
            }
        h2{ 
            max-width: 1200px; 
            margin: 0 auto; 
            font-size: 2rem;
            text-align: center; 
            font-weight: 600; 
            color: var(--sanger--theme--ref--neutral--neutral60);
            strong{ 
                font-weight: 600; 
                background-image: linear-gradient(90.93deg, #FFC700 51.19%, rgba(248, 3, 3, 0.66) 69.61%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }

            @media(max-width: 500px){ 
                font-size: 1.5rem; 
            }
        }
    }
`