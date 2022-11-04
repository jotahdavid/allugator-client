import {
  useForm, FormProvider, useFormContext, SubmitHandler,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { Header } from '@components/Header';
import { InputField } from '@components/InputField';
import * as Styled from './styles';

const accountSchema = z.object({
  tab: z.literal('signin'),
  email: z.string().email('Formato de e-mail inválido'),
  password: z.string().min(4, 'Sua senha deve conter no mínimo 4 caracteres'),
}).or(
  z.object({
    tab: z.literal('signup'),
    name: z.string().min(1, 'Campo obrigatório'),
    email: z.string().email('Formato de e-mail inválido'),
    password: z.string().min(1, 'Campo obrigatório').min(4, 'Sua senha deve conter no mínimo 4 caracteres'),
    confirmPassword: z.string().min(1, 'Campo obrigatório').min(4, 'Sua senha deve conter no mínimo 4 caracteres'),
  }).refine(
    (data) => data.password === data.confirmPassword,
    { message: 'As duas senhas não batem', path: ['confirmPassword'] },
  ),
);

type Account = z.infer<typeof accountSchema>;

interface FormProps {
  onSubmit: SubmitHandler<Account>;
}

type SignInValues = Account & { tab: 'signin' };

function SignInForm({ onSubmit }: FormProps) {
  const { handleSubmit, register, formState: { errors, isValid } } = useFormContext<SignInValues>();

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        {...register('email')}
        type="email"
        placeholder="Endereço de e-mail"
        error={errors.email?.message}
      />
      <InputField
        {...register('password')}
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
      />

      <Styled.ButtonSubmit disabled={!isValid}>
        Entrar
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
}

type SignUpValues = Account & { tab: 'signup' };

function SignUpForm({ onSubmit }: FormProps) {
  const {
    handleSubmit, register, watch, trigger, formState: { errors, isValid },
  } = useFormContext<SignUpValues>();

  function handlePasswordChange() {
    if (watch('confirmPassword')) {
      trigger('confirmPassword');
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        {...register('name')}
        placeholder="Nome"
        error={errors.name?.message}
      />
      <InputField
        {...register('email')}
        type="email"
        placeholder="Endereço de e-mail"
        error={errors.email?.message}
      />
      <InputField
        {...register('password', { onChange: handlePasswordChange })}
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
      />
      <InputField
        {...register('confirmPassword')}
        type="password"
        placeholder="Confirmar senha"
        error={errors.confirmPassword?.message}
      />

      <Styled.ButtonSubmit disabled={!isValid}>
        Registrar
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
}

type Tab = Account['tab'];

export function Login() {
  const formMethods = useForm({
    mode: 'all',
    resolver: zodResolver(accountSchema),
    defaultValues: {
      tab: 'signin',
    },
  });

  const tab = formMethods.watch('tab');

  function handleTabClick(tabClicked: Tab) {
    if (tab !== tabClicked) {
      formMethods.reset({ tab: tabClicked });
    }
  }

  const onSubmit: SubmitHandler<Account> = async (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <Header />

      <Styled.Container as="main">
        <Styled.Tabs>
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
