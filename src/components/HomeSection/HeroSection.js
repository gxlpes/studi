import React from "react";
import { ReactComponent as SVGFile } from "../../images/HeroImage.svg";
import { HeroContainer, HeroBg, SVGImage } from "./HeroSectionStyles";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <SVGFile></SVGFile>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
