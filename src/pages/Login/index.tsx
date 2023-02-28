import { useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAuth } from '@hooks/useAuth';
import { Header } from '@components/Header';
import toast from '@lib/toast';

import { SignInForm, SignUpForm } from './Forms';
import { Account, accountSchema } from './schema';
import * as Styled from './styles';

type Tab = Account['tab'];

export function Login() {
  const formMethods = useForm<Account>({
    mode: 'all',
    resolver: zodResolver(accountSchema),
    defaultValues: {
      tab: 'signin',
    },
  });

  const {
    handleLogin,
    handleRegister,
    isAuthenticated,
    isLoading: isAuthLoading,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthLoading && isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthLoading, isAuthenticated, navigate]);

  const tab = formMethods.watch('tab');

  function handleTabClick(tabClicked: Tab) {
    if (tab !== tabClicked) {
      formMethods.reset({ tab: tabClicked as Extract<Tab, 'signin'> });
    }
  }

  const onSubmit: SubmitHandler<Account> = async (payload) => {
    try {
      if (payload.tab === 'signin') {
        await handleLogin({
          email: payload.email,
          password: payload.password,
        });
        toast.sucess('Você foi logado com sucesso!');
      } else {
        await handleRegister({
          name: payload.name,
          email: payload.email,
          password: payload.password,
        });
        toast.sucess('Sua conta foi criada com sucesso!');
      }

      if (location.state?.redirect) {
        navigate(location.state.redirect);
        return;
      }

      navigate('/');
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        console.error(err);
        return;
      }

      switch (err.response?.data.error) {
        case 'This e-mail is already in use':
          toast.danger('Este e-mail já está sendo utilizado');
          break;
        case 'E-mail or password are invalid':
          toast.danger('E-mail ou senha são inválidos');
          break;
        default:
          toast.danger(err.response?.data.error ?? 'Algum erro inesperado aconteceu');
      }
    }
  };

  if (isAuthLoading || isAuthenticated) {
    return null;
  }

  return (
    <FormProvider {...formMethods}>
      <Header />

      <Styled.Container as="main">
        <Styled.Tabs activeTab={tab === 'signin' ? 0 : 1}>
          <Styled.Tab
            active={tab === 'signin'}
            onClick={() => handleTabClick('signin')}
          >
            Acessar conta
          </Styled.Tab>
          <Styled.Tab
            active={tab === 'signup'}
            onClick={() => handleTabClick('signup')}
          >
            Registrar-se
          </Styled.Tab>
        </Styled.Tabs>

        {tab === 'signin' ? (
          <SignInForm onSubmit={onSubmit} />
        ) : (
          <SignUpForm onSubmit={onSubmit} />
        )}
      </Styled.Container>
    </FormProvider>
  );
}
