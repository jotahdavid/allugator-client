import {
  useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import cookies from 'js-cookie';
import { AxiosError } from 'axios';

import SubscriptionsService, { SubscriptionResponse } from '@services/SubscriptionsService';
import { useAuth } from '@hooks/useAuth';
import toast from '@lib/toast';

import { Header } from '@components/Header';
import { SubscriptionItem } from '@components/SubscriptionItem';
import { Loader } from '@components/Loader';
import { Footer } from '@components/Footer';

import * as Styled from './styles';

type Subscription = SubscriptionResponse;

export function SubscriptionHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const { isAuthenticated, isLoading: loadingUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loadingUser) {
      navigate('/');
    }
  }, [isAuthenticated, loadingUser, navigate]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const token = cookies.get('allugacell.token');

        if (!token) return;

        const subscriptionsData = await SubscriptionsService.listSubscriptionsByToken(token);
        setSubscriptions(subscriptionsData);
      } catch (err) {
        if ((err instanceof AxiosError)) {
          toast.danger(err.message);
        }
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [navigate]);

  const today = new Date();

  if (isLoading) {
    return <Loader loading />;
  }

  return (
    <>
      <Header />

      <Styled.Container>
        <h1>Histórico de assinaturas</h1>

        <Styled.Subscriptions>
          {subscriptions.length < 1 && (
            <Styled.EmptySubscriptions>
              Nenhum assinatura foi realizada
            </Styled.EmptySubscriptions>
          )}

          {subscriptions.length > 0 && subscriptions.map(({ product, ...subscription }) => (
            <SubscriptionItem
              key={subscription.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.rentPrice}
              active={today < new Date(subscription.expiresAt)}
              expiresAt={new Date(subscription.expiresAt)}
            />
          ))}
        </Styled.Subscriptions>
      </Styled.Container>

      <Footer />
    </>
  );
}
