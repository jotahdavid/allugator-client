import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '../../Routes';
import { AuthContextProvider } from '@contexts/AuthContext';
import GlobalStyles from '@styles/global';

export function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
