import { Routes, Route } from 'react-router-dom';

import { Products } from '@pages/Products';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  );
}
