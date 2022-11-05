import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'phosphor-react';

import { useAuth } from '@hooks/useAuth';
import * as Styled from './styles';

export function Header() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const { isAuthenticated, isLoading, handleLogout } = useAuth();

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
                    <Styled.Dropdown>
                      <Styled.DropdownItem>
                        <Link to="/subscriptions">Assinaturas</Link>
                      </Styled.DropdownItem>
                      <Styled.DropdownItem>
                        <Styled.Button onClick={handleLogout}>Sair</Styled.Button>
                      </Styled.DropdownItem>
                    </Styled.Dropdown>
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
