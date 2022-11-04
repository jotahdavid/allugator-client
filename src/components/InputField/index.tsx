import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { XCircle } from 'phosphor-react';

import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const InputField = forwardRef<null, InputProps>(({ error, ...props }, ref) => {
  const id = useId();

  return (
    <Styled.Label htmlFor={id}>
      <Styled.Input
        ref={ref}
        id={id}
        {...props}
      />

      {error && (
        <Styled.ErrorMessage className="pl-1 mt-1 text-xs text-red-500">
          <XCircle size={16} weight="bold" />
          {error}
        </Styled.ErrorMessage>
      )}
    </Styled.Label>
  );
});

InputField.defaultProps = {
  error: '',
};
