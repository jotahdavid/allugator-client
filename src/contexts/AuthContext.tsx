import {
  createContext, ReactNode, useCallback, useMemo, useState,
} from 'react';
import cookies from 'js-cookie';

import UsersService, { User, UserCreation, UserCredential } from '@services/UsersService';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  handleRegister: (newUser: UserCreation) => Promise<void>;
  handleLogin: (userCredential: UserCredential) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextValue);

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading] = useState(true);

  const handleRegister = useCallback(async (newUser: UserCreation) => {
    const { user: userLogged, token } = await UsersService.createUser(newUser);

    cookies.set('allugacell.token', token, { sameSite: 'None', secure: true });
    setUser(userLogged);
  }, []);

  const handleLogin = useCallback(async (userCredential: UserCredential) => {
    const { user: userLogged, token } = await UsersService.login(userCredential);

    cookies.set('allugacell.token', token, { sameSite: 'None', secure: true });
    setUser(userLogged);
  }, []);

  const isAuthenticated = Boolean(user);

  const authContextValue = useMemo<AuthContextValue>(() => ({
    user,
    isLoading,
    isAuthenticated,
    handleRegister,
    handleLogin,
  }), [user, isLoading, isAuthenticated, handleRegister, handleLogin]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
