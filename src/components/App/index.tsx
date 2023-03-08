import AppRoutes from '../../Routes';
import { AuthContextProvider } from '@contexts/AuthContext';
import { ToastContainer } from '@components/Toast';
import GlobalStyles from '@styles/global';

export function App() {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <ToastContainer />
      <AppRoutes />
    </AuthContextProvider>
  );
}
