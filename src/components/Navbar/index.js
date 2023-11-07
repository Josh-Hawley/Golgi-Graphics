import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { theme } from '../../Theme';
// import logo_and_text from '../../images/logo and text 2.png'
import {ReactComponent as LogoText} from '../../images/logo and text.svg'
// import {ReactComponent as LogoText} from '../../images/Icons/infographics icon.svg'

const Navbar = ({ toggle, isOpen }) => {
    
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

    const toggleHome = () => {
        scroll.scrollToTop( {
            duration: 800,
        })
    }

   


  return (
    <>
    <IconContext.Provider value = {{color: `${theme.colors.darkTxt}`}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer scrollNav = {scrollNav}>
                <NavLogo to='/' onClick={toggleHome}>
                    <LogoText style={{ padding: '0', margin: '0'}}/>
                </NavLogo>
                
                
                <MobileIcon onClick={toggle} isOpen={isOpen}>
                    <FaBars />
                    {/* <FaChevronCircleRight/> */}
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to='home' smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">Home</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">Services</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">Portfolio</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">About</NavLinks>
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








// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router'; // Use useNavigate from react-router instead of useHistory
// import { FaBars } from 'react-icons/fa';
// import { animateScroll as scroll, scroller } from 'react-scroll';
// import { IconContext } from 'react-icons/lib';
// import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLogoImage } from './NavbarElements';
// import { theme } from '../../Theme';
// import logo_and_text from '../../images/logo and text 2.png';

// const Navbar = ({ toggle }) => {
//   const navigate = useNavigate(); // Use useNavigate from react-router instead of useHistory
//   const [scrollNav, setScrollNav] = useState(false);

//   const changeNav = () => {
//     if (window.scrollY >= 1) {
//       setScrollNav(true);
//     } else {
//       setScrollNav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', changeNav);
//     return () => {
//       window.removeEventListener('scroll', changeNav);
//     };
//   }, []);

//   const closeMobile = () => {
//     // Implement your close mobile navigation functionality here, if required
//   };

//   const toggleHome = async () => {
//     await closeMobile();
//     navigate('/'); // Use navigate('/'); to change the route to the homepage
//     scroll.scrollToTop(); // Scroll to the top
//   };

//   const goToSectionAndScroll = async (sectionId) => {
//     await closeMobile();
//     navigate(`/`); // Use navigate(`/${sectionId}`); to change the route to the specified section
//     await scroller.scrollTo(sectionId, {
//       duration: 800,
//       delay: 0,
//       smooth: true,
//       offset: -60,
//     });
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: `${theme.colors.darkTxt}` }}>
//         <Nav scrollNav={scrollNav}>
//           <NavbarContainer scrollNav={scrollNav}>
//             <NavLogo to="/" onClick={toggleHome}>
//               <NavLogoImage src={logo_and_text} />
//             </NavLogo>

//             <MobileIcon onClick={toggle}>
//               <FaBars />
//             </MobileIcon>

//             <NavMenu>
//               <NavItem>
//                 <NavLinks onClick={() => goToSectionAndScroll('home')} smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">
//                   Home
//                 </NavLinks>
//               </NavItem>

//               <NavItem>
//                 <NavLinks onClick={() => goToSectionAndScroll('services')} smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">
//                   Services
//                 </NavLinks>
//               </NavItem>

//               <NavItem>
//                 <NavLinks onClick={() => goToSectionAndScroll('portfolio')} smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">
//                   Portfolio
//                 </NavLinks>
//               </NavItem>

//               <NavItem>
//                 <NavLinks onClick={() => goToSectionAndScroll('about')} smooth={true} duration={800} spy={true} exact="true" offset={-60} activeClass="active">
//                   About
//                 </NavLinks>
//               </NavItem>
//             </NavMenu>

//             <NavBtn>
//               <NavBtnLink to="/contact">Contact</NavBtnLink>
//             </NavBtn>
//           </NavbarContainer>
//         </Nav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Navbar;
