import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
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

  &:placeholder {
    color: rgba(23, 23, 23, 0.4);
  }

  &:focus {
    border-color: rgba(23, 23, 23, 1);
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
