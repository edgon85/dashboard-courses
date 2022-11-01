import styled from 'styled-components';

export const MainSection = styled.section.attrs({
  'aria-label': 'main',
})`
  grid-area: main;
  overflow-y: auto;
  background-color: var(--bg);
  padding-inline: 3.125rem;
  padding-block-start: 2.5rem;
`;
