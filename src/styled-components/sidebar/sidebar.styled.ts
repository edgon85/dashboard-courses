import styled from 'styled-components';

export const Sidebar = styled.section.attrs({
  'aria-label': 'Sidebar region',
})`
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

export const SidebarList = styled.nav.attrs({
  'aria-labelledby': 'sidebar-navigation',
})`
  grid-area: listItem;
  overflow-y: scroll;
`;
