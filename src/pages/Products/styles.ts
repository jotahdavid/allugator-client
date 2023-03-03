import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  width: 100%;
  max-width: ${rem(1280)};
  margin: 0 auto;
  flex: 1;

  padding: 0 ${rem(60)} ${rem(60)};

  @media screen and (max-width: ${rem(900)}) {
    padding: 0 ${rem(36)} ${rem(36)};
  }
`;
