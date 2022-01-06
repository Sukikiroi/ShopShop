import React from "react";
//Component
import NavbarMobile from "../components/mobile/navbar";
import NavbarDesktop from "../components/desktop/navbar";
import NavigationMobile from "../components/mobile/navigationMobile";
import SectionMobile from "../containers/mobile/section";
import SectionDesktop from "../containers/desktop/section";
import CategorySection from "../containers/desktop/categorySection";

//packages
import { isMobile } from "react-device-detect";

// HOCs
import { useGetPokemonByNameQuery } from "../services/pokemon";

const HomePage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);
  return (
    <div>
      {/* {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      {isMobile ? "" : <CategorySection />} */}
 
      {isMobile ? <SectionMobile /> : <SectionDesktop />}
      {/* <NavigationMobile /> */}
    </div>
  );
};

export default HomePage;
