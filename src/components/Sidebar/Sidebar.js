import React from "react";
import { SidebarContainer, Icon, CloseIcon } from "./SidebarStyles";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="cases">Cases</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
            <SidebarLink to="reviews">Reviews</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
