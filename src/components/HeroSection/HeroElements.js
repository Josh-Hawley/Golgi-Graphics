import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { theme } from '../../Theme';
// import { Link as LinkR} from 'react-router-dom';


export const HeroH1 = styled.h1`
    color: ${theme.colors.darkTxt};
    font-size: 70px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

export const HeroContainer = styled.div`
    background: ${theme.colors.lighterBg};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 100vh;
    position: relative;
    z-index: 1;
    justify-content: flex-start;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
    position: absolute;
    width:100%;

    
    top: 0px;
    left: 0;
    bottom: 0;
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left; 
    z-index:1;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
  /* position: relative;
  width: 100%;
  height: 100%; */
  
  position: absolute;
  width: 100%;
  height: 100%; 
  overflow: hidden;
  z-index:1;
`;


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1400px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    
`;




export const HeroP = styled.p`
    margin-top: 24px;
    color: ${theme.colors.darkTxt};
    font-size: 24px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

// export const HeroBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: ${theme.colors.accent};
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: ${theme.colors.superLightTxt};
//   font-size: 20px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover{
//     transition: 0.2 ease-in-out;
//     background: ${theme.colors.accentLight};
//     color: ${theme.colors.darkTxt};
//   }
// `

// export const HeroBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 25px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `
