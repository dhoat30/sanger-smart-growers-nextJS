import React, { useContext, useEffect, useState } from "react";
import Header from "./UI/Header/Header";
import { useRouter } from "next/router";

import VideoContext from "../Store/video-context";
import Overlay from "./UI/Overlay/Overlay";
import Footer from "./UI/Footer/Footer";
import LoadingAnimation from "./UI/LoadingAnimation/LoadingAnimation";
import BackToTop from "./UI/Footer/BackToTop/BackToTop";
import Consent from "./UI/Consent/Consent";

function Layout(props) {
  return (
    <div>
      <Header
        logo={
          props.children.props.menuData &&
          props.children.props.menuData.logo
        }
        mainNav={props.children.props.menuData && props.children.props.menuData.main_navbar}
        services={props.children.props.menuData && props.children.props.menuData.services}
      />
      <main>{props.children}</main>


      <BackToTop />
      <Footer
        footerData={props.children.props.menuData && props.children.props.menuData} />
      <Consent />
    </div>
  );
}

export default Layout;
