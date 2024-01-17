import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../Theme';

export const Container = styled.div`
    margin-top: 20px;
    /* margin-bottom: 10px; */
`;

export const FormWrap = styled.div`
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;

    @media screen and (max-width: 400px){
        /* height: 80%; */
    }
`

export const FormContent = styled.div`
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 0px;
    }
`

export const Form = styled.form`
    background: ${theme.colors.lightestBg};
    max-width: 520px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 0px 25px;
    border-radius: 8px;

    @media screen and (max-width: 400px){
        /* padding: 32px 32px; */
    }
`

export const Header = styled.h1`
    margin-bottom: -10px;
    color: ${theme.colors.darkTxt};
    font-size: 35px;
    font-weight: ${theme.fontWeights.bold};
    text-align: left;
    /* font-family: 'Title Font'; */
    font-family: 'seravek-web';
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    margin-top: 26px;
    font-size: ${theme.fontSizes.small};
    line-height: 24px;
    font-weight: ${theme.fontWeights.bold};
 
    color: ${theme.colors.darkishTxt};
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 0px;
    
    border: 1px solid grey;
    border-radius: 6px;
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.normal};
`

const oscillateAnimation = keyframes`
  0% {
    width: 100%;
    
    /* border-radius: 8px; */
  }
  50% {
    width: 40%;
    /* border-radius: 50px; */
  }
  100% {
    width: 100%;
    /* border-radius: 8px; */
  }
`;

export const FormButton = styled.button`
    
    padding: 16px 0;
    border: none;
    
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.bold};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 32px;
    /* background: ${({loading}) => (loading ? `${theme.colors.darkBg}`: `${theme.colors.accentLight}`)};
    color: ${({loading}) => (loading ? `${theme.colors.superLightTxt}`: `${theme.colors.darkTxt}`)}; */
    background: ${({loading}) => (loading ? `${theme.colors.darkBg}`: `${theme.colors.accent}`)};
    color: ${({loading}) => (loading ? `${theme.colors.superLightTxt}`: `${theme.colors.superLightTxt}`)};
    width: ${({loading}) => (loading ? '40%': '100%')};
    border-radius: ${({loading}) => (loading ? '50px': '6px')};

    ${({ loading }) =>
    loading &&
    css`
      animation: ${oscillateAnimation} 1.5s infinite cubic-bezier(.25,.59,.83,.46);
    `}
    justify-self: center;

    &:hover{
    transition: 0.2 ease-in-out;
    background: ${({loading}) => (loading ? `${theme.colors.darkBg}`: `${theme.colors.accentLight}`)};
    color: ${({loading}) => (loading ? `${theme.colors.superLightTxt}`: `${theme.colors.darkTxt}`)};
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.normal};
`


export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    
    border: 1px solid grey;
    border-radius: 6px;
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.normal};
`

export const FormError = styled.p`
    color: ${theme.colors.accent};
    margin-bottom: 0px;
    margin-top:10px;
    font-weight: ${theme.fontWeights.medium};
`






export const ContactContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? `${theme.colors.lightBg}`: `${theme.colors.lightestBg}`)};
    z-index: 5;
    position: relative;
    width: 100%;
    /* background: yellow; */

`;

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    padding: 0 0px;
    justify-content: center;
`;

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    background: red;

`;

export const Column1 = styled.div`

    padding-left: 50px;
     padding-right: 50px;
     min-width: 500px;

    @media screen and (max-width: 650px) {
        width: 100%;
        min-width:300px;
        padding-left: 0px;
     padding-right: 0px;

    }
    
`;

export const Column2 = styled.div`

    /* width: 50%; */
    padding-left: 50px;
     padding-right: 50px;
     min-width: 500px;

     @media screen and (max-width: 650px) {
        width: 100%;
        min-width:300px;
        padding-left: 0px;
     padding-right: 0px;
    }
    /* background: green; */
    /* height: calc(100vh - 60px); */
    /* min-width: 692px; */
    /* width:692px; */

     
    /* @media screen and (max-width: 768px){
        width: 100%;
    }
    grid-area: col2; */
`;


export const Paragraph = styled.p`

    margin-top: 26px;
    font-size: ${theme.fontSizes.small};
    line-height: 24px;
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.darkishTxt}
    
`;


export const FlexWrap = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    width: 100%;
    padding-top:180px;
    margin-bottom: 200px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        /* margin-top:50px; */
        padding-top:120px;
        margin-bottom: 100px;
    }

  `

export const TextWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

`

export const OrderedList = styled.ol`
padding-left: 20px;
`

export const ListItem = styled.li`
margin-bottom: 10px;
font-size: ${theme.fontSizes.small};
`

export const UnorderedList = styled.ul`
padding-left: 30px;
margin-top: 5px;

`

export const EmailLink = styled.a`
    color: ${theme.colors.accent};
    margin-bottom: 16px;
`