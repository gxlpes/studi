import { ReactComponent as SVGFile } from "../../images/HeroImage.svg";
import {
  HeroContainer,
  HeroBg,
  SVGImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionStyles";
import { Button } from "../ButtonElement";
import { useState } from "react";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <SVGImage>
          <SVGFile></SVGFile>
        </SVGImage>
      </HeroBg>
      <HeroContent>
        <HeroH1>Learn new techniques to study better.</HeroH1>
        <HeroP>Sign up for a new account today and try our services!</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
