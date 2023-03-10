import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${rem(120)} repeat(2, 1fr);
  column-gap: ${rem(28)};
  align-items: center;

  padding: ${rem(12)} ${rem(16)};
  border-bottom: 1px solid rgba(23, 23, 23, 0.25);

  @media screen and (max-width: ${rem(900)}) {
    max-width: ${rem(520)};
    display: flex;
    column-gap: 1rem;
  }
`;

export const Preview = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EBEBEB;
  display: flex;
  align-items: center;

  border-radius: 4px 4px 0 0;
  padding: 1rem;
  border-radius: 8px;

  > img {
    display: block;
    max-height: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: ${rem(900)}) {
    flex-basis: ${rem(80)};
    padding: 0.25rem;
  }
`;

export const Details = styled.div`
  .product-name {
    font-size: ${rem(20)};
    font-weight: 700;
    margin-bottom: ${rem(8)};
  }

  .product-price {
    display: block;
    font-size: ${rem(16)};
  }

  .product-price {
    font-weight: 400;
    margin-bottom: ${rem(8)};
  }

  @media screen and (max-width: ${rem(900)}) {
    margin-right: 0.5rem;

    .product-name {
      font-size: ${rem(16)};
    }

    .product-price {
      display: block;
      font-size: ${rem(14)};
    }
  }
`;

export const SubscriptionTime = styled.div`
  margin-left: auto;
  text-align: right;
  color: rgba(23, 23, 23, 0.8);

  > strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  > span {
    display: block;
    margin-bottom: 1rem;
  }

  .remove-btn {
    border: none;
    background-color: transparent;
    color: #DA5656;
    font-size: ${rem(14)};

    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 4px;

    transition: color 300ms ease;

    line,
    path {
      transition: stroke 300ms ease;
    }

    &:hover {
      color: #FF2E2E;

      line,
      path {
        stroke: #FF2E2E;
      }
    }
  }

  @media screen and (max-width: ${rem(900)}) {
    margin-top: 0.25rem;
    font-size: ${rem(12)};

    .remove-btn {
      font-size: ${rem(12)};
      gap: 0;

      svg {
        height: ${rem(20)};
      }
    }
  }
`;
