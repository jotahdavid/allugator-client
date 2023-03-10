import { Trash } from 'phosphor-react';

import R$ from '@utils/formatCurrency';
import formatDate from '@utils/formatDate';

import * as Styled from './styles';

function getDateOneYearLater() {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date;
}

interface CartItemProps {
  imageUrl: string;
  name: string;
  price: number;
}

export function CartItem({ imageUrl, name, price }: CartItemProps) {
  const dateOneYearLater = getDateOneYearLater();

  return (
    <Styled.Container>
      <Styled.Preview>
        <img src={imageUrl} alt={`Imagem do ${name}`} />
      </Styled.Preview>

      <Styled.Details>
        <h4 className="product-name">
          {name}
        </h4>
        <span className="product-price">
          {R$(price)}
        </span>
      </Styled.Details>

      <Styled.SubscriptionTime>
        <strong>Assinatura de 1 ano</strong>
        <span>{formatDate(dateOneYearLater)}</span>

        <button type="button" className="remove-btn">
          <Trash color="#DA5656" size={24} />
          <strong>Remover</strong>
        </button>
      </Styled.SubscriptionTime>
    </Styled.Container>
  );
}
