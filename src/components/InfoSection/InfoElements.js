import styled from 'styled-components';
import { theme } from '../../Theme';
import {Link} from 'react-router-dom';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? `${theme.colors.lightBg}`: `${theme.colors.lightestBg}`)};
    z-index: 5;
    /* min-height: 100vh; */
    position: relative;
    width: 100%;
    
    @media screen and (max-width: 768px) {
        /* padding: 100px 0; */
    } 
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* min-height: 100vh; */
    /* width: 100vw; */
    /* max-width: 1500px; */
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        min-height: 50vh;

    }
    
    /* overflow: hidden; */
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    /* margin-bottom: 15px;  */
    /* padding-left: 10px;
     padding-right: 10px; */
     padding: 0 15px;
     margin-right: auto;
    margin-left: auto;
    /* background: red; */
    
    /* @media screen and (max-width: 768px) {
        height: 30vh;
    } */
    /* background: red; */
    

    grid-area: col1;
`;

export const Column2 = styled.div`
    /* margin-bottom: 15px; */
    /* padding: 0 0px; */
    /* grid-area: col2; */
    /* width:120vw; */
    width: 50vw;
    height: calc(100vh - 60px);
    /* border: solid 1px black; */
    
    /* align-items: center; */
    overflow: hidden;  
    @media screen and (max-width: 768px){
        /* height: 70vh; */
        width: 100%;
        height: 60vh;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    padding-top: 60px;
`;

export const TopLine = styled.p`
    color: ${theme.colors.lightTxt};
    /* color: #ffa8b5; */
    font-size: 16px;
    font-weight: ${theme.fontWeights.normal};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    color: ${theme.colors.darkTxt};
    margin-bottom: 24px;
    font-size: ${theme.fontSizes.large};
    line-height: 1.1;
    font-weight: ${theme.fontWeights.bold};
    font-family: 'seravek-web';
    /* font-family: 'Title Font'; */
    /* text-transform: uppercase; */
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
  
    height: 100vh;
    /* width: 50vw; */
    /* background: red; */
    /* align-items: center; */
    
    /* overflow: hidden; */

    @media screen and (max-width: 768px){
        height: 70vh;
        width: 100vw;
    }

 


`;

/* export const ImgConstrainBox = styled.div`
overflow: hidden;

` */

export const Img = styled.img`
  
    width: 100%;
    top:-100px;
    @media screen and (max-width: 768px){
        top: -100px;

    }
    
 
    position: relative;
    
`;

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  `${theme.colors.accent}` : `${theme.colors.accentLight}`)};
    white-space: nowrap;
    /* background: #FFC0C9; */
    /* padding: ${({big}) => (big ? '14px 48px' : '12px 30px')}; */
    padding: 10px 22px;
    color: ${({dark}) => (dark ?  `${theme.colors.superLightTxt}` : `${theme.colors.darkTxt}`)};
    /* font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; */
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.button};
    /* font-family: 'Button font'; */
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    line-height: 1;
    padding-bottom: ${theme.padding.button};
  /* padding-bottom: 14px; */

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({dark}) => (dark ?  `${theme.colors.darkTxt}` : `${theme.colors.superLightTxt}`)};
        background: ${({primary}) => (primary ?  `${theme.colors.accentLight}` : `${theme.colors.accent}`)};
    /* background: #FA6A80; */
    }
`;





export const Layer0 = styled.img`
    width: 85%;
  z-index: 0;
  position: absolute;
  left: 50%;
  /* top: 50%; */
  transform: translate(-50%, -50%);
  /* @media screen and (max-width: 768px) {
    
    transform: translate(-50%, -50%);
 } */
 
`;

export const Layer1 = styled.img`
    width: 85%;
  z-index: 1;
  position: absolute;
  left: 50%;
  /* top: 50%; */
  transform: translate(-50%, -50%);

  /* @media screen and (max-width: 768px) {
    
    transform: translate(-50%, -100%);
 } */
`;

export const Layer2 = styled.img`
    width: 85%;
  z-index: 2;
  position: absolute;
  left: 50%;
  /* top: 50%; */
  transform: translate(-50%, -50%);

  /* @media screen and (max-width: 768px) {
    
    transform: translate(-50%, -100%);
 } */
`;

export const Layer3 = styled.img`
    width: 85%;
  z-index: 3;
  position: absolute;
  left: 50%;
  /* top: 50%; */
  transform: translate(-50%, -50%);

  /* @media screen and (max-width: 768px) {
    
    transform: translate(-50%, -100%);
 } */
`;

export const Layer4 = styled.img`
    width: 85%;
  z-index: 4;
  position: absolute;
  left: 50%;

  transform: translate(-50%, -50%);
  /* @media screen and (max-width: 768px) {
    
    transform: translate(-50%, -100%);
 } */
`;








export const ImageTop = styled.img`
    width: 85%;
  z-index: 10;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  /* bottom: 700px; */
  
  /* @media screen and (max-width: 768px) {
       width: 70px;
    } */

`;

export const ImageMid = styled.img`
    width: 85%;
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  /* bottom: -600px; */
  


`;

export const ImageBottom = styled.img`
  width: 85%;
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 50%;
  /* transform: translateY(-50%); */
  /* bottom: 5px */
  /* bottom: 0; */
  
  /* @media screen and (max-width: 768px) {
       width: 70px;
    } */

`;