import styled from 'styled-components';
import { theme } from '../Theme';
export const PageContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    transition: 0.3s cubic-bezier(.62,.13,.54,.85);
    left: ${({ isOpen }) => (isOpen ? '-50%' : '0%')};
    
`

export const HorzLine = styled.hr`
    height: 0px;
    color: 'red';
    /* width:90%; */
    margin-left:1vw;
    margin-right: 1vw;
    background-color: ${theme.colors.darkTxt};
    box-shadow: 10px 10px 5px black;
`