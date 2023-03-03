import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.main`
  width: 90%;
  max-width: ${rem(700)};
  margin: 0 auto;
  flex: 1;

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

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptySubscriptions = styled.div`
  width: 90%;
  max-width: ${rem(400)};
  background-color: #EBEBEB;
  color: rgba(23, 23, 23, 0.5);
  padding: ${rem(26)} ${rem(20)};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${rem(20)};
`;
