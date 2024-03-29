import { memo, RefObject, useEffect } from 'react';
import { CheckCircle, XCircle } from 'phosphor-react';

import { ToastMessageType } from '@lib/toast';
import * as Styled from './styles';

interface ToastMessageProps {
  message: {
    id: number;
    text: string;
    type?: ToastMessageType;
    duration?: number;
  };
  isLeaving: boolean;
  animatedRef: RefObject<HTMLDivElement>;
  onRemove: (id: number) => void;
}

export const ToastMessage = memo(({
  message, isLeaving, animatedRef, onRemove,
}: ToastMessageProps) => {
  useEffect(() => {
    if (message.duration === 0) return undefined;

    const timeoutId = setTimeout(() => {
      onRemove(message.id);
    }, message.duration ?? 4000);

    return () => clearTimeout(timeoutId);
  }, [message, onRemove]);

  function handleRemoveToast() {
    onRemove(message.id);
  }

  return (
    <Styled.Container
      type={message.type ?? 'default'}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.type === 'sucess' && (
        <CheckCircle size={22} />
      )}
      {message.type === 'danger' && (
        <XCircle size={22} />
      )}
      <strong>{message.text}</strong>
    </Styled.Container>
  );
});
