import React from 'react'
import styled from "styled-components";

function JustText({content}) {
  const smallText = content.length > 300 && "small-text"

  return (
    <Section>
    <FlexBox className={`${smallText} max-width`}>
    
        <div dangerouslySetInnerHTML={{ __html: content }} />
    
    
    </FlexBox>
  </Section>
  )
}

export default JustText
const Section = styled.section`
  background-color: var(--lightBlue);
  padding: 70px 0 70px 0;
  text-align: center;

  @media (max-width: 500px) {
    margin-bottom: 0;
    padding: 40px 0 40px 0;
  }
  .small-text{ 
    h3{ 
      font-size: 1.8rem; 
      line-height: 2.4rem;
    }
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  h3{ 
    margin-bottom: 20px; 
    color: var(--midGrey);
    strong{ 
        color: var(--blue);
    }
  }
`;


