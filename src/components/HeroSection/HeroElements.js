import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { theme } from '../../Theme';
import { Link as LinkS} from 'react-scroll';


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
    height: 100%;
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

export const ImageBgBackground = styled.img`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    /* background: blue; */
    /* background: #232a34; */
    /* position: absolute;

    overflow: hidden; */
 
    
    /* position: absolute; */
    width:100%;

    
    top: 0px;
    left: 0;
    bottom: 0;
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left; 
    z-index:1;
    overflow: hidden;
    position: relative;
`;
export const ImageVesicles = styled.img`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    /* background: blue; */
    /* background: #232a34; */
    /* position: absolute;

    overflow: hidden; */
    z-index: 2;
    
    /* position: absolute; */
    width:100%;
    position: relative;

    
    top: 0;
    left: 0;
    bottom: 0;
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left; 
    
    overflow: hidden;
`;

export const ImageVesicle1 = styled.img`
    width: 100px;
  z-index: 1;
  position: absolute;
  
  @media screen and (max-width: 768px) {
       width: 50px;
    }

`;

export const ImageVesicle2 = styled.img`
    width: 100px;
  z-index: 1;
  position: absolute;
  
  @media screen and (max-width: 768px) {
       width: 50px;
    }

`;

export const ImageVesicle3 = styled.img`
    width: 100px;
  z-index: 1;
  position: absolute;

  @media screen and (max-width: 768px) {
       width: 50px;
    }

`;

export const ImageVesicle4 = styled.img`
    width: 100px;
  z-index: 1;
  position: absolute;

  @media screen and (max-width: 768px) {
       width: 50px;
    }

`;

export const ImageGolgi = styled.img`
  width: 600px;
  z-index: 4;
  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 768px) {
       width: 300px;
    }

`;

// export const ImageGolgi = styled.img`
//     width: 100%;
//     height: 100vh;
//     -o-object-fit: cover;
//     object-fit: cover;
//     /* background: blue; */
//     /* background: #232a34; */
//     /* position: absolute;
    

//     overflow: hidden; */
//     z-index: 3;
//     position: relative;
    
//     /* position: absolute; */
//     width:100%;

    
//     top: -100vh;
//     left: 0;
//     bottom: 0;
    
//     background-repeat: no-repeat;
//     background-size: contain;
//     background-position: top left; 
    
//     overflow: hidden;
// `;

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

export const HeroBtnLink = styled(LinkS)`
  border-radius: 50px;
  
  white-space: nowrap;
  padding: 10px 22px;
  
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background: ${theme.colors.accentLight};
  color: ${theme.colors.darkTxt};

  &:hover{
    transition: 0.2 ease-in-out;
    color: ${theme.colors.superLightTxt};
    background: ${theme.colors.accent};
  }
`

// export const HeroBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 25px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `
