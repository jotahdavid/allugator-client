import { SubmitHandler, useFormContext } from 'react-hook-form';

import { InputField } from '@components/InputField';

import { Account } from '../schema';
import * as Styled from '../styles';

type SignInValues = Account & { tab: 'signin' };

interface SignInFormProps {
  onSubmit: SubmitHandler<Account>;
}

export function SignInForm({ onSubmit }: SignInFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useFormContext<SignInValues>();

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

      <Styled.ButtonSubmit disabled={!isValid || isSubmitting}>
        Entrar
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
}
