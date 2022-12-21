import React from "react";
import Hero from "../../UI/Hero/Hero";
import styled from "styled-components";
import Image from "next/image";
import Services from "./Services/Services";


function HomePage({ homePageData }) {
  console.log(homePageData.hero_section)

  // main 
  return (
    <>
      <Hero
        desktopImage={homePageData.hero_section.desktop_hero_image.url}
        mobileImage={homePageData.hero_section.mobile_hero_image.url}
        title={homePageData.hero_section.title}
        subtitle={homePageData.hero_section.subtitle}
        callToActionText={homePageData.hero_section.call_to_action_text}
        callToActionLink={homePageData.hero_section.call_to_action_link}
      />
      <Services align="center" />
    </>
  );
}

export default HomePage;

const ImgContainer = styled.div`
 
  display: block;
  max-width: 400px;
  width: 100%;


`;

const Heading3 = styled.h3`
  color: var(--midGrey) !important;
  strong {
    color: var(--blue);
  }
  @media (max-width: 1000px) {
    text-align: center; 
  }
`;
const ImageStyle = styled(Image)`
 
`;
const AboutSection = styled.section`
  background-color: var(--lightBlue);
  > div {
    padding: 70px 0; 
    display: flex;
    align-items: center; 
  
    flex-wrap: wrap; 
 
    > div {
      
      width: 50%;
      @media (max-width: 1000px) {
        width: 100%; 

      }
    }
  }
  .first-section-text{ 
    padding-bottom: 40px; 
    @media(max-width: 1000px){ 
      h3{ 
        margin-top: 20px; 
      }
      p{ 
        text-align: center;   
      }
    }
   
  }
  .first-section-img{ 
    display: flex; 
    justify-content: center; 
    .img{ 
      border-radius: 50%; 
     
    }

  }
  padding: 70px 0;
`;