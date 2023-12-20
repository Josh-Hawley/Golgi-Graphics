import React from 'react'
import {SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, SideBarBlackOut, ArrowIconStyling} from './SidebarElelments';
// import { theme } from '../../Theme';
// import { ReactComponent as RightArrow } from '../../images/Icons/right arrow.svg'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
    
    <SideBarBlackOut isOpen={isOpen} onClick={toggle}>
      <ArrowIconStyling onClick={toggle} isOpen={isOpen}>
        
        {/* <RightArrow style = {{textShadow: '20px 0px 30px  -5px rgba(0,0,0,1)', fill: `${theme.colors.darkTxt}` }}/> */}
      </ArrowIconStyling>
    
    </SideBarBlackOut>
    <SidebarContainer isOpen={isOpen}>
 

      <SidebarWrapper>

        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-60} activeClass="active">Home</SidebarLink>
          <SidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-60} activeClass="active">Services</SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-60} activeClass="active">Portfolio</SidebarLink>
          <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-60} activeClass="active">About</SidebarLink>
        </SidebarMenu>

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

export default Sidebar;
