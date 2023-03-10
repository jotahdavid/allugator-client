import styled from 'styled-components';

import { rem } from '@assets/styles/utils';

export const Container = styled.footer`
  width: 100%;
  background-color: #373737;
  padding: ${rem(20)} 0;
  margin-top: 2rem;
`;

export const Content = styled.div`
  max-width: ${rem(700)};
  width: 90%;
  margin: 0 auto;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: ${rem(20)};
  }

  @media screen and (max-width: ${rem(900)}) {
    max-width: ${rem(520)};
    flex-wrap: wrap;

    strong {
      font-size: ${rem(18)};
    }
  }

  @media screen and (max-width: ${rem(380)}) {
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FinishButton = styled.button`
  max-width: ${rem(240)};
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: ${rem(20)};

  padding: ${rem(16)} ${rem(24)};
  border: none;
  border-radius: ${rem(24)};
  background-color: #fff;

  transition: background-color 300ms ease, color 200ms ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media screen and (max-width: ${rem(900)}) {
    padding: ${rem(12)} ${rem(16)};
    font-size: ${rem(16)};
    max-width: ${rem(160)};
  }

  @media screen and (max-width: ${rem(380)}) {
    max-width: unset;
  }
`;
