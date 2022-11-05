import { Routes, Route, Navigate } from 'react-router-dom';

import { Products } from '@pages/Products';
import { Login } from '@pages/Login';
import { ProductInfo } from '@pages/ProductInfo';
import { SubscriptionHistory } from '@pages/Subscriptions';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Navigate to="/" />} />
      <Route path="/product/:id" element={<ProductInfo />} />
      <Route path="/subscriptions" element={<SubscriptionHistory />} />
    </Routes>
  );
}
