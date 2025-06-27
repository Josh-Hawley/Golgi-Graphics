import styled from 'styled-components';
import { theme } from '../../Theme';

export const Backdrop = styled.div`
   position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 200;
  cursor: pointer;
  overflow-y: scroll;
  display:flex;
  align-items: flex-start;
  justify-content: top;

`

export const ImageTextWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:90%;
  /* height: 700px; */
  /* background-color: red; */
  max-width: 1000px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  /* overflow:hidden; */
  /* background-size: contain; */

`
export const Header = styled.h1`
    color: ${theme.colors.darkTxt};
    /* font-weight: ${theme.fontWeights.bold}; */
    font-size: 30px;
    /* font-family: 'seravek-web'; */
    font-family: ${theme.font.header}, sans-serif;
    font-weight: ${theme.fontWeights.header};

  
`;

export const Paragraph = styled.p`
max-width: 800px;
    margin-top: 20px;
    
    font-size: calc(0.85*${theme.fontSizes.normal});
    line-height: 24px;
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.darkishTxtTxt}
`

export const TagsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px;
    /* line-height: 1.5; */

`
export const TagsContainer = styled.div`
    margin-right: 4px;
    margin-top: 10px;
    margin-bottom: 2px;
    padding: 3px 5px;
    line-height: 1;
    padding-bottom: ${theme.padding.tags};

    font-size: ${theme.fontSizes.xsmall};
    font-weight: ${theme.fontWeights.medium};
    background: #e6e6e6;
    border-radius: 3px;
    color: ${theme.colors.darkTxt};
    
`