import styled, { keyframes, css } from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from '../../Theme';

export const Container = styled.div`
    min-height: 692px;
    /* position: fixed; */
    /* bottom: 0;
    left: 0;
    right: 0;
    top: 0; */
    z-index: 0;
    overflow: hidden;
    padding-top: 150px;
    margin-bottom: 80px
    
    /* background: linear-gradient(108deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1)100%); */
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const Form = styled.form`
    background: ${theme.colors.lightestBg};
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 60px 32px;
    border-radius: 8px;
    box-shadow: 0 0 40px rgba(0,0,0,0.0);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 8px;
    color: ${theme.colors.darkTxt};
    font-size: 35px;
    font-weight: 600;
    text-align: left;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    margin-top: 26px;
    font-size: 18px;
    color: ${theme.colors.darkTxt};
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 0px;
    
    border: 1px solid grey;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 300;
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
    
    /* background: ${theme.colors.accentLight}; */
    /* color: ${theme.colors.darkTxt}; */
    padding: 16px 0;
    border: none;
    /* border-radius: 8px; */
    
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 32px;

    background: ${({loading}) => (loading ? `${theme.colors.darkBg}`: `${theme.colors.accentLight}`)};
    color: ${({loading}) => (loading ? `${theme.colors.superLightTxt}`: `${theme.colors.darkTxt}`)};
    width: ${({loading}) => (loading ? '40%': '100%')};
    border-radius: ${({loading}) => (loading ? '50px': '10px')};

    ${({ loading }) =>
    loading &&
    css`
      animation: ${oscillateAnimation} 1.5s infinite cubic-bezier(.25,.59,.83,.46);
    `}
    justify-self: center;

    &:hover{
    transition: 0.2 ease-in-out;
    background: ${({loading}) => (loading ? `${theme.colors.darkBg}`: `${theme.colors.accent}`)};
    color: ${theme.colors.accentSuperLight};
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`


export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    
    border: 1px solid grey;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 300;
`

export const FormError = styled.p`
    color: red;
    margin-bottom: 0px;
    margin-top:10px;
    font-weight: 300;
`