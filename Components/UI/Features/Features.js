import React from "react";
import Feature from "./Feature/Feature";
import styled from "styled-components"

function Features({ featuresData }) {
  const features = featuresData.map((data, index) => {
    return <Feature 
    key={index}
    title={data.title.rendered}
    content={data.content.rendered}
    icon={data.acf.icon}
    />;
  });
  return (
    <Section className="fifth-section" id="features">
      <div className="max-width">
        <h3>Key Features</h3>
        <FeatureContainer>
    {features}
        </FeatureContainer>
 
      </div>
    </Section>
  );
}

export default Features;
const Section = styled.section`
padding: 140px 0 ;  

display: flex; 
flex-direction: column; 
justify-content: center; 
@media(max-width: 800px){ 
  padding: 70px 0 ;  

}
`
const FeatureContainer = styled.div`
margin-top: 30px; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 
@media(max-width: 850px){ 
    grid-template-columns: 1fr  1fr; 

}
@media(max-width: 500px){ 
    grid-template-columns:   1fr; 
}
`