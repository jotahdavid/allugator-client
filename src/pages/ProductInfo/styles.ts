import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  max-width: ${rem(1280)};
  margin: 0 auto;
  padding: 2rem ${rem(60)};
  flex: 1;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: ${rem(720)}) {
    padding: ${rem(36)};
    flex-wrap: wrap;
  }
`;

export const Preview = styled.div`
  max-width: ${rem(320)};

  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: ${rem(8)} 0;

  > img {
    display: block;
    max-height: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const Details = styled.div`
  width: 90%;
  max-width: ${rem(360)};
  padding: ${rem(24)};
  background-color: #00000012;
  border-radius: 1rem;

  .product-name {
    font-size: ${rem(32)};
    font-family: inherit;
    letter-spacing: 0.05em;

    display: block;
    width: max-content;

    &::after {
      content: '';
      display: block;
      width: 40%;
      height: 3px;
      background-color: #171717;

      position: relative;
      top: 4px;
    }
  }

  .product-price {
    display: block;
    margin-top: 1rem;
    margin-bottom: 4rem;

    font-size: ${rem(20)};
    font-family: inherit;
    font-weight: 600;
  }

  > p {
    margin-bottom: 1rem;
    font-size: ${rem(16)};
    font-family: inherit;
  }

  > a {
    text-decoration: none;
  }
`;

export const Rent = styled.button`
  border: none;
  appearance: none;

  width: 100%;
  padding: ${rem(12)} ${rem(8)};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(6)};

  font-size: ${rem(20)};
  font-family: inherit;
  font-weight: bold;
  color: #fff;

  background-color: rgba(23, 23, 23, 1);
  transition: background-color 200ms ease;

  &:hover {
    background-color: rgba(23, 23, 23, 0.8);
  }
`;
