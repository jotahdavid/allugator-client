/* eslint-disable no-alert */
import {
  createContext, ReactNode, useCallback, useMemo, useState,
} from 'react';

import UsersService, { User, UserCreation, UserCredential } from '@services/UsersService';
import axios from 'axios';

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

  const handleRegister = useCallback(async (newUser: UserCreation) => {
    setIsLoading(true);
    try {
      const { user: userLogged } = await UsersService.createUser(newUser);

      setUser(userLogged);
    } catch (err) {
      if (!(err instanceof axios.AxiosError)) return;

      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = useCallback(async (userCredential: UserCredential) => {
    setIsLoading(true);
    try {
      const { user: userLogged } = await UsersService.login(userCredential);

      setUser(userLogged);
    } catch (err) {
      if (!(err instanceof axios.AxiosError)) return;

      alert(err.message);
    } finally {
      setIsLoading(false);
    }
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
