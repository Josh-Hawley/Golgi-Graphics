import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLogoImage} from './NavbarElements';
import { theme } from '../../Theme';
import logo_and_text from '../../images/logo and text 2.png'

const Navbar = ({ toggle }) => {
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value = {{color: `${theme.colors.darkTxt}`}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer scrollNav = {scrollNav}>
                <NavLogo to='/' onClick={toggleHome}>
                    <NavLogoImage src={logo_and_text} />
                </NavLogo>
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to='home' smooth={true} duration={800} spy={true} exact='true' offset={-80} activeClass="active">Home</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={800} spy={true} exact='true' offset={-80} activeClass="active">Services</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='portfolio' smooth={true} duration={800} spy={true} exact='true' offset={-80} activeClass="active">Portfolio</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={800} spy={true} exact='true' offset={-80} activeClass="active">About</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/contact">Contact</NavBtnLink>
                </NavBtn>

            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;
