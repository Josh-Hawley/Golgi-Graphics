import styled from 'styled-components';
import {Link} from 'react-scroll';
import { theme } from '../Theme';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  `${theme.colors.accentLight}` : `${theme.colors.accent}`)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ?  `${theme.colors.darkTxt}` : `${theme.colors.superLightTxt}`)};
    /* font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; */
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({dark}) => (dark ?  `${theme.colors.superLightTxt}` : `${theme.colors.darkTxt}`)};
        background: ${({primary}) => (primary ?  `${theme.colors.accent}` : `${theme.colors.accentLight}`)};
    }
`;