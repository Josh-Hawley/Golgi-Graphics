import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElelments';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>

        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Home</SidebarLink>
          <SidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Services</SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Portfolio</SidebarLink>
          <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/contact">
            Contact
          </SidebarRoute>
        </SideBtnWrap>

      </SidebarWrapper>

    </SidebarContainer>
  );
}

export default Sidebar;
