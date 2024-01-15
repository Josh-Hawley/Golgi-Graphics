import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { theme } from '../../Theme';


export const SideBarBlackOut = styled.aside`
    position: fixed;
    z-index: 999;
    overflow: hidden;
    /* width: 100%; */
    height: 100vh;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s cubic-bezier(.62,.13,.54,.85);
    /* background: red; */
    
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    width: ${({ isOpen }) => (isOpen ? '50%' : '100%')};
    background: ${({ isOpen }) => (isOpen ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)')};
    touch-action: none;
  

`;

export const ArrowIconStyling = styled.div`

    position: absolute;
    /* transform: translate(10%, 10%); */
    /* font-size: 15rem; */
    width: 100%;
    left:0;
   
    cursor: pointer;
    color: ${theme.colors.darkTxt};
    transition: all 0.3s cubic-bezier(.62,.13,.54,.85);
    
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    /* text-shadow: 20px 0px 30px  -5px rgba(0,0,0,0.1); */
`


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    overflow: hidden;
    width: 50%;
    height: 100vh;
    background: ${theme.colors.lightestBg};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s cubic-bezier(.62,.13,.54,.85);
    /* opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')}; */
    left: ${({ isOpen }) => (isOpen ? '50%' : '100%')};
    box-shadow: inset 20px 0px 30px  -5px rgba(0,0,0,0.1);
  
    touch-action: none;
`;



export const CloseIcon = styled(FaTimes)`
    color: ${theme.colors.darkishTxt};
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    transition: 0.2s ease-in-out;
    font-size: 1em;
    
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
    grid-template-rows: repeat(5, 60px);
    text-align: center;
    

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: ${theme.fontSizes.small};
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;
   color: ${theme.colors.lightTxt};
   font-family: 'Nav font';
   /* text-transform: uppercase; */
   cursor: pointer; 
   

   &:hover {
    color: ${theme.colors.accent};
    transition: 0.2s ease-in-out;
   }
`;


export const SidebarMenuNoScroll = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 60px);
    text-align: center;
    

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 60px);
    }
`
export const SidebarLinkNoScroll = styled(LinkR)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 18px;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;
   color: ${theme.colors.lightTxt};
   font-family: 'Nav font';
   /* text-transform: uppercase; */
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
    padding: 10px 22px;
    color: ${theme.colors.superLightTxt};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.normal};
    font-family: 'Button font';
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    line-height: 1;
  padding-bottom: 14px;
    /* box-shadow:  20px 10px 40px rgba(0, 0, 0, 0.25); */
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${theme.colors.accentLight};
        color: ${theme.colors.darkTxt};
    }
`

