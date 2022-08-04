import {
  HeroContainer,
  SVGImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroText,
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
      <HeroContent>
        <SVGImage />
        <HeroText>
          <HeroH1>Learn new techniques to improve your studying.</HeroH1>
          <HeroP>Sign up for a new account today and try our services!</HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              fontBig="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
