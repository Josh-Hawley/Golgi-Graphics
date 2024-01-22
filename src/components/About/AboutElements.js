import styled from 'styled-components';
import { theme } from '../../Theme';
import {Link} from 'react-router-dom';

export const AboutContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? `${theme.colors.lightBg}`: `${theme.colors.lightestBg}`)};
    z-index: 5;
    /* background: blue; */
    /* width: 100%; */
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    } 
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    margin-right: auto;
    margin-left: auto;

 
        display:flex;
    align-items:center;
    justify-content:center;
    margin-right:auto;
    margin-left: auto;
    
    
    
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: ${theme.colors.lightTxt};
    /* color: #FFC234; */
    /* color: #ffd166; */
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    color: ${theme.colors.darkTxt};
    margin-bottom: 24px;
    font-size: ${theme.fontSizes.large};
    line-height: 1.1;
    /* font-weight: ${theme.fontWeights.bold}; */
    /* font-family: 'seravek-web'; */
    font-family: ${theme.font.header}, sans-serif;
    font-weight: ${theme.fontWeights.header};
    /* font-family: 'Title Font'; */
    /* background: red; */
    /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')}; */

    @media screen and (max-width: 1400px) {
        font-size: calc(0.8*${theme.fontSizes.large});
    }

    @media screen and (max-width: 768px) {
      font-size: calc(0.65*${theme.fontSizes.large});
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: ${theme.fontSizes.small};
    line-height: 24px;
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.darkishTxt}
    /* color: ${({darkText}) => (darkText ? '#010606' : '#fff')}; */
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 40vw;
    max-width: 400px;
    /* margin: 0 0 10px 0; */
    /* padding-right: 0; */

    @media screen and (max-width: 768px) {
        width: 60vw;
    }

`;

export const Button = styled(Link)`
    border-radius: 50px;
    /* background: ${({primary}) => (primary ?  `${theme.colors.accentLight}` : `${theme.colors.accent}`)}; */
    white-space: nowrap;
    background: #FFC0C9;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ?  `${theme.colors.darkTxt}` : `${theme.colors.superLightTxt}`)};
    /* font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; */
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({dark}) => (dark ?  `${theme.colors.superLightTxt}` : `${theme.colors.darkTxt}`)};
        /* background: ${({primary}) => (primary ?  `${theme.colors.accent}` : `${theme.colors.accentLight}`)}; */
    background: #FA6A80;
    }
`;