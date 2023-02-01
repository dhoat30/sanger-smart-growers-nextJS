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
  ]
}

function Footer({ footerData }) {
  console.log(footerLinks)
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Container>
      <TechCarousel logoArr={footerData.companies_we_work_with} />
      <FooterStyle>
        {/* desktop footer columns  */}
        {matches ?
          <Box  >
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
              </Grid>

            </Grid>
          </Box> :
          // mobile footer accordion 
          <MobileFooter footerData={footerData} />
        }


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
      padding: 54px 0;
      ul{ 
        list-style: none ;
      }
      `;

