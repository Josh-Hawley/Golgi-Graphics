import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { theme } from '../../Theme';




export const Nav = styled.nav`
 height: 60px;
  margin-top: -60px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 1rem;
  position: sticky;
  top: 0px;
  z-index: 100;
  transition: 0.8s all ease;
  overflow: hidden;
  

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
/* background: ${({scrollNav}) => (scrollNav ? `${theme.colors.lightestBg}` : 'transparent')}; */
  background: ${theme.colors.lightestBg};
  /* box-shadow: 0px 0px 30px  rgba(0,0,0,0.1); */
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;
  overflow: hidden;
  position: fixed;
  top: 0px;
  transition: 0.8s all ease;
  
  
  /* max-width: 1400px; */
`;

export const NavLogo = styled(LinkR)`
  color: ${theme.colors.darkTxt};
  /* justify-self: flex-start; */
  cursor: pointer;
  /* font-size: 30px; */
  /* display: flex; */
  /* align-items: left; */
  /* margin-left: 0px; */
  /* font-weight: bold; */
  /* text-decoration: none; */
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
    transform: translate(-75%, 45%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    /* display:${({ isOpen }) => (isOpen ? 'none' : 'block')}; */
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled(LinkS)`
  color: ${theme.colors.darkTxt};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  /* padding: 0 1rem; */
  font-size: 20px;
  height: 100%;
  width: 110px;
  cursor: pointer;
  transition: ease-in-out 0.08s;



  &.active {
    /* border-bottom: 3px solid ${theme.colors.accent};
    color: ${theme.colors.accent}; */
    /* border-bottom: 3px solid ${theme.colors.darkTxt}; */
    color:${theme.colors.darkTxt};
    font-weight: 700;
    font-size: 24px;
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
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${theme.colors.accentLight};
  white-space: nowrap;
  padding: 8px 18px;
  color: ${theme.colors.darkTxt};
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: 0.2 ease-in-out;
    background: ${theme.colors.accent};
    color: ${theme.colors.superLightTxt};
  }
`