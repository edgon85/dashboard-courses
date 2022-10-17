import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.label`
  font: var(--text2medium);
  color: var(--black);
`;

export const Input = styled.input`
  background-color: var(--white);
  border: none;
  font: var(--text2regular);
  padding-block: 0.75rem;
  padding-inline: 0.75rem;
`;

export const Select = styled.select`
  background-color: var(--white);
  border: none;
  font: var(--text2regular);
  padding-block: 0.75rem;
  padding-inline: 0.75rem;
`;
export const TextArea = styled.textarea`
  background-color: var(--white);
  border: none;
  font: var(--text2regular);
  padding-block: 0.75rem;
  padding-inline: 0.75rem;
  block-size: 12.5rem;
  resize: none;
`;
