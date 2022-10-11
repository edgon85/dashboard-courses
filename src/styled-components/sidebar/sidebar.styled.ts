import styled from 'styled-components';

export const Sidebar = styled.div`
  overflow-y: auto;
  grid-area: sidebar;
  background-color: var(--white);
`;

export const SidebarContent = styled.div`
  block-size: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    'header'
    'listItem'
    'footer';
`;

export const SidebarList = styled.div`
  grid-area: listItem;
  overflow-y: scroll;
`;
