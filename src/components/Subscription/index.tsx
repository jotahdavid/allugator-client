import * as Styled from './styles';

import iPhoneImg from '@assets/images/iphone.png';
import R$ from '@utils/formatCurrency';

export function Subscription() {
  return (
    <Styled.Container>
      <Styled.Preview>
        <img src={iPhoneImg} alt="Imagem do iPhone" />
      </Styled.Preview>

      <Styled.Details>
        <h4 className="product-name">
          iPhone XS
        </h4>
        <span className="product-price">
          {R$(3150)}
        </span>
        <strong className="product-status">
          Status: ATIVO
        </strong>
      </Styled.Details>

      <Styled.DueDate>
        <strong>Data de vencimento</strong>
        27 de novembro de 2023
      </Styled.DueDate>
    </Styled.Container>
  );
}
