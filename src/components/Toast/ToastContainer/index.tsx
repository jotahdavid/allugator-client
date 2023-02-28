import { useEffect } from 'react';

import { ToastEventManager, ToastMessageType, ToastPayload } from '@lib/toast';
import useAnimatedList from '@hooks/useAnimatedList';

import { ToastMessage } from '../ToastMessage';
import * as Styled from './styles';

interface Message {
  id: number;
  type: ToastMessageType;
  text: string;
  duration?: number;
}

export function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItem: handleRemoveMessage,
    renderList: renderMessages,
  } = useAnimatedList<Message>([]);

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
      {renderMessages<HTMLDivElement>((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemove={handleRemoveMessage}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Styled.Container>
  );
}
