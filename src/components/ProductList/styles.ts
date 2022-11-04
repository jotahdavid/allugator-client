import styled from 'styled-components';

import { rem } from '@assets/styles/utils';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${rem(36)} 0;
  border-bottom: 2px solid rgba(23, 23, 23, 0.5);
`;

export const Filters = styled.div`
  display: flex;
  gap: ${rem(24)};
  align-items: center;

  > span {
    font-size: ${rem(32)};
    color: #222222;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }
`;

export const SelectContainer = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    right: ${rem(20)};
    transform: translateY(-50%);
  }
`;

export const Select = styled.select`
  min-width: ${rem(160)};
  background-color: #fff;
  padding: ${rem(12)} ${rem(24)};

  outline: none;
  appearance: none;
  border: 2px solid rgba(23, 23, 23, 0.5);
  border-radius: ${rem(20)};

  font-family: inherit;
  font-size: 1rem;
  color: rgba(23, 23, 23, 1);

  transition: border-color 300ms ease;

  &:hover,
  &:active {
    border-color: rgba(23, 23, 23, 1);
  }

  &[value="a-z"] {
    color: red;
  }
`;

export const Section = styled.section`
  padding-top: ${rem(32)};

  display: grid;
  grid-template-columns: repeat(4, max(${rem(260)}));
  justify-content: space-between;
  row-gap: ${rem(40)};
`;
