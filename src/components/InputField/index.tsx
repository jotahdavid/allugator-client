import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { XCircle } from 'phosphor-react';

import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string
}

export const InputField = forwardRef<null, InputProps>(({
  error, label, placeholder, ...props
}, ref) => {
  const id = useId();

  return (
    <Styled.Label
      htmlFor={id}
      error={Boolean(error)}
    >
      <Styled.Input
        {...props}
        ref={ref}
        id={id}
        hasLabel={Boolean(label)}
        placeholder={label || placeholder}
      />
      {label && (
        <span className="label">
          {label}
        </span>
      )}

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
  label: '',
  error: '',
};
