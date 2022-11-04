import * as Styled from './styles';

import iPhoneImg from '@assets/images/iphone.png';

export function ProductCard() {
  return (
    <Styled.Card>
      <Styled.Preview>
        <img src={iPhoneImg} alt="iPhone" />
      </Styled.Preview>

      <Styled.Details>
        <span className="title">iPhone 12 XS</span>
        <span className="price">R$ 3.150,00/ano</span>
      </Styled.Details>
    </Styled.Card>
  );
}
