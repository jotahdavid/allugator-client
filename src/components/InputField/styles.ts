import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #222222;
  position: relative;

  .label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);

    font-size: 1rem;
    color: rgba(23, 23, 23, 0.6);
    opacity: 50%;
    cursor: text;

    transition: all 200ms ease;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: transparent;
      padding: 0 ${rem(6)};

      position: absolute;
      z-index: -1;
      left: -${rem(6)};
    }
  }
`;

type StyledInputProps = {
  hasLabel: boolean;
};

export const Input = styled.input<StyledInputProps>`
  width: 100%;
  padding: ${rem(12)} 1rem;

  outline: none;
  appearance: none;

  border: 2px solid rgba(23, 23, 23, 0.4);
  border-radius: 4px;

  font-size: 1rem;
  font-weight: 400;
  font-family: inherit;
  color: rgba(23, 23, 23, 1);

  transition: border-color 200ms ease;

  &::placeholder {
    color: ${({ hasLabel }) => (hasLabel ? 'transparent' : 'rgba(23, 23, 23, 0.6)')};
  }

  &:focus {
    border-color: rgba(23, 23, 23, 1);
  }

  &:focus + .label,
  &:not(:placeholder-shown) + .label {
    opacity: 1;
    top: 0;
    font-size: ${rem(14)};
    color: rgba(23, 23, 23, 1);

    &::before {
      background-color: #F8F8F8;
    }
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;

  font-size: ${rem(14)};
  color: #dc2626;
`;
