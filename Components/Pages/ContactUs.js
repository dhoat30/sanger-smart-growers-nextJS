import React from "react";
import styled from "styled-components";
import Form from "../UI/Forms/Form";
import Testimonial from "../UI/Testimonial/Testimonial";

function ContactUs({ pageData, testimonialsData }) {
  return (
    <>
      <Section className="book-demo-hero contact-hero">
      <div className="row-container">
        <div className="book-demo-hero-text">
          <h1>{pageData.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}/>
   
        </div>
        <Form 
        emailRouteUrl={`${process.env.url}/wp-json/webduel/v1/contact-form`}
        formName="Contact Form"
        emailTo="craig@gonogo.co.nz"
        cta="Send Now"
        /> 
      </div>
    </Section>
    <Testimonial
    testimonialsData={testimonialsData}
    /> 
    </>
  
  );
}

export default ContactUs;
const Section = styled.section`
margin-top: 50px; 
  h1 {
    color: white;
  }
  p {
    color: white;
    font-size: 1rem; 
    line-height: 1.5rem; 
  }
`;
