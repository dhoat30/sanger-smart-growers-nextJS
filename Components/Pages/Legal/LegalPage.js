import React from "react";
import styled from "styled-components";

function LegalPage({ pageData }) {
  return (
    <>
      <MainSection className="max-width">
        <h1 className="display-medium"> {pageData.title.rendered}</h1>
        <div className="max-width content" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
      </MainSection>
    </>
  );
}

export default LegalPage;


const MainSection = styled.section`
padding-top: 120px; 
padding-bottom: 120px;
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
p{ 
  color: var( --sanger--theme--sys--light--on-surface-variant); 

}
`
