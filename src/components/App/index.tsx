import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '../../Routes';
import { AuthContextProvider } from '@contexts/AuthContext';
import { ToastContainer } from '@components/Toast';
import GlobalStyles from '@styles/global';

export function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
        <AppRoutes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
