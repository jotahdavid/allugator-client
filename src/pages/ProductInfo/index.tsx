import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';

import type { ProductResponse } from '@services/ProductsService';
import R$ from '@utils/formatCurrency';

import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { Footer } from '@components/Footer';

import { ErrorProductLoad } from './ErrorProductLoad';
import * as Styled from './styles';

type Product = ProductResponse;

interface ProductInfoContentProps {
  product: Product;
}

function ProductInfoContent({ product }: ProductInfoContentProps) {
  return (
    <>
      <Header />

      <Styled.Container as="main">
        <Styled.Preview>
          <img
            src={product.imageUrl}
            alt={`Imagem do ${product.name}`}
          />
        </Styled.Preview>

        <Styled.Details>
          <h2 className="product-name">{product.name}</h2>
          <span className="product-price">
            {R$(product.rentPrice)}
          </span>

          <p>Período de assinatura: 12 meses</p>

          <Link to={`/checkout/${product.id}`}>
            <Styled.Rent>
              <ShoppingBag weight="bold" size={24} />
              Alugar
            </Styled.Rent>
          </Link>
        </Styled.Details>
      </Styled.Container>

      <Footer />
    </>
  );
}

export function ProductInfo() {
  const loaderData = useLoaderData() as { product: Promise<Product> };

  return (
    <Suspense fallback={<Loader loading />}>
      <Await resolve={loaderData.product} errorElement={<ErrorProductLoad />}>
        {(product) => <ProductInfoContent product={product} />}
      </Await>
    </Suspense>
  );
}
