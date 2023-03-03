import {
  createContext, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import cookies from 'js-cookie';
import { AxiosError } from 'axios';

import UsersService, { User, UserCreation, UserCredential } from '@services/UsersService';
import toast from '@lib/toast';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  handleRegister: (newUser: UserCreation) => Promise<void>;
  handleLogin: (userCredential: UserCredential) => Promise<void>;
  handleLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const token = cookies.get('allugacell.token');
        if (isAuthenticated || !token) return;

        const { user: userData } = await UsersService.getByToken(token);

        setUser(userData);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.danger('Não foi possível estabelecer conexão com o servidor');
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isAuthenticated]);

  const handleRegister = useCallback(async (newUser: UserCreation) => {
    const { user: userLogged, token } = await UsersService.createUser(newUser);

    cookies.set('allugacell.token', token, { sameSite: 'None' });
    setUser(userLogged);
  }, []);

  const handleLogin = useCallback(async (userCredential: UserCredential) => {
    const { user: userLogged, token } = await UsersService.login(userCredential);

    cookies.set('allugacell.token', token, { sameSite: 'None' });
    setUser(userLogged);
  }, []);

  const handleLogout = useCallback(() => {
    cookies.remove('allugacell.token');
    setUser(null);
  }, []);

  const authContextValue = useMemo<AuthContextValue>(() => ({
    user,
    isLoading,
    isAuthenticated,
    handleRegister,
    handleLogin,
    handleLogout,
  }), [user, isLoading, isAuthenticated, handleRegister, handleLogin, handleLogout]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
