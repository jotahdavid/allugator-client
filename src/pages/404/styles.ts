import { rem } from '@assets/styles/utils';
import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;

  p {
    text-align: center;
    font-size: ${rem(32)};
  }

  .code {
    font-size: ${rem(100)};
    font-weight: bold;
  }

  @media screen and (max-width: ${rem(720)}) {
    p {
      font-size: ${rem(24)};
    }
    .code {
      font-size: ${rem(80)};
    }
  }
`;
