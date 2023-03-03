import { Header } from '@components/Header';
import { ProductList } from '@components/ProductList';
import { Footer } from '@components/Footer';

import * as Styled from './styles';

export function Products() {
  return (
    <>
      <Header />
      <Styled.Container as="main">
        <ProductList />
      </Styled.Container>
      <Footer />
    </>
  );
}
