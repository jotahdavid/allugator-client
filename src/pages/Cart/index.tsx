import { useState } from 'react';

import { ProductResponse } from '@services/ProductsService';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { CartItem } from '@components/CartItem';

import * as Styled from './styles';

type Product = ProductResponse;

export function Cart() {
  const [products] = useState<Product[]>([
    {
      id: 'item-id',
      name: 'iPhone 13',
      price: 5699,
      rentPrice: 2468,
      description: null,
      imageUrl: 'https://www.pngmart.com/files/21/iPhone-13-PNG-HD.png',
    },
  ]);

  return (
    <>
      <Header />

      <Styled.Container>
        <h1>Carrinho</h1>

        <Styled.Products>
          {products.length < 1 && (
            <Styled.EmptyCartMessage>
              Não há produtos adicionados no seu carrinho
            </Styled.EmptyCartMessage>
          )}

          {products.length > 0 && products.map((product) => (
            <CartItem
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.rentPrice}
            />
          ))}
        </Styled.Products>
      </Styled.Container>

      <Footer />
    </>
  );
}
