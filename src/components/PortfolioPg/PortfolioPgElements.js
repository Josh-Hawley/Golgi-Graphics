import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from '../../Theme';

// export const PortfolioPgContainer = styled.div`
//     /* min-height: 692px; */
//     /* position: fixed; */
//     /* bottom: 0; */
//     left: 0;
//     right: 0;
//     top: 0;
//     z-index: 0;
//     overflow: hidden;
    
//     /* align-items: center; */
//     padding-left: 20px; 
//     padding-right: 30px;
//     padding-top: 40px;
//     width: 80%;

//     /* background: linear-gradient(108deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1)100%); */
// `;
export const PortfolioPgContainer = styled.div`
    background: ${theme.colors.lighterBg};
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
    height: 500px;
    position: relative;
    z-index: 1;
    justify-content: center;
`;

export const ImageGalleryContainer = styled.div`
    /* background: ${theme.colors.lighterBg}; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
    /* height: 100vh; */
    /* position: relative; */
    /* z-index: 1; */
    /* justify-content: center; */

         /* min-height: 692px; */
     /* position: fixed; */
    /* bottom: 0; */
     left: 0;
     right: 0;
     top: 0;
    z-index: 0;
     overflow: hidden;
    
    /* align-items: center; */
     /* padding-left: 20px; 
     padding-right: 30px; */
     margin: 0 auto;
     padding-top: 0px;
     width: 80%;
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


export const PortfolioPgH1 = styled.h1`
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



// export const FormWrap = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     @media screen and (max-width: 400px){
//         height: 80%;
//     }
// `

// export const Icon = styled(Link)`
//     margin-left: 32px;
//     margin-top: 32px;
//     text-decoration: none;
//     color: #fff;
//     font-weight: 700;
//     font-size: 32px;

//     @media screen and (max-width: 480px){
//         margin-left: 16px;
//         margin-top: 8px;
//     }
// `

// export const FormContent = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     @media screen and (max-width: 480px){
//         padding: 10px;
//     }
// `

// export const Form = styled.form`
//     background: #010101;
//     max-width: 400px;
//     height: auto;
//     width: 100%;
//     z-index: 1;
//     display: grid;
//     margin: 0 auto;
//     padding: 80px 32px;
//     border-radius: 4px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.9);

//     @media screen and (max-width: 400px){
//         padding: 32px 32px;
//     }
// `

// export const FormH1 = styled.h1`
//     margin-bottom: 40px;
//     color: #fff;
//     font-size: 20px;
//     font-weight: 400;
//     text-align: center;
// `

// export const FormLabel = styled.label`
//     margin-bottom: 8px;
//     font-size: 14px;
//     color: #fff;
// `

// export const FormInput = styled.input`
//     padding: 16px 16px;
//     margin-bottom: 32px;
//     border: none;
//     border-radius: 4px;
// `
// export const FormButton = styled.button`
//     background: #01bf71;
//     padding: 16px 0;
//     border: none;
//     border-radius: 4px;
//     color: #fff;
//     font-size: 20px;
//     cursor: pointer;
// `

// export const Text = styled.span`
//     text-align: center;
//     margin-top: 24px;
//     color: #fff;
//     font-size: 14px;
// `


