import R$ from '@utils/formatCurrency';

import * as Styled from './styles';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
}

export function ProductCard({ imageUrl, name, price }: ProductCardProps) {
  return (
    <Styled.Card>
      <Styled.Preview>
        <img
          src={imageUrl}
          alt={`Imagem do ${name}`}
        />
      </Styled.Preview>

      <Styled.Details>
        <span className="title">
          {name}
        </span>

        <span className="price">
          {R$(price)}
          /ano
        </span>
      </Styled.Details>
    </Styled.Card>
  );
}
