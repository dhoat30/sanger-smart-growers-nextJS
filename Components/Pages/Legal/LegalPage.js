import React from "react";
import styled from "styled-components";

function LegalPage({ pageData }) {
  return (
    <>
      <Section>
        <Hero className="max-width">
          <h1>{pageData.title.rendered}</h1>
        </Hero>
      </Section>
      <MainSection>
        <div className="max-width" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
      </MainSection>
    </>
  );
}

export default LegalPage;
const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, #ff8b67 0%, #fb7f09 100%);
`;
const Hero = styled.div`
  h1 {
    color: white;
  }
`;
const MainSection = styled.section`
padding: 50px 0 100px 0; 
h2{ 
    
    font-weight: 600; 
    margin: 40px 0 10px 0; 
}
ul{ 
    margin-left: 30px; 
   li{ 
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7rem;
    letter-spacing: -0.015em;
    color: var(--blue);
    margin-top: 5px;
   }
}
P{ 
}
`
