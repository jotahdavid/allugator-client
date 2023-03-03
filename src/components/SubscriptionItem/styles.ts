import styled, { css } from 'styled-components';
import { rem } from '@assets/styles/utils';

type StyledContainerProps = {
  disabled?: boolean;
};

export const Container = styled.div<StyledContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${rem(120)} repeat(2, 1fr);
  column-gap: ${rem(28)};
  align-items: center;

  padding: ${rem(12)} ${rem(8)};
  border-bottom: 1px solid rgba(23, 23, 23, 0.25);

  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  ${({ disabled }) => disabled && css`
    .product-name {
      text-decoration: line-through;
    }
  `}

  @media screen and (max-width: ${rem(900)}) {
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

Container.defaultProps = {
  disabled: false,
};

export const Details = styled.div`
  .product-name {
    font-size: ${rem(20)};
    font-weight: 700;
    margin-bottom: ${rem(8)};
  }

  .product-price,
  .product-status {
    display: block;
    font-size: ${rem(16)};
  }

  .product-price {
    font-weight: 400;
    margin-bottom: ${rem(8)};
  }

  .product-status {
    font-weight: 600;
  }

  @media screen and (max-width: ${rem(900)}) {
    margin-right: 0.5rem;

    .product-name {
      font-size: ${rem(16)};
    }

    .product-price,
    .product-status {
      display: block;
      font-size: ${rem(14)};
    }
  }
`;

export const DueDate = styled.div`
  text-align: right;
  color: rgba(23, 23, 23, 0.8);

  strong {
    display: block;
    margin-bottom: 4px;
    font-weight: 700;
  }

  @media screen and (max-width: ${rem(900)}) {
    margin-top: 0.25rem;
    font-size: ${rem(12)};
  }
`;
