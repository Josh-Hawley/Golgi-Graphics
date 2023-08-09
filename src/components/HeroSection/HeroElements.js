import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { theme } from '../../Theme';
import { Link as LinkS} from 'react-scroll';


export const HeroH1 = styled.h1`
    color: ${theme.colors.darkTxt};
    font-size: 120px;
    text-align: center;
    font-weight: 700;
    /* max-width: 700px; */

    @media screen and (max-width: 1400px) {
        font-size: 90px;
    }

    @media screen and (max-width: 768px) {
        font-size: 65px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`;

export const HeroContainer = styled.div`
    background-color: ${theme.colors.lighterBg};
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
    height: 100vh;
    min-height:700px;
    position: relative;
    z-index: 1;
    justify-content: center;
    /* offset:-60px; */
    /* background: orange; */
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



export const ImageBgBackground = styled.img`

    z-index:0;
    width: 600px;
  position: static;
  right: 0;
  bottom: 0;
`;

export const ImageVesicles = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

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

export const ImageVesicle = styled.img`
    width: 100px;
  z-index: 1;
  position: absolute;
  
  @media screen and (max-width: 1300px) {
       width: 90px;
    }
    @media screen and (max-width: 700px) {
    width: 70px;
  }

  @media screen and (max-width: 450px) {
    width: 55px;
  }

`;



export const ImageGolgi = styled.img`
  width: 500px;
  z-index: 4;
  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 1300px) {
    width: 450px;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
  }

`;



export const ImageContainer = styled.div`
  
  position: absolute;
  width: 100%;
  height: 100%; 
  overflow: hidden;
  z-index:1;
`;


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1600px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;




export const HeroP = styled.p`
    margin-top: 24px;
    color: ${theme.colors.darkTxt};
    font-size: 30px;
    text-align: center;
    max-width: 700px;
    font-weight: 300;

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
