import {
  createContext, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import cookies from 'js-cookie';
import { AxiosError } from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

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
          if (err.response?.data.error === 'Token invalid') {
            // cookies.remove('allugacell.token');
            return;
          }
          toast.danger('Não foi possível autenticar o usuário');
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isAuthenticated]);

  const handleRegister = useCallback(async (newUser: UserCreation) => {
    const { user: userLogged, token } = await UsersService.createUser(newUser);
    const decodedToken = jwtDecode<JwtPayload>(token);

    if (decodedToken.exp) {
      cookies.set('allugacell.token', token, {
        sameSite: 'Strict',
        path: '/',
        expires: new Date(decodedToken.exp * 1000),
      });
    }
    setUser(userLogged);
  }, []);

  const handleLogin = useCallback(async (userCredential: UserCredential) => {
    const { user: userLogged, token } = await UsersService.login(userCredential);
    const decodedToken = jwtDecode<JwtPayload>(token);

    if (decodedToken.exp) {
      cookies.set('allugacell.token', token, {
        sameSite: 'Strict',
        path: '/',
        expires: new Date(decodedToken.exp * 1000),
      });
    }
    setUser(userLogged);
  }, []);

  const handleLogout = useCallback(() => {
    cookies.remove('allugacell.token', { path: '/' });
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
