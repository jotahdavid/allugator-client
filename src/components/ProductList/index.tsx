import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { CaretDown } from 'phosphor-react';

import ProductsService, { OrderBy, ProductResponse } from '@services/ProductsService';

import { Search } from '@components/Search';
import { ProductCard } from '@components/ProductList/ProductCard';
import { Loader } from '@components/Loader';

import * as Styled from './styles';

type Product = ProductResponse;

type FilterOptions = 'high-to-low' | 'low-to-high' | 'a-z';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<OrderBy>();
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const filteredProducts = useMemo(() => (
    products.filter((product) => (
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  ), [products, searchTerm]);

  useEffect(() => {
    (async () => {
      setIsLoadingProducts(true);
      try {
        const productList = await ProductsService.listProducts(filter);
        setProducts(productList);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingProducts(false);
      }
    })();
  }, [filter]);

  function handleChangeSearchTerm(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    const option = event.target.value as FilterOptions;

    if (option === 'high-to-low') {
      setFilter({
        field: 'price',
        order: 'desc',
      });
      return;
    }
    if (option === 'low-to-high') {
      setFilter({
        field: 'price',
        order: 'asc',
      });
      return;
    }
    setFilter({
      field: 'name',
      order: 'asc',
    });
  }

  return (
    <>
      <Styled.Header>
        <Search
          placeholder="Nome do produto"
          onSearch={handleChangeSearchTerm}
        />

        <Styled.Filters>
          <Styled.SelectContainer>
            <Styled.Select
              defaultValue="placeholder"
              onChange={handleChangeSelect}
            >
              <option hidden value="placeholder">Ordenar por</option>
              <option value="low-to-high">Menor preço para o maior</option>
              <option value="high-to-low">Maior preço para o menor</option>
              <option value="a-z">Ordem alfabética (A-Z)</option>
            </Styled.Select>

            <CaretDown color="#171717" size={20} weight="bold" />
          </Styled.SelectContainer>

          <span>
            {filteredProducts.length}
            &nbsp;
            {filteredProducts.length === 1 ? 'item' : 'itens'}
          </span>
        </Styled.Filters>
      </Styled.Header>

      <Styled.Section>
        <Loader loading={isLoadingProducts} />

        {!isLoadingProducts && filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.rentPrice}
            />
          </Link>
        ))}
      </Styled.Section>
    </>
  );
}
