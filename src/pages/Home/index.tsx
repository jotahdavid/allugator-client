import { Header } from '@components/Header';
import { ProductList } from '@components/ProductList';

import { Container } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Container as="main">
        <ProductList />
      </Container>
    </>
  );
}
