import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';

import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavBtn, NavBtnLink, NavLogoImage} from '../Navbar/NavbarElements';
import { theme } from '../../Theme';
import logo_and_text from '../../images/logo and text 2.png'

const NavbarNoLinks = ({ toggle }) => {
    
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >= 1) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

 

   


  return (
    <>
    <IconContext.Provider value = {{color: `${theme.colors.darkTxt}`}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer scrollNav = {scrollNav}>
                <NavLogo to='/'>
                    <NavLogoImage src={logo_and_text} />
                </NavLogo>
                
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    
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

export default NavbarNoLinks;