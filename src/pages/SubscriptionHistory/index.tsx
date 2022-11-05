import {
  Children, ReactNode, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import cookies from 'js-cookie';
import axios from 'axios';

import { Header } from '@components/Header';
import { SubscriptionItem } from '@components/SubscriptionItem';
import * as Styled from './styles';
import SubscriptionsService, { SubscriptionResponse } from '@services/SubscriptionsService';

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

type Subscription = SubscriptionResponse;

export function SubscriptionHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const token = cookies.get('allugacell.token');

        if (!token) return;

        const subscriptionsData = await SubscriptionsService.listSubscriptionsByToken(token);
        setSubscriptions(subscriptionsData);
      } catch (err) {
        if ((err instanceof axios.AxiosError)) {
          console.error(err.message);
        }
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header />

      <Styled.Container>
        <h1>Histórico de assinaturas</h1>

        <Subscriptions>
          {subscriptions.map(({ product, ...subscription }) => (
            <SubscriptionItem
              key={subscription.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              active
              expiresAt={new Date(subscription.expiresAt)}
            />
          ))}
        </Subscriptions>
      </Styled.Container>
    </>
  );
}