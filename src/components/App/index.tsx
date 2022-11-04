import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '../../Routes';
import GlobalStyles from '@styles/global';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}
