import styled from 'styled-components';

type SpanStyledProps = {
  tipo?: string;
};

const DEFAUL_BACKGORUND = 'gray';
const BACKGROUND_OPTION: any = {
  darf: 'grey',
  review: 'orange',
  uploading: 'blue',
  published: 'green',
  free: 'green2',
  dollar: 'purple',
};

export const TagStatus = styled.span<SpanStyledProps>`
  background-color: ${(props) => {
    const colorSelected =
      BACKGROUND_OPTION[`${props.tipo}`] || DEFAUL_BACKGORUND;
    return `var(--${colorSelected})`;
  }};

  color: ${(props) => {
    switch (props.tipo) {
      case 'review':
        return 'var(--black)';
      case 'uploading':
        return 'var(--black)';
      case 'free':
        return 'var(--black)';
      default:
        return 'var(--white)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--text2regular);
  block-size: 3rem;
  inline-size: 6.875rem;
  border-radius: 2.5rem;
`;
