import styled from 'styled-components';
import { theme } from '../../Theme';


export const PageContainer = styled.div`  
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
    margin-bottom: 0px;
    padding: 3px 5px;
    line-height: 1;
    padding-bottom: ${theme.padding.tags};

    font-size: ${theme.fontSizes.xsmall};
    font-weight: ${theme.fontWeights.medium};
    background: #e6e6e6;
    border-radius: 3px;
    color: ${theme.colors.darkTxt};
`

export const GalleryWrap = styled.div`
    columns: 3;
    column-gap: 80px; 

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
    font-size: ${theme.fontSizes.xlarge};
    text-align: center;
    margin-top: 50px;
    margin-bottom: 80px;
    font-family: ${theme.font.header}, sans-serif;
    font-weight: ${theme.fontWeights.header};



    @media screen and (max-width: 768px) {
        font-size: calc(0.8 * ${theme.fontSizes.xlarge});
    }
    @media screen and (max-width: 480px) {
        font-size: calc(0.5 * ${theme.fontSizes.xlarge});
    }

`;

export const PortfolioPgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    position: relative;
    z-index: 0;
    justify-content: center;
    
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


export const PlayButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    pointer-events: none; /* Prevents the overlay from blocking clicks on the video */
    opacity: ${props => props.isSelected ? '1' : '0'};
    transition: opacity 3s ease;
    
`;

export const Paragraph = styled.p`
    margin-top: 0px;
    margin-bottom: 60px;
    color: ${theme.colors.darkishTxt};
    font-size: ${theme.fontSizes.small};
    text-align: left;
    max-width: 780px;
    font-weight: ${theme.fontWeights.normal};
    

    /* @media screen and (max-width: 768px) {
        font-size: ${theme.fontWeights.normal};;
    } */


`;



export const CardHeader = styled.h1`
    color: ${theme.colors.darkTxt};
    font-size: 1.5rem;
    text-align: left;
    margin-top: 70px;
    margin-bottom: 10px;
    font-family: ${theme.font.header}, sans-serif;
    font-weight: ${theme.fontWeights.header};
`;

export const CardParagraph = styled.p`
    margin-top: 0px;
    margin-bottom: 20px;
    color: ${theme.colors.darkishTxt};
    font-size: ${theme.fontSizes.xsmall};
    text-align: left;
    max-width: 780px;
    font-weight: ${theme.fontWeights.normal};
    

    /* @media screen and (max-width: 768px) {
        font-size: ${theme.fontWeights.normal};;
    } */


`;
