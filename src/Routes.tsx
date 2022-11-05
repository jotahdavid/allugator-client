import { Routes, Route, Navigate } from 'react-router-dom';

import { Products } from '@pages/Products';
import { Login } from '@pages/Login';
import { ProductInfo } from '@pages/ProductInfo';
import { SubscriptionHistory } from '@pages/SubscriptionHistory';
import { Checkout } from '@pages/Checkout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />

      <Route path="/product" element={<Navigate to="/" />} />
      <Route path="/product/:id" element={<ProductInfo />} />

      <Route path="/checkout" element={<Navigate to="/" />} />
      <Route path="/checkout/:id" element={<Checkout />} />

      <Route path="/subscriptions" element={<SubscriptionHistory />} />
    </Routes>
  );
}
