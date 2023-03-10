import R$ from '@utils/formatCurrency';

import * as Styled from './styles';

interface CartFooterProps {
  total: number;
}

export function CartFooter({ total }: CartFooterProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <strong>
          Total:&nbsp;
          {R$(total)}
        </strong>
        <Styled.FinishButton>
          Finalizar
        </Styled.FinishButton>
      </Styled.Content>
    </Styled.Container>
  );
}
