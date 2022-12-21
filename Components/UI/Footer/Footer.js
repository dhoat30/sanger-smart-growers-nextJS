import React from "react";
import Link from "next/link";
import styled from "styled-components";
import FooterLinkColumn from "./FooterLinkColumns/FooterLinkColumn";
import FooterContact from "./FooterContact/FooterContact";
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileFooter from "./MobileFooter/MobileFooter";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';


function Footer({ footerData }) {
  const matches = useMediaQuery('(min-width:700px)');

  return (

    <FooterStyle>
      {/* desktop footer columns  */}
      {matches ?
        <Box  >
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 8 }} justifyContent="center"
          >
            <Grid lg={3} md={3} sm={3}>
              <FooterLinkColumn
                title="FOR GROWERS"
                linkData={footerData.growers}
              />
            </Grid>
            <Grid lg={3} md={3} sm={3}>
              <FooterLinkColumn
                title="OUR COMPANY"
                linkData={footerData.our_company}
              />
            </Grid>
            <Grid lg={3} md={4} sm={4}>
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

      {/*   <div className="links">
       <h6 className="footer_head_text">Links</h6>
       <ul>{extraLinks}</ul>
     </div>
     <div className="legal">
       <h6 className="footer_head_text">Legal</h6>
       <ul>{legalLinks}</ul>
     </div>
   </div>

   <div className="copyright">
     <div className="copyright-text">
       <p>Copyright © 2022 GonoGo | Built By WebDuel</p>
     </div> */}
    </FooterStyle>
  );
}

export default Footer;
const FooterStyle = styled.footer`
      background: var( --sanger--theme--black);
      padding: 54px 0;

      h5{
        margin - top: 10px;
  }
      /* .site-footer{
        display: flex ;
      justify-content: center;
      column-gap: 200px;
      row-gap: 20px;
      @media(max-width: 1200px){
        column - gap: 70px;
    }
      @media(max-width: 900px){
        column - gap: 30px;
      flex-wrap: wrap;
      justify-content: flex-start;
    } */

  /* } */
      `;
