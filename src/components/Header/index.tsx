import { ShoppingCart } from 'phosphor-react';

import {
  Container, StyledHeader, NavLinks, NavLink, AccountIcons, LoginButton,
} from './styles';

interface HeaderProps {
  isLogged?: boolean;
}

export function Header({ isLogged }: HeaderProps) {
  return (
    <Container>
      <StyledHeader>
        <NavLinks>
          <NavLink active>
            <a href="/">Produtos</a>
          </NavLink>
        </NavLinks>

        <AccountIcons>
          <ShoppingCart color="#fff" size={40} />

          {!isLogged && (
            <LoginButton>
              Log In
            </LoginButton>
          )}
        </AccountIcons>
      </StyledHeader>
    </Container>
  );
}

Header.defaultProps = {
  isLogged: false,
};
