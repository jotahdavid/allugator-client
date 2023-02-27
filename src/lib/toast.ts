import EventManager from '@lib/EventManager';

export type ToastMessageType = 'default' | 'sucess' | 'danger';

export interface ToastPayload {
  type: ToastMessageType;
  text: string;
  duration?: number;
}

export const ToastEventManager = new EventManager<ToastPayload>();

function addToast(toast: ToastPayload) {
  ToastEventManager.emit('addtoast', toast);
}

function createHandler(type: ToastMessageType) {
  return (text: string, duration?: number) => addToast({ type, text, duration });
}

const toast = (text: string, duration?: number) => createHandler('default')(text, duration);
toast.danger = createHandler('danger');
toast.sucess = createHandler('sucess');

export default toast;
