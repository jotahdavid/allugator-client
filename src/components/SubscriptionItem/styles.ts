import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

type StyledContainerProps = {
  active?: boolean;
};

export const Container = styled.div<StyledContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${rem(120)} repeat(2, 1fr);
  column-gap: ${rem(28)};
  align-items: center;

  padding: ${rem(12)} ${rem(8)};
  border-bottom: 1px solid rgba(23, 23, 23, 0.25);

  opacity: ${({ active }) => (active ? '1' : '0.5')};
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
`;

Container.defaultProps = {
  active: true,
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
`;

export const DueDate = styled.div`
  text-align: right;
  color: rgba(23, 23, 23, 0.8);

  strong {
    display: block;
    margin-bottom: 4px;
    font-weight: 700;
  }
`;
