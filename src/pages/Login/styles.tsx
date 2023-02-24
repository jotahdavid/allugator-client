import styled, { css } from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.div`
  width: 90%;
  max-width: ${rem(460)};
  margin: 0 auto;
  height: calc(80% - ${rem(80)});

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${rem(40)};
`;

type StyledTabProps = {
  active?: boolean;
};

export const Tab = styled.button<StyledTabProps>`
  border: none;
  appearance: none;

  flex: 1;
  background-color: transparent;
  padding: 1rem 0;
  border-bottom: 2px solid rgba(23, 23, 23, 1);

  font-family: inherit;
  font-weight: 500;
  font-size: ${rem(20)};
  color: rgba(23, 23, 23, 1);

  cursor: default;

  ${({ active }) => !active && css`
    opacity: 0.5;
    transition: opacity 200ms ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  `}

  @media screen and (max-width: ${rem(720)}) {
    font-size: ${rem(16)};
  }
`;

Tab.defaultProps = {
  active: false,
};

export const Form = styled.form`
  width: 100%;

  label:not(:last-of-type) {
    margin-bottom: ${rem(24)};
  }

  label:last-of-type {
    margin-bottom: ${rem(32)};
  }
`;

export const ButtonSubmit = styled.button.attrs({ type: 'submit' })`
  border: none;
  appearance: none;

  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  background-color: rgba(23, 23, 23, 0.9);

  text-transform: uppercase;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;

  transition: background-color 300ms ease;

  &:hover {
    background-color: rgba(23, 23, 23, 1);
  }

  &:disabled {
    background-color: rgba(98, 98, 98, 1);
    cursor: default;
  }
`;
