import { ReactNode, Children, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User } from 'phosphor-react';

import { useAuth } from '@hooks/useAuth';
import * as Styled from './styles';

function Dropdown({ children }: { children: ReactNode }) {
  const childrens = Children.toArray(children);

  return (
    <Styled.Dropdown>
      {childrens.map((child) => (
        <li>{child}</li>
      ))}
    </Styled.Dropdown>
  );
}

export function Header() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const { isAuthenticated, isLoading } = useAuth();

  const location = useLocation();

  function handleUserButtonClick() {
    setShowUserDropdown((prevState) => !prevState);
  }

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
                <>
                  <Styled.Button onClick={handleUserButtonClick}>
                    <User color="#fff" size={40} />
                  </Styled.Button>
                  {showUserDropdown && (
                    <Dropdown>
                      <Link to="/subscriptions">Assinaturas</Link>
                      <Styled.Button>Sair</Styled.Button>
                    </Dropdown>
                  )}
                </>
              )}
            </>
          )}
        </Styled.AccountIcons>
      </Styled.Header>
    </Styled.Container>
  );
}
