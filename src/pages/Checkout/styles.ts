import styled from 'styled-components';
import { rem } from '@assets/styles/utils';

export const Container = styled.main`
  display: flex;
  align-items: center;

  height: 80%;
  width: 90%;
  max-width: ${rem(1280)};
  margin: 0 auto;

  background-color: #F8F8F8;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
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

  &:hover {
    background-color: rgba(23, 23, 23, 1);
  }

  &:disabled {
    background-color: rgba(98, 98, 98, 1);
    cursor: default;
  }
`;
