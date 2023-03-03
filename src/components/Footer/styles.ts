import styled from 'styled-components';

import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: #222222;
`;

export const Footer = styled.footer`
  max-width: ${rem(1280)};
  width: 100%;
  height: ${rem(100)};
  margin: 0 auto;
  padding: 0 ${rem(60)};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  flex-wrap: wrap;
  align-content: center;
  gap: 0.5rem 0;

  font-size: 1.125rem;
  color: #fff;

  a {
    color: inherit;
    transition: color 300ms ease;

    &:hover {
      color: #e8e8e8;
    }
  }

  @media screen and (max-width: ${rem(900)}) {
    padding: 0 ${rem(36)};

    font-size: 1rem;
  }
`;
