import { useEffect, useState } from 'react';
import { CaretDown } from 'phosphor-react';

import ProductsService, { ProductResponse } from '@services/ProductsService';

import { Search } from '@components/Search';
import { ProductCard } from '@components/ProductList/ProductCard';

import * as Styled from './styles';

type Product = ProductResponse;

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const productList = await ProductsService.listProducts();
        setProducts(productList);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <Styled.Header>
        <Search />

        <Styled.Filters>
          <Styled.SelectContainer>
            <Styled.Select defaultValue="placeholder">
              <option hidden value="placeholder">Ordenar por</option>
              <option value="high-to-low">Menor preço para o maior</option>
              <option value="low-to-hight">Maior preço para o menor</option>
              <option value="a-z">Ordem alfabética (A-Z)</option>
            </Styled.Select>

            <CaretDown color="#171717" size={20} weight="bold" />
          </Styled.SelectContainer>

          <span>
            {products.length}
            &nbsp;
            {products.length === 1 ? 'item' : 'itens'}
          </span>
        </Styled.Filters>
      </Styled.Header>

      <Styled.Section>
        {products.map((product) => (
          <ProductCard
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.rentPrice}
          />
        ))}
      </Styled.Section>
    </>
  );
}
