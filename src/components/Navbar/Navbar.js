import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnWrapper,
  NavBtnLink,
} from "./NavbarStyles";
import { Button } from "../../components/ButtonElement";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Studi</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Cases</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Reviews</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtnWrapper>
            <Button>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </Button>
          </NavBtnWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
