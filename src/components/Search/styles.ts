import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: ${rem(12)};
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  max-width: ${rem(280)};
  padding: ${rem(12)} ${rem(16)};
  padding-left: ${rem(40)};

  border: 2px solid rgba(23, 23, 23, 0.5);
  border-radius: ${rem(8)};

  font-family: 'Inter', sans-serif;
  font-size: ${rem(16)};

  &:placeholder {
    color: rgba(23, 23, 23, 0.5);
  }

  &:focus {
    border-color: rgba(23, 23, 23, 1);
    outline: none;
  }
`;
