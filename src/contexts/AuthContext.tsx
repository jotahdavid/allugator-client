/* eslint-disable no-alert */
import {
  createContext, ReactNode, useCallback, useMemo, useState,
} from 'react';
import axios from 'axios';
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
  const [isLoading, setIsLoading] = useState(true);

  const domain = window.location.host;

  const handleRegister = useCallback(async (newUser: UserCreation) => {
    setIsLoading(true);
    try {
      const { user: userLogged, token } = await UsersService.createUser(newUser);

      cookies.set('allugacell.token', token, { domain });
      setUser(userLogged);
    } catch (err) {
      if (!(err instanceof axios.AxiosError)) return;

      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [domain]);

  const handleLogin = useCallback(async (userCredential: UserCredential) => {
    setIsLoading(true);
    try {
      const { user: userLogged, token } = await UsersService.login(userCredential);

      cookies.set('allugacell.token', token, { domain });
      setUser(userLogged);
    } catch (err) {
      if (!(err instanceof axios.AxiosError)) return;

      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [domain]);

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
