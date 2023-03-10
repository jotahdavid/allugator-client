import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Products } from '@pages/Products';
import { Login } from '@pages/Login';
import { ProductInfo } from '@pages/ProductInfo';
import { SubscriptionHistory } from '@pages/SubscriptionHistory';
import { Checkout } from '@pages/Checkout';
import { Page404 } from '@pages/404';
import { Cart } from '@pages/Cart';

import ProductsService from '@services/ProductsService';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />

      <Route path="/product" element={<Navigate to="/" />} />
      <Route
        path="/product/:id"
        element={<ProductInfo />}
        loader={({ params }) => ({
          product: ProductsService.getProductById(params.id!),
        })}
      />

      <Route path="/checkout" element={<Navigate to="/" />} />
      <Route path="/checkout/:id" element={<Checkout />} />

      <Route path="/subscriptions" element={<SubscriptionHistory />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<Page404 />} />
    </>,
  ),
);

export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}
