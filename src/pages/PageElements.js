import styled from 'styled-components';

export const PageContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    transition: 0.3s cubic-bezier(.62,.13,.54,.85);
    left: ${({ isOpen }) => (isOpen ? '-50%' : '0%')};
    
`