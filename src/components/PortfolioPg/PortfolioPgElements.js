import styled from 'styled-components';
import { theme } from '../../Theme';


export const PageContainer = styled.div`

    /* display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; */
    
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
    
     padding-top: 100px;
     padding-left: 100px;
     padding-right: 100px;
     max-width: 1600px;

     @media screen and (max-width: 768px) {
        padding-left: 45px;
     padding-right: 45px;
    }
  
`;

export const TagsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px;

`
export const TagsContainer = styled.div`
    margin-right: 4px;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 3px 5px;

    font-size: 15px;
    background: #e6e6e6;
    border-radius: 3px;
    color: ${theme.colors.darkTxt};
`

export const GalleryWrap = styled.div`
    columns: 3;
    column-gap: 20px; 

    @media screen and (max-width: 1600px) {
        columns: 3;
    }

    @media screen and (max-width: 1200px) {
        columns: 2;
    }

    @media screen and (max-width: 768px) {
        columns: 1;
    }
`
export const Header = styled.h1`
    color: ${theme.colors.darkTxt};
    font-size: 70px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 80px;
    font-weight:600;


    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    /* @media screen and (max-width: 480px) {
        font-size: 60px;
    } */
`;

























export const PortfolioPgContainer = styled.div`
    /* background: ${theme.colors.lightestBg}; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
    height: 400px;
    position: relative;
    z-index: 0;
    justify-content: center;
    
`;

export const ImageGalleryContainer = styled.div`
    /* background: ${theme.colors.lightestBg}; */
    display: flex;
    justify-content: center;
    align-items: center;
    
     left: 0;
     right: 0;
     top: 0;
    /* z-index: 0; */
     overflow: hidden;
    
     padding-top: 0px;
     padding-left: 40px;
     padding-right: 40px;
     width: 100%;
     max-width: 1200px;
     /* width: 80%; */
     /* margin-bottom: 0px; */
`;
export const ImageGalleryWrap = styled.div`
    /* background: ${theme.colors.lightBg}; */
    /* background: red; */
    padding-bottom: 100px;
    /* margin-bottom: 50px; */
    display: flex; 
    justify-content: center;
    /* align-items: center; */
    
     /* left: 0;
     right: 0;
     top: 0;
    z-index: 0;
     overflow: hidden;
    
     padding-top: 0px;
     padding-left: 40px;
     padding-right: 40px;
     width: 100%;
     margin-bottom: 50px; */ 
`;

export const PortfolioPgContent = styled.div`
    z-index: 3;
    max-width: 1400px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    
    
    
`;


export const H1 = styled.h1`
    color: ${theme.colors.darkTxt};
    font-size: 70px;
    text-align: left;
    padding-top: 50px;


    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

export const ImageContainer = styled.div`
 width:300px;;
`



























// export const PortfolioPgContainer = styled.div`
//     background: ${theme.colors.lightBg};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* padding: 0 10px; */
//     height: 400px;
//     position: relative;
//     z-index: 0;
//     justify-content: center;
    
// `;

// export const ImageGalleryContainer = styled.div`
//     /* background: ${theme.colors.lightBg}; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
    
//      left: 0;
//      right: 0;
//      top: 0;
//     /* z-index: 0; */
//      overflow: hidden;
    
//      padding-top: 0px;
//      padding-left: 40px;
//      padding-right: 40px;
//      width: 100%;
//      max-width: 1200px;
//      /* width: 80%; */
//      /* margin-bottom: 0px; */
// `;
// export const ImageGalleryWrap = styled.div`
//     background: ${theme.colors.lightBg};
//     /* background: red; */
//     padding-bottom: 100px;
//     /* margin-bottom: 50px; */
//     display: flex; 
//     justify-content: center;
//     /* align-items: center; */
    
//      /* left: 0;
//      right: 0;
//      top: 0;
//     z-index: 0;
//      overflow: hidden;
    
//      padding-top: 0px;
//      padding-left: 40px;
//      padding-right: 40px;
//      width: 100%;
//      margin-bottom: 50px; */ 
// `;

// export const PortfolioPgContent = styled.div`
//     z-index: 3;
//     max-width: 1400px;
//     position: absolute;
//     padding: 8px 24px;
//     display: flex;
//     flex-direction: column;
//     align-items: stretch;
    
    
    
// `;


// export const PortfolioPgH1 = styled.h1`
//     color: ${theme.colors.darkTxt};
//     font-size: 70px;
//     text-align: left;
//     padding-top: 50px;


//     @media screen and (max-width: 768px) {
//         font-size: 60px;
//     }

//     @media screen and (max-width: 480px) {
//         font-size: 40px;
//     }
// `;

