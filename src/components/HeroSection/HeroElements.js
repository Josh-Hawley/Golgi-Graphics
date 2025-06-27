import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { theme } from '../../Theme';
import { Link as LinkS} from 'react-scroll';


export const HeroH1 = styled.h1`
    color: ${theme.colors.darkTxt};
    font-size: ${theme.fontSizes.xlarge};
    text-align: left;
    font-weight: ${theme.fontWeights.bold};
    max-width: 1200px;
    /* font-family: 'seravek-web'; */
    font-family: ${theme.font.header}, sans-serif;
    font-weight: ${theme.fontWeights.header};
    /* font-style: normal; */
    
    /* text-transform: uppercase; */
    /* font-family: 'Title Font'; */

    @media screen and (max-width: 1400px) {
        font-size: calc(0.8*${theme.fontSizes.xlarge});
    }

    @media screen and (max-width: 768px) {
      font-size: calc(0.65*${theme.fontSizes.xlarge});
    }

    @media screen and (max-width: 480px) {
      font-size: calc(0.5*${theme.fontSizes.xlarge});
    }
`;

export const HeroContainer = styled.div`
    background-color:${theme.colors.lighterBg};
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
    height: 100vh;
    min-height:700px;
    position: relative;
    z-index: 1;
    justify-content: center;
    width: 100%;
    overflow-x: hidden;
    /* box-shadow: inset 10px 5px 5px red; */
    /* margin-left: auto;
    margin-right: auto; */
    
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
    @media screen and (max-width: 1000px) {
    width: 70px;
  }

  @media screen and (max-width: 500px) {
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
  @media screen and (max-width: 1000px) {
    width: 300px;
  }

  @media screen and (max-width: 500px) {
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
    padding: 8px 15px;
    display: flex;
    flex-direction: column;
    align-items: left;
    
`;




export const HeroP = styled.p`
    margin-top: 12px;
    color: ${theme.colors.darkishTxt};
    font-size: ${theme.fontSizes.small};
    text-align: left;
    max-width: 700px;
    font-weight: ${theme.fontWeights.normal};
    

    /* @media screen and (max-width: 768px) {
        font-size: ${theme.fontWeights.normal};;
    } */


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
  
  /* white-space: nowrap; */
  padding: 6px 22px;
  /* font-family: 'Button font'; */
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeights.button};
  /* text-transform:uppercase; */
  /* font-family: 'seravek-web'; */
  outline: none;
  border: ${theme.colors.darkTxt};;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background: ${theme.colors.accent};
  color: ${theme.colors.superLightTxt};
  /* display: flex;
  align-items: center; */
  line-height: 1;
  padding-bottom: ${theme.padding.button};
  /* vertical-align: baseline; */

  &:hover{
    transition: 0.2 ease-in-out;
    color: ${theme.colors.darkTxt};
    background: ${theme.colors.accentLight};
  }
`

// export const HeroBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 25px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `// import styled from 'styled-components';
// import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
// import { theme } from '../../Theme';
// import { Link as LinkS} from 'react-scroll';


// export const HeroH1 = styled.h1`
//     color: ${theme.colors.darkTxt};
//     font-size: ${theme.fontSizes.xlarge};
//     text-align: left;
//     font-weight: ${theme.fontWeights.bold};
//     max-width: 1200px;
//     /* font-family: 'seravek-web'; */
//     font-family: ${theme.font.header}, sans-serif;
//     font-weight: ${theme.fontWeights.header};
//     /* font-style: normal; */
    
//     /* text-transform: uppercase; */
//     /* font-family: 'Title Font'; */

//     @media screen and (max-width: 1400px) {
//         font-size: calc(0.8*${theme.fontSizes.xlarge});
//     }

//     @media screen and (max-width: 768px) {
//       font-size: calc(0.65*${theme.fontSizes.xlarge});
//     }

//     @media screen and (max-width: 480px) {
//       font-size: calc(0.5*${theme.fontSizes.xlarge});
//     }
// `;

// export const HeroContainer = styled.div`
//     background-color:${theme.colors.lighterBg};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* padding: 0 10px; */
//     height: 100vh;
//     min-height:700px;
//     position: relative;
//     z-index: 1;
//     justify-content: center;
//     width: 100%;
//     overflow-x: hidden;
//     /* box-shadow: inset 10px 5px 5px red; */
//     /* margin-left: auto;
//     margin-right: auto; */
    
