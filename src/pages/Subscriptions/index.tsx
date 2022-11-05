import { Children, ReactNode } from 'react';

import { Header } from '@components/Header';
import { Subscription } from '@components/Subscription';
import * as Styled from './styles';

function Subscriptions({ children }: { children: ReactNode }) {
  const childrens = Children.toArray(children);

  return (
    <Styled.Subscriptions>
      {childrens.map((child) => (
        <li>{child}</li>
      ))}
    </Styled.Subscriptions>
  );
}

export function SubscriptionHistory() {
  return (
    <>
      <Header />

      <Styled.Container>
        <h1>Histórico de assinaturas</h1>

        <Subscriptions>
          <Subscription />
        </Subscriptions>
      </Styled.Container>
    </>
  );
}
