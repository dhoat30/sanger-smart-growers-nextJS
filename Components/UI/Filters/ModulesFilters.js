import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
function ModulesFilters({ allModulesData, title }) {
  // get active module ID
  const [activeModuleID, setActiveModuleID] = useState(allModulesData[0].id);
  const [activeModuleImage, setActiveModuleImage] = useState(false);
  const [showFirstImage, setShowFirstImage] = useState(true);

  // get active module image
  useEffect(() => {
    setActiveModuleImage(
      allModulesData.filter((item) => item.id === activeModuleID)

    );

  }, [activeModuleID]);



  // get all showing modules
  const moduleIDs = allModulesData.filter((data) => {
    if (
      data.slug.includes("hazards") ||
      data.slug.includes("incidents") ||
      data.slug.includes("planner")
    ) {
      return data;
    }
  });

  // module cards
  const moduleCard = allModulesData.map((data, index) => {
    if (
      data.slug.includes("hazards") ||
      data.slug.includes("incidents") ||
      data.slug.includes("planner")
    ) {
      return (
        <Card
          key={data.id}
          className={`${activeModuleID === data.id && "active"}`}
          onClick={() => {
            setActiveModuleID(data.id);
            setShowFirstImage(false)
          }}
        >
          <div className="image-container">
            {data.acf.module_icon && (
              <Image
                src={data.acf.module_icon.url}
                layout="fixed"
                width="70px"
                height="70px"
                alt={data.acf.hero_section.title}
              />
            )}
          </div>
          <div className="content">
            <h4>{data.acf.hero_section.title} </h4>
            <p>{data.acf.hero_section.subtitle}</p>
            <Link legacyBehavior href={`/modules/${data.slug}`} passHref>
              <a>Explore</a>
            </Link>
          </div>
        </Card>
      );
    }
  });

  return (
    <Section>
      <div className="container max-width">
        <h3>{title}</h3>
        <FlexBox>
          <ModuleCardsContainer>
            {moduleCard}
            <Link legacyBehavior href="/modules" passHref>
              <a className="secondary-btn">View All</a>
            </Link>
          </ModuleCardsContainer>
          <div className="module-image-container">
            {!showFirstImage ? (
              <Image
                src={activeModuleImage[0].acf.module_image.url}
                layout="responsive"
                width="100%"
                height={
                  (activeModuleImage[0].acf.module_image.height /
                    activeModuleImage[0].acf.module_image.width) *
                  100
                }
                alt="GonoGo modules"
              />
            ) : (
              <Image
                src={moduleIDs[0].acf.module_image.url}
                layout="responsive"
                width="100%"
                height={
                  (moduleIDs[0].acf.module_image.height /
                    moduleIDs[0].acf.module_image.width) *
                  100
                }
                alt="GonoGo modules"

              />
            )}
          </div>
        </FlexBox>
      </div>
    </Section>
  );
}

export default ModulesFilters;

const Section = styled.section`
  background: var(--lightBlue);
  padding: 140px 0;
  @media(max-width: 800px){ 
    padding: 70px 0 ;  
  
  }
`;
const FlexBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  .active {
    background: var(--blue);
    h4 {
      color: white;
    }
    p {
      color: white;
    }
  }
  .module-image-container {
    @media (max-width: 900px) {
      width: 100%;
      margin: 20px auto 40px auto;
      max-width: 500px;
    }
    width: 45%;
  }
`;
const ModuleCardsContainer = styled.div`
  width: 45%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Card = styled.div`
  cursor: pointer;
  display: flex;
  margin: 0 0 20px 0;
  padding: 20px 10px;
  width: 100%;
  background: white;
  .image-container {
    margin-right: 20px;
  }
  .content {
    a {
      font-size: 0.8rem;
      text-decoration: underline;
      color: var(--yellow);
    }
  }
`;
