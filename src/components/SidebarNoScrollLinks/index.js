import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenuNoScroll, SidebarLinkNoScroll, SidebarRoute, SideBtnWrap} from '../Sidebar/SidebarElelments';

const SidebarNoScrollLinks = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>

        <SidebarMenuNoScroll>
          <SidebarLinkNoScroll to="/" >Home</SidebarLinkNoScroll>
        </SidebarMenuNoScroll>

        <SideBtnWrap>
          <SidebarRoute to="/contact">
            Contact
          </SidebarRoute>
        </SideBtnWrap>

      </SidebarWrapper>

    </SidebarContainer>
  );
}

export default SidebarNoScrollLinks;
