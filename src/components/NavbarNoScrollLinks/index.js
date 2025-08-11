import React, {useState, useEffect} from 'react';
// import {FaBars} from 'react-icons/fa';

import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavBtn, NavBtnLink, BurgerWrap, BurgerBarMid} from '../Navbar/NavbarElements';
import { theme } from '../../Theme';
// import logo_and_text from '../../images/logo and text 2.png'
import {ReactComponent as LogoSVG} from '../../images/logo_and_text.svg';
import FramerMagnetic from '../FramerMagnetic';

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
                    {/* <NavLogoImage src={logo_and_text} /> */}
                    <LogoSVG style={{ width: 'auto', height: '100%', display: 'block', padding: '8px 8px 8px 0'}}/>
                </NavLogo>
                
                
                <MobileIcon onClick={toggle}>
                    
                    <BurgerWrap>
                        {/* <BurgerBarLong/>
                        <BurgerBarShort/> */}
                        <BurgerBarMid/>
                        <BurgerBarMid/>
                    </BurgerWrap>    
               
                </MobileIcon>

                <NavMenu>
                    
                </NavMenu>

                <NavBtn>
                <FramerMagnetic scalingX={0.3} scalingY={1}>
                    <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </FramerMagnetic>
                </NavBtn>

            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  );
}

export default NavbarNoLinks;