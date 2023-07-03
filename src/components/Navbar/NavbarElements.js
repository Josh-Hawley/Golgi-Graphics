import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { theme } from '../../Theme';




export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? `${theme.colors.lightestBg}` : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;
  /* max-width: 1400px; */
`;

export const NavLogo = styled(LinkR)`
  color: ${theme.colors.darkTxt};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;
  /* max-width:200px; */
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
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  list-style: none;
  text-align: center;
  /* margin-right: 0vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${theme.colors.darkTxt};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 20px;
  height: 100%;
  cursor: pointer;



  &.active {
    border-bottom: 3px solid ${theme.colors.accent};
  }

  &:hover {
    color: ${theme.colors.accent};
    transition: 0.2s ease-in-out;
    /* border-bottom: 1px solid #01bf71; */
  } 

  
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${theme.colors.accent};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${theme.colors.superLightTxt};
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: 0.2 ease-in-out;
    background: ${theme.colors.accentLight};
    color: ${theme.colors.darkTxt};
  }
`