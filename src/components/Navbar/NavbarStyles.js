import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import { Link as LinkScroll } from "react-router-dom";

export const Nav = styled.nav`
  background-color: green;
  height: 83px;
  /* margin-top: -83px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    transition: 0.4s all ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 83px;
  width: 100%;
  z-index: 1;
  padding: 0 5rem;
  max-width: 110px; ;
`;

export const NavLogo = styled(LinkRouter)`
  color: purple;
  justify-content: flex-start;=
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
