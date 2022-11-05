// import { useParams } from 'react-router-dom';

import { Header } from '@components/Header';
import * as Styled from './styles';
import { InputField } from '@components/InputField';

export function Checkout() {
  // const { id: productId } = useParams();

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
