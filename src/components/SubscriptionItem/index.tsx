import * as Styled from './styles';

import R$ from '@utils/formatCurrency';
import formatDate from '@utils/formatDate';

interface SubscriptionItemProps {
  imageUrl: string;
  name: string;
  price: number;
  active: boolean;
  expiresAt: Date;
}

export function SubscriptionItem({
  imageUrl, name, price, active, expiresAt,
}: SubscriptionItemProps) {
  return (
    <Styled.Container disabled={!active}>
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
        <strong className="product-status">
          Status:&nbsp;
          {active ? 'ATIVO' : 'EXPIRADO'}
        </strong>
      </Styled.Details>

      <Styled.DueDate>
        <strong>Data de vencimento</strong>
        {formatDate(expiresAt)}
      </Styled.DueDate>
    </Styled.Container>
  );
}
