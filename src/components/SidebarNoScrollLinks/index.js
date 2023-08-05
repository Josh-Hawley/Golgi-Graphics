import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenuNoScroll, SidebarLinkNoScroll, SidebarRoute, SideBtnWrap, ArrowIconStyling, SideBarBlackOut} from '../Sidebar/SidebarElelments';
import { ReactComponent as RightArrow } from '../../images/Icons/right arrow.svg'
import { theme } from '../../Theme';

const SidebarNoScrollLinks = ({isOpen, toggle}) => {
  return (
<>

    <SideBarBlackOut isOpen={isOpen} onClick={toggle}>
      <ArrowIconStyling onClick={toggle} isOpen={isOpen}>
        
        <RightArrow style = {{textShadow: '20px 0px 30px  -5px rgba(0,0,0,1)', fill: `${theme.colors.darkTxt}` }}/>
      </ArrowIconStyling>
    
    </SideBarBlackOut>

    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>

        <SidebarMenuNoScroll>
          <SidebarLinkNoScroll to="/" >Home</SidebarLinkNoScroll>
          <SidebarLinkNoScroll to="/gallery" >Portfolio</SidebarLinkNoScroll>
        </SidebarMenuNoScroll>

        <SideBtnWrap>
          <SidebarRoute to="/contact">
            Contact
          </SidebarRoute>
        </SideBtnWrap>

      </SidebarWrapper>

    </SidebarContainer>
    </>
  );
}

export default SidebarNoScrollLinks;
