import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import * as Styled from './styles';

export function Page404() {
  return (
    <>
      <Header />
      <Styled.Container>
        <p className="code">404</p>
        <p>Page not found</p>
      </Styled.Container>
      <Footer />
    </>
  );
}
