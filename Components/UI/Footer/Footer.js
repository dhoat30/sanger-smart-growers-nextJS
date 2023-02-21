import React from "react";
import Link from "next/link";
import styled from "styled-components";
import FooterLinkColumn from "./FooterLinkColumns/FooterLinkColumn";
import FooterContact from "./FooterContact/FooterContact";
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileFooter from "./MobileFooter/MobileFooter";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TechCarousel from "./TechCarousel/TechCarousel";
import FooterSocial from "./FooterSocial/FooterSocial";

const footerLinks = {
  growers: [
    {
      slug: "/services/kiwifruit-orchard-management",
      title: "Kiwifruit Orchard Management",
    },
    {
      slug: "/services/kiwifruit-orchard-contracting",
      title: "Kiwifruit Orchard Contracting",
    },
    {
      slug: "/services/kiwifruit-nursery",
      title: "Kiwifruit Nursery",
    },
    {
      slug: "/services/our-process",
      title: "Our Process",
    },
    {
      slug: "/services/successful-orchards",
      title: "Successful Orchards",
    }
  ],
  ourCompany: [
    {
      slug: "/about-us",
      title: "About Us",
    },
    {
      slug: "/work-with-us",
      title: "Work With Us",
    },
    {
      slug: "/news",
      title: "News",
    },
    {
      slug: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      slug: "/terms-and-conditions/",
      title: "Terms & Conditions",
    },
  ]
}

function Footer({ footerData }) {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Container>
      <TechCarousel logoArr={footerData.companies_we_work_with} />
      <FooterStyle>
        {/* desktop footer columns  */}
        {matches ?
          <Box>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 8 }} justifyContent="center"
            >
              <Grid item lg={3} md={3} sm={3} >
                <FooterLinkColumn
                  title="FOR GROWERS"
                  linkData={footerLinks.growers}
                />
              </Grid>
              <Grid item lg={3} md={3} sm={3} >
                <FooterLinkColumn
                  title="OUR COMPANY"
                  linkData={footerLinks.ourCompany}
                />
              </Grid>
              <Grid item lg={3} md={4} sm={4} >
                <FooterContact
                  title="GET IN TOUCH"
                  email={footerData.email}
                  address={footerData.address}
                  phoneNumber={footerData.phone_number}
                  socialMediaLinks={footerData.social_media_links}
                />
                <FooterSocial />
              </Grid>

            </Grid>
          </Box> :
          // mobile footer accordion 
          <MobileFooter footerData={footerData} footerLinks={footerLinks} />
        }

        <CopyrightSection className="max-width">
          <div className="body-large">
            © 2022 | All Rights Reserved
          </div>
          <div className="body-large">
            <a href="https://webduel.co.nz"
              target="_blank">
              Design By Web<span>Duel</span>
            </a>
          </div>
        </CopyrightSection>
      </FooterStyle>

    </Container>
  );
}

export default Footer;
const Container = styled.footer`
background: white; 
`
const FooterStyle = styled.section`
      background: var( --sanger--theme--black);
      padding: 54px 0 16px 0;
      ul{ 
        list-style: none;
      }
`;

const CopyrightSection = styled.div`
  border-top: 1px solid var(--sanger--theme--sys--dark--secondary);
  @media(max-width: 500px){ 
    border-top: none; 
  }
  color: white; 
  display: flex; 
  padding-top: 16px; 
  justify-content: space-between; 
  margin-top: 32px; 
  flex-wrap: wrap; 
`