import React from 'react'
import styled from 'styled-components'

function JustTextSection({ children }) {
    return (
        <Section>
            <div className='max-width text-background-color' dangerouslySetInnerHTML={{ __html: children }} />
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
       

            @media(max-width: 500px){ 
                font-size: 1.5rem; 
            }
        }
    }
`