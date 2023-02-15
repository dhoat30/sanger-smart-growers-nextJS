import React from "react";
import Hero from "../../UI/Hero/Hero";

import Services from "./Services/Services";
import TwoImageSection from "../../UI/Sections/TwoImageSection";
import ParallaxImage from "../../UI/Images/ParallaxImage";
import CanopySection from "../../UI/Sections/CanopySection";
import ImageContentRowSection from "../../UI/Sections/ImageContentRowSection";
import BackgroundImageSection from "../../UI/Sections/BackgroundImageSection";
import VideoHero from "../../UI/Hero/VideoHero";


function HomePage({ homePageData }) {
  // main 
  return (
    <>
      <VideoHero
        desktopVideo={homePageData.hero_section.desktop_video.url}
        mobileVideo={homePageData.hero_section.mobile_video.url}
        desktopImage={homePageData.hero_section.desktop_hero_image.url}
        mobileImage={homePageData.hero_section.mobile_hero_image.url}
        title={homePageData.hero_section.title}
        subtitle={homePageData.hero_section.subtitle}
        callToActionText={homePageData.hero_section.call_to_action_text}
        callToActionLink="/work-with-us/"
      />

      <Services align="center" servicesArr={homePageData.our_services} />
      <TwoImageSection
        title={homePageData.experience_section.section_title}
        content={homePageData.experience_section.content}
        backgroundImage={homePageData.experience_section.background_image}
        frontImage={homePageData.experience_section.front_image}
        imageText={homePageData.experience_section.years_of_experience}
        callToActionText={homePageData.experience_section.call_to_action_text}
        callToActionLink={homePageData.experience_section.call_to_action_link}
      />
      <ParallaxImage image={homePageData.parallax_image.url} />

      <CanopySection
        title={homePageData.our_canopy_section.title}
        content={homePageData.our_canopy_section.content}
        canopyData={homePageData.our_canopy_section.canopy_data}
        totalAnnualTray={homePageData.our_canopy_section.total_annual_trays}
      />
      {/* our story team  */}
      <ImageContentRowSection
        title={homePageData.our_team_section.title}
        content={homePageData.our_team_section.content}
        image={homePageData.our_team_section.image}
        linkText="Our Story"
        link="/about-us"
      />

      {/* join our team section  */}
      <BackgroundImageSection
        title={homePageData.join_our_team_section.title}
        content={homePageData.join_our_team_section.content}
        callToActionLink="/work-with-us"
        callToActionText={homePageData.join_our_team_section.call_to_action_text}
        image={homePageData.join_our_team_section.image}
      />
    </>
  );
}

export default HomePage;
