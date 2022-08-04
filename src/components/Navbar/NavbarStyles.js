import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  height: 83px;
  width: 100%;
  justify-content: center;
  display: flex;
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
  align-items: center;
  width: 100%;
  height: 83px;
  z-index: 1;
  padding: 0 2rem;
  max-width: 1100px; ;
`;

export const NavLogo = styled(LinkRouter)`
  color: #ec925d;
  letter-spacing: -0.05rem;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    left: 50%;
    font-size: 1.8rem;
    cursor: pointer;
    color: #23272f;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 75px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #3f3f3f;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid purple;
  }
  &:hover {
    color: #3f90a8;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 7px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;

  &hover {
    transition: all 0.2 ease-in-out;
    background-color: #fff;
    color: #fafafa;
  }
`;

export const NavBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
