import styled from 'styled-components';

export const Layout = styled.section`
  block-size: 100vh;
  box-sizing: border-box;
`;

export const LayoutContent = styled.div`
  block-size: inherit;
  box-sizing: inherit;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'sidebar main';
`;
