import styled from 'styled-components';

export const PageContainer = styled.div`
position: absolute;
height: 100vh;
width: 100%;
/* overflow-x: hidden; */
/* top: -60px; */
transition: 0.3s cubic-bezier(.62,.13,.54,.85);
left: ${({ isOpen }) => (isOpen ? '-50%' : '0%')};
`