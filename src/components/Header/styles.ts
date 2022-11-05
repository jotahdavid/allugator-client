import styled, { css } from 'styled-components';

import { rem } from '@styles/utils';

export const Container = styled.div`
  width: 100%;
  background-color: #222222;
`;

export const Header = styled.header`
  max-width: ${rem(1280)};
  width: 100%;
  height: ${rem(80)};
  margin: 0 auto;
  padding: 0 ${rem(60)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled.ul`
  list-style: none;
`;

type NavLinkProps = {
  active?: boolean;
};

export const NavLink = styled.li<NavLinkProps>`
  font-family: 'Inter', sans-serif;
  font-size: ${rem(20)};
  font-weight: 600;
  color: #fff;
  text-transform: lowercase;

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: ${rem(8)} ${rem(4)};

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #fff;

      position: relative;
      top: 1px;

      transform: scaleX(0);
      transform-origin: left;
      transition: transform 300ms 120ms ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    ${({ active }) => active && css`
      &::after {
        transform: scaleX(1);
      }
    `}
  }
`;

NavLink.defaultProps = {
  active: false,
};

export const AccountIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(24)};

  position: relative;
`;

export const LoginButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: ${rem(16)};

  padding: ${rem(12)} ${rem(24)};
  border: none;
  border-radius: ${rem(20)};
  background-color: #fff;

  transition: background-color 300ms ease, color 200ms ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const Button = styled.button`
  font-size: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
`;

export const Dropdown = styled.ul`
  list-style: none;

  font-size: 1rem;
  font-family: inherit;
  color: #fff;

  width: ${rem(180)};
  background-color: #373737;
  border-radius: 8px;
  border-top-right-radius: 0;
  padding: 0.5rem 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  transform: translateY(100%);

  button {
    width: 100%;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const DropdownItem = styled.li`
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  }

  &::after {
    content: '';
    display: block;
    width: ${rem(180)};

    position: absolute;
    inset: 0;
    left: -${rem(16)};

    background-color: #373737;
    z-index: -1;

    transition: background-color 100ms ease;
  }

  &:hover::after {
    background-color: #1e1e1e;
  }

  > * {
    padding: ${rem(12)} 0;
    display: block;
  }
`;
