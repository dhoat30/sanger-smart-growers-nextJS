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


function Footer({ footerData }) {
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
                  linkData={footerData.growers}
                />
              </Grid>
              <Grid item lg={3} md={3} sm={3} >
                <FooterLinkColumn
                  title="OUR COMPANY"
                  linkData={footerData.our_company}
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

