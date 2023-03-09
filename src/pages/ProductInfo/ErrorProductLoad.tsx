import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import toast from '@lib/toast';

export function ErrorProductLoad() {
  useEffect(() => {
    toast.danger('Produto não encontrado');
  }, []);

  return <Navigate to="/" replace />;
}
