import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.main`
  width: 90%;
  max-width: ${rem(700)};
  margin: 0 auto;

  h1 {
    font-size: ${rem(36)};
    font-weight: 500;
    text-align: center;
    color: #171717;

    padding: ${rem(36)} ${rem(20)};
    border-bottom: 1px solid rgba(23, 23, 23, 0.25);
  }
`;

export const Subscriptions = styled.ul`
  list-style: none;
`;