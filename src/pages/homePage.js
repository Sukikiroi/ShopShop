import React from "react";
//Component
import NavbarMobile from "../components/mobile/navbar";
import NavbarDesktop from "../components/desktop/navbar";
import NavigationMobile from "../components/mobile/navigationMobile";
import SectionMobile from "../containers/mobile/section";
import SectionDesktop from "../containers/desktop/section";

//packages
import { isMobile } from "react-device-detect";

const homePage = () => {
  return (
    <div>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      {isMobile ? <SectionMobile /> : <SectionDesktop />}
      <NavigationMobile />
    </div>
  );
};

export default homePage;
