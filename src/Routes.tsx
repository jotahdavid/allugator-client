import { Routes, Route } from 'react-router-dom';

import { Products } from '@pages/Products';
import { Login } from '@pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