//     /* offset:-60px; */
//     /* background: orange; */
// `;

// export const HeroBg = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `;



// export const ImageBgBackground = styled.img`

//     z-index:0;
//     width: 600px;
//   position: static;
//   right: 0;
//   bottom: 0;
// `;

// export const ImageVesicles = styled.img`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;

//     z-index: 2;
    
//     /* position: absolute; */
//     width:100%;
//     position: relative;

    
//     top: 0;
//     left: 0;
//     bottom: 0;
    
//     background-repeat: no-repeat;
//     background-size: contain;
//     background-position: top left; 
    
//     overflow: hidden;
// `;

// // export const ImageVesicle = styled.img`
// //     width: 100px;
// //   z-index: 1;
// //   position: absolute;
  
// //   @media screen and (max-width: 1300px) {
// //        width: 90px;
// //     }
// //     @media screen and (max-width: 1000px) {
// //     width: 70px;
// //   }

// //   @media screen and (max-width: 500px) {
// //     width: 55px;
// //   }

// // `;

// export const ImageVesicle = styled.img`
//     width: 200px;
//   z-index: 1;
//   position: absolute;
  
//   @media screen and (max-width: 1300px) {
//        width: 240px;
//     }
//     @media screen and (max-width: 1000px) {
//     width: 150px;
//   }

//   @media screen and (max-width: 500px) {
//     width: 100px;
//   }

// `;



// export const ImageGolgi = styled.img`
//   width: 1500px; //500px nominal
//   z-index: 4;
//   position: absolute;
//   right: 0;
//   bottom: 0;

//   /* @media screen and (max-width: 1300px) {
//     width: 450px;
//   }
//   @media screen and (max-width: 1000px) {
//     width: 300px;
//   }

//   @media screen and (max-width: 500px) {
//     width: 250px;
//   } */

// `;



// export const ImageContainer = styled.div`
  
//   position: absolute;
//   width: 100%;
//   height: 100%; 
//   overflow: hidden;
//   z-index:1;
// `;


// export const HeroContent = styled.div`
//     z-index: 3;
//     max-width: 1600px;
//     position: absolute;
//     padding: 8px 15px;
//     display: flex;
//     flex-direction: column;
//     align-items: left;
    
// `;




// export const HeroP = styled.p`
//     margin-top: 24px;
//     color: ${theme.colors.darkishTxt};
//     font-size: ${theme.fontSizes.small};
//     text-align: left;
//     max-width: 700px;
//     font-weight: ${theme.fontWeights.normal};
    

//     /* @media screen and (max-width: 768px) {
//         font-size: ${theme.fontWeights.normal};;
//     } */


// `;

// export const HeroBtnWrapper = styled.div`
//     margin-top: 32px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
    
// `;

// export const ArrowForward = styled(MdArrowForward)`
//     margin-left: 8px;
//     font-size: 20px;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//     margin-left: 8px;
//     font-size: 20px;
// `;

// export const HeroBtnLink = styled(LinkS)`
//   border-radius: 50px;
  
//   /* white-space: nowrap; */
//   padding: 6px 22px;
//   /* font-family: 'Button font'; */
//   font-size: ${theme.fontSizes.small};
//   font-weight: ${theme.fontWeights.button};
//   /* text-transform:uppercase; */
//   /* font-family: 'seravek-web'; */
//   outline: none;
//   border: ${theme.colors.darkTxt};;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   background: ${theme.colors.accent};
//   color: ${theme.colors.superLightTxt};
//   /* display: flex;
//   align-items: center; */
//   line-height: 1;
//   padding-bottom: ${theme.padding.button};
//   /* vertical-align: baseline; */

//   &:hover{
//     transition: 0.2 ease-in-out;
//     color: ${theme.colors.darkTxt};
//     background: ${theme.colors.accentLight};
//   }
// `

// // export const HeroBtn = styled.nav`
// //   display: flex;
// //   align-items: center;
// //   margin-right: 25px;

// //   @media screen and (max-width: 768px) {
// //     display: none;
// //   }
// // `
