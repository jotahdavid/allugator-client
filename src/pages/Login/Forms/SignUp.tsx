import { SubmitHandler, useFormContext } from 'react-hook-form';

import { InputField } from '@components/InputField';

import { Account } from '../schema';
import * as Styled from '../styles';

type SignUpValues = Account & { tab: 'signup' };

interface SignUpFormProps {
  onSubmit: SubmitHandler<Account>;
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const {
    handleSubmit, register, watch, trigger, formState: { errors, isValid, isSubmitting },
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

      <Styled.ButtonSubmit disabled={!isValid || isSubmitting}>
        Registrar
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
}
