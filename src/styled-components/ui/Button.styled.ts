import styled from 'styled-components';

export const Button = styled.button`
  font: var(--text1semibold);
  padding-block: 0.8125rem;
  padding-inline: 1.5rem;
  border: 2px solid var(--black);
  border-radius: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;
`;

// A new component based on Button, but with some override styles
export const ButtonPrimary = styled(Button)`
  color: var(--white);
  background-color: var(--black);
`;
