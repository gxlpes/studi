import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { ReactComponent as SVGFile } from "../../images/HeroImage.svg";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 40rem;
  z-index: 1;
`;

export const HeroText = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const SVGContainer = styled.svg`
  width: 100%;
  height: auto;
  object-fit: cover;
  background-color: white;
`;

export const SVGImage = styled(SVGFile)`
  width: clamp(1rem + 15vw, 10rem + 25vw, 40rem + 50vw);

  @media screen (max-width: 768px) {
    margin-top: -10rem;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export const HeroH1 = styled.h1`
  color: #23272f;
  font-size: 48px;
  font-weight: 900;
  text-align: left;
  line-height: 4rem;
  letter-spacing: -0.16rem;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 3rem;
    white-space: normal;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  font-size: 24px;
  color: #23272f;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  letter-spacing: -0.1rem;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
