import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

import {
  Container, StyledHeader, NavLinks, NavLink, AccountIcons, LoginButton,
} from './styles';

interface HeaderProps {
  isLogged?: boolean;
}

export function Header({ isLogged }: HeaderProps) {
  const location = useLocation();

  return (
    <Container>
      <StyledHeader>
        <NavLinks>
          <NavLink active={location.pathname === '/'}>
            <Link to="/">Produtos</Link>
          </NavLink>
        </NavLinks>

        <AccountIcons>
          <ShoppingCart color="#fff" size={40} />

          {!isLogged && (
            <Link to="/login">
              <LoginButton>
                Log In
              </LoginButton>
            </Link>
          )}
        </AccountIcons>
      </StyledHeader>
    </Container>
  );
}

Header.defaultProps = {
  isLogged: false,
};
