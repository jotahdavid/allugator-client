import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.main`
  display: flex;
  align-items: center;

  min-height: calc(100% - ${rem(80)});
  width: 90%;
  max-width: ${rem(1280)};
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  margin: auto;
  width: 100%;
  background-color: #F8F8F8;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);

  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 80%;
    background-color: rgba(34, 34, 34, 0.25);

    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  label {
    margin-bottom: ${rem(20)};
  }

  @media screen and (max-width: ${rem(720)}) {
    flex-direction: column;

    &::after {
      content: none;
    }
  }
`;

export const Side = styled.section`
  flex: 1;
  padding: ${rem(40)};

  .title {
    font-size: ${rem(24)};
    letter-spacing: 0.02em;
    color: rgba(34, 34, 34, 1);

    margin-bottom: ${rem(24)};
  }

  @media screen and (max-width: ${rem(720)}) {
    padding: ${rem(28)};
    position: relative;

    &:not(:last-child)::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(34, 34, 34, 0.25);

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: ${rem(12)} 1rem;
  border: none;
  background-color: rgba(23, 23, 23, 0.9);
  border-radius: 4px;

  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #FFFFFF;

  transition: background-color 300ms ease;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: rgba(23, 23, 23, 1);
  }

  &:disabled {
    background-color: rgba(98, 98, 98, 1);
    cursor: default;
  }
`;
