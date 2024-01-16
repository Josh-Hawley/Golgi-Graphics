import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { theme } from '../../Theme';




export const Nav = styled.nav`
  height: 60px;
  margin-top: -60px;
  display: flex;
  font-size: 1rem;
  position: sticky;
  z-index: 100;
`;

export const NavbarContainer = styled.div`
/* background: ${({scrollNav}) => (scrollNav ? `${theme.colors.lightestBg}` : 'transparent')}; */
  background: ${theme.colors.lightestBg};
  /* box-shadow: 0px 0px 30px  rgba(0,0,0,0.1); */
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 10;
  width: 100%;
  padding: 0 10px;
  margin: 0;


  position: fixed;
  top: 0px;
  transition: 0.8s all ease;


  
  
  /* max-width: 1400px; */
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
  max-width:154px;
  /* flex-grow: 1; */
  /* justify-self: right; */
`;

export const NavLogoImage = styled.img`
  height: 90%;
` 

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-46%, 40%);
    /* font-size: 2.3rem;
    line-height: 2.5rem; */
   
    cursor: pointer;
    color: #fff;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '0%' : '100%')};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled(LinkS)`
  color: ${theme.colors.lightTxt};
  /* font-family: 'Nav font'; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  padding: 0 1.5rem;
  /* font-size: ${theme.fontSizes.small}; */
  font-weight: ${theme.fontWeights.normal};
  /* line-height: 1; */
  /* padding-bottom: 2px; */
  /* font-family: 'josefin sans'; */
  /* font-family: 'Trap-Medium'; */
  /* font-family: 'Title Font'; */
  height: 100%;
  /* width: 110px; */
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: ease-in-out 0.08s;



  &.active {

    color:${theme.colors.darkTxt};

  }

  &:hover {
    color: ${theme.colors.accent};
    /* transition: 0.2s ease-in-out; */
    /* border-bottom: 1px solid #01bf71; */
  } 

  
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-right: 10px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${theme.colors.accent};
  white-space: nowrap;
  padding: 8px 18px;
  color: ${theme.colors.superLightTxt};
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeights.button};
  padding-bottom: ${theme.padding.button};
  /* font-family: 'Button font'; */
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  line-height: 1;
  /* padding-bottom: 12px; */

  &:hover{
    transition: 0.2 ease-in-out;
    background: ${theme.colors.accentLight};
    color: ${theme.colors.darkTxt};
  }
`