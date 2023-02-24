import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${rem(280)};

  svg {
    position: absolute;
    top: 50%;
    left: ${rem(12)};
    transform: translateY(-50%);
  }

  @media screen and (max-width: ${rem(720)}) {
    svg {
      width: 1rem;
    }
  }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
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

  @media screen and (max-width: ${rem(720)}) {
    padding-left: ${rem(32)};
    font-size: ${rem(14)};
  }
`;
