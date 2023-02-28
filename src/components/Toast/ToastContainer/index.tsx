import { useCallback, useEffect, useState } from 'react';

import { ToastEventManager, ToastMessageType, ToastPayload } from '@lib/toast';
import { ToastMessage } from '../ToastMessage';
import * as Styled from './styles';

interface Message {
  id: number;
  type: ToastMessageType;
  text: string;
  duration?: number;
}

export function ToastContainer() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleRemoveMessage = useCallback((messageId: number) => {
    setMessages((prevState) => (
      prevState.filter((message) => message.id !== messageId)
    ));
  }, []);

  useEffect(() => {
    function handleAddToast({ type, text, duration }: ToastPayload) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    ToastEventManager.on('addtoast', handleAddToast);
    return () => ToastEventManager.removeListener('addtoast', handleAddToast);
  }, [setMessages]);

  return (
    <Styled.Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemove={handleRemoveMessage}
        />
      ))}
    </Styled.Container>
  );
}
