import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Preview = styled.div`
  width: 100%;
  background-color: #EBEBEB;
  border-radius: 4px 4px 0 0;
  padding: ${rem(8)} 0;

  position: relative;
  overflow-y: hidden;

  &::after {
    content: 'Alugar';
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-family: inherit;
    font-weight: bold;
    color: #fff;

    width: 100%;
    height: ${rem(32)};
    background-color: rgba(34, 34, 34, 0.9);

    position: absolute;
    bottom: 0;
    transform: translateY(100%);

    transition: transform 300ms ease;
  }

  > img {
    display: block;
    max-width: ${rem(160)};
    margin: 0 auto;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: ${rem(260)};

  display: flex;
  flex-direction: column;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover ${Preview}::after {
    transform: translateY(0);
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  padding: ${rem(8)};
  background-color: rgba(23, 23, 23, 1);
  color: #fff;
  border-radius: 0 0 4px 4px;

  .title {
    font-size: ${rem(20)};
    font-weight: 700;
  }

  .price {
    font-size: ${rem(16)};
    font-weight: 500;
  }
`;
