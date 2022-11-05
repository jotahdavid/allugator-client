import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Header } from '@components/Header';
import { InputField } from '@components/InputField';
import * as Styled from './styles';
import ProductsService from '@services/ProductsService';

export function Checkout() {
  const [isLoading, setIsLoading] = useState(true);

  const { id: productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const product = await ProductsService.getProductById(productId!);

        if (!product) {
          navigate('/');
        }
      } catch {
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId, navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header />

      <Styled.Container>
        <Styled.Form>
          <Styled.Side>
            <h2 className="title">Endereço</h2>

            <InputField label="Nome completo" />

            <InputField label="CEP" />

            <InputField label="Endereço" />

            <InputField label="Bairro" />

            <InputField label="Cidade" />
          </Styled.Side>

          <Styled.Side>
            <h2 className="title">Detalhes de pagamento</h2>

            <InputField label="Número do cartão" />

            <InputField label="CVV" />

            <InputField label="Data de expiração" />

            <InputField label="Nome no cartão" />

            <Styled.Button>
              Finalizar
            </Styled.Button>
          </Styled.Side>
        </Styled.Form>
      </Styled.Container>
    </>
  );
}
