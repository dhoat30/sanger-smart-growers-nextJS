import React, { useContext, useEffect, useState } from "react";
import Header from "./UI/Header/Header";
import { useRouter } from "next/router";

import VideoContext from "../Store/video-context";
import Overlay from "./UI/Overlay/Overlay";
import Footer from "./UI/Footer/Footer";
import LoadingAnimation from "./UI/LoadingAnimation/LoadingAnimation";
import BackToTop from "./UI/Footer/BackToTop/BackToTop";
import Consent from "./UI/Consent/Consent";
import BottomNav from "./UI/BottomNavigation/BottomNavigation";

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
      <Footer
        footerData={props.children.props.menuData && props.children.props.menuData} />
      <BottomNav />
      <Consent />
      <BackToTop />
    </div>
  );
}

export default Layout;
