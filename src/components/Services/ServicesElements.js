

import styled from 'styled-components';
import { theme } from '../../Theme';
import {Link} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';



export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? `${theme.colors.lightBg}`: `${theme.colors.lightestBg}`)};
    
    z-index: 5;
    position: relative;
    
    overflow: hidden;
    /* background: blue; */
    
   
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    justify-content: center;
    align-items: center;
    


`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    margin-left: auto;
    margin-right: auto;
    

    
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        grid-auto-columns: minmax(auto, auto);
        
    }
`;

export const Column1 = styled.div`

    padding: 0 25px;
     margin-right: auto;
    margin-left: auto;
    /* width:100%; */
    /* justify-content: center;
    align-items: center; */
    

    grid-area: col1;
`;

export const Column2 = styled.div`
 
    
    padding: 0 5px;
    margin-right: auto;
    margin-left: auto;
    
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* background: red; */
  
    overflow: hidden;  



    @media screen and (max-width: 768px){
        width: 100vw;

    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    padding-top: 60px;


`;

export const TopLine = styled.p`
    /* color: ${theme.colors.accentLight}; */
    color: ${theme.colors.lightTxt};
    font-size: ${theme.fontSizes.xsmall};
    font-weight: ${theme.fontWeights.medium};
    letter-spacing: 1.2px;
    text-transform: uppercase;

    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    color: ${theme.colors.darkTxt};
    margin-bottom: 24px;
    font-size: ${theme.fontSizes.large};
    line-height: 1.1;
    font-weight: 400;
    /* text-transform: uppercase; */
    /* font-family: 'Josefin sans'; */
    /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')}; */

    @media screen and (max-width: 480px) {
        font-size: calc(0.8*${theme.fontSizes.large});
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: ${theme.fontSizes.small};
    line-height: 24px;
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.darkishTxt};
    /* color: ${({darkText}) => (darkText ? '#010606' : '#fff')}; */
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;



/* export const ImgConstrainBox = styled.div`
overflow: hidden;

` */



export const Button = styled(Link)`
    border-radius: 50px;
    
    white-space: nowrap;
    background: ${theme.colors.accent};
    /* padding: ${({big}) => (big ? '14px 48px' : '12px 30px')}; */
    padding: 10px 22px;
    color: ${({dark}) => (dark ?  `${theme.colors.superLightTxt}` : `${theme.colors.darkTxt}`)};
    /* font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; */
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.normal};
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
        color: ${({dark}) => (dark ?  `${theme.colors.darkTxt}` : `${theme.colors.superLightTxt}`)};
        /* background: ${({primary}) => (primary ?  `${theme.colors.accent}` : `${theme.colors.accentLight}`)}; */
    background: ${theme.colors.accentLight};
    }
`;



export const Container = styled(LinkS)`
    width: 100%;
    height: 33.3%;
    background: transparent;
    /* overflow: hidden; */
    /* margin-top: -5%; */
    /* margin-bottom: 10%; */
`
export const ContainerTop = styled(LinkS)`
    width: 100%;
    height: 33%;
    background: transparent;
    overflow: hidden;

    

`
export const ContainerBottom = styled(LinkS)`
    width: 100%;
    height: 33%;
    background: transparent;
    overflow: hidden;
    /* margin-top: -10%; */

`

export const Inner = styled.div`

    width: 100%;
    height: 100%;
    display: flex;

    
   
    justify-content: center;
    align-items: center;
    clip-path:  polygon(100% -10%, 100% 90%, -0% 110%, 0 10%);
    transition: clip-path .3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`
export const InnerTop = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
   
    justify-content: center;
    align-items: center;
    clip-path:  polygon(100% 0, 100% 80%, 0% 100%, 0 0%);
    transition: clip-path .3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`
export const InnerBottom = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
   
    justify-content: center;
    align-items: center;
    clip-path:  polygon(100% 0, 100% 100%, 0% 100%, 0 20%);
    transition: clip-path .3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`

export const Img = styled.img`
  
  height: 200px;
  width: 200px;

  @media screen and (max-width: 768px) {
    height: 150px;
  width: 150px;
    }

    
`;

export const IconTitle = styled.h2`
    color: ${theme.colors.darkTxt};

    position: relative;
    z-index: 10;
    text-align: center;

    font-weight: 400;
    font-size: ${theme.fontSizes.medium};

    border-radius: 10px;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }


`


export const DarkOverlay = styled.div`
  /* Full-screen overlay */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Dark background with transparency */
  background-color: rgba(100, 100, 100, 0.1);
  /* Change the last value (0.5) to adjust the darkness level (0 = fully transparent, 1 = fully opaque) */
  pointer-events: none;

  /* &:hover{
    background-color: rgba(100, 100, 100, 0);

  } */

  
  `;

  export const IconTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    width: 200px;
    

    @media screen and (max-width: 768px) {
    height: 250px;
    width: 167px;
    }

    @media screen and (max-width: 400px) {
    height: 200px;
    width: 134px;
    }

    
  `

  export const ImgWrap = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
    /* height: 200px; */
    /* transition: 0.1s all ease-in-out; */

    &:hover{
        /* transform: translateY(-5px); */
        cursor: pointer;
    }

`;