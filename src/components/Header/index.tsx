import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User } from 'phosphor-react';

import { useAuth } from '@hooks/useAuth';
import * as Styled from './styles';

// interface HeaderProps {}

export function Header() {
  const { isAuthenticated, isLoading } = useAuth();

  const location = useLocation();

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.NavLinks>
          <Styled.NavLink active={location.pathname === '/'}>
            <Link to="/">Produtos</Link>
          </Styled.NavLink>
        </Styled.NavLinks>

        <Styled.AccountIcons>
          <ShoppingCart color="#fff" size={40} />

          {location.pathname !== '/login' && (
            <>
              {(!isAuthenticated || isLoading) && (
              <Link to="/login">
                <Styled.LoginButton disabled={isLoading}>
                  Log In
                </Styled.LoginButton>
              </Link>
              )}

              {isAuthenticated && (
              <Styled.UserButton>
                <User color="#fff" size={40} />
              </Styled.UserButton>
              )}
            </>
          )}
        </Styled.AccountIcons>
      </Styled.Header>
    </Styled.Container>
  );
}
