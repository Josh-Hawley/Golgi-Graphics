import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { theme } from '../../Theme';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 50%;
    height: 100%;
    background: ${theme.colors.lightestBg};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.6s cubic-bezier(.62,.13,.54,.85);
    /* opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')}; */
    left: ${({ isOpen }) => (isOpen ? '100%' : '50%')};
    box-shadow: inset 80px 0px 50px  -50px rgba(0,0,0,0.25);
  

`;

export const CloseIcon = styled(FaTimes)`
    color: ${theme.colors.darkTxt};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;
   color: ${theme.colors.darkTxt};
   cursor: pointer; 
   

   &:hover {
    color: ${theme.colors.accent};
    transition: 0.2s ease-in-out;
   }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background-color: ${theme.colors.accent};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${theme.colors.superLightTxt};
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    box-shadow:  20px 10px 40px rgba(0, 0, 0, 0.25);
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${theme.colors.accentLight};
        color: ${theme.colors.darkTxt};
    }
`
