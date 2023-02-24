import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import cookies from 'js-cookie';
import axios from 'axios';

import ProductsService from '@services/ProductsService';
import { useAuth } from '@hooks/useAuth';

import { Header } from '@components/Header';
import { InputField } from '@components/InputField';
import * as Styled from './styles';
import SubscriptionsService from '@services/SubscriptionsService';

const checkoutSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, 'Formato de CEP inválido'),
  address: z.string().min(1, 'Campo obrigatório'),
  neighborhood: z.string().min(1, 'Campo obrigatório'),
  city: z.string().min(1, 'Campo obrigatório'),
});

type CheckoutData = z.infer<typeof checkoutSchema>;

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CheckoutData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'all',
  });

  const { id: productId } = useParams();
  const navigate = useNavigate();

  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated && !isAuthLoading) {
      navigate('/login', { replace: true });
    }
  }, [isAuthLoading, isAuthenticated, navigate]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const product = await ProductsService.getProductById(productId!);

        if (!product) {
          navigate('/');
        }
      } catch {
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId, navigate]);

  const onSubmit: SubmitHandler<CheckoutData> = async () => {
    try {
      const token = cookies.get('allugacell.token');

      if (!token) return;

      await SubscriptionsService.createSubscriptionByToken(token, productId!);

      navigate('/subscriptions');
    } catch (err) {
      if (!(err instanceof axios.AxiosError)) {
        console.error(err);
        return;
      }

      // eslint-disable-next-line no-alert
      alert(err.response?.data.error ?? 'Something went wrong');
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header />

      <Styled.Container>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Side>
            <h2 className="title">Endereço</h2>

            <InputField
              {...register('name')}
              label="Nome completo"
              error={errors.name?.message}
            />

            <InputField
              {...register('cep')}
              label="CEP"
              error={errors.cep?.message}
            />

            <InputField
              {...register('address')}
              label="Endereço"
              error={errors.address?.message}
            />

            <InputField
              {...register('neighborhood')}
              label="Bairro"
              error={errors.neighborhood?.message}
            />

            <InputField
              {...register('city')}
              label="Cidade"
              error={errors.city?.message}
            />
          </Styled.Side>

          <Styled.Side>
            <h2 className="title">Detalhes de pagamento</h2>

            <InputField
              label="Número do cartão"
              defaultValue="5599 1050 4341 1183"
              disabled
            />

            <InputField
              label="CVV"
              defaultValue="943"
              disabled
            />

            <InputField
              label="Data de expiração"
              defaultValue="03/24"
              disabled
            />

            <InputField
              label="Nome no cartão"
              defaultValue={user?.name}
              disabled
            />

            <Styled.Button disabled={!isValid || isSubmitting}>
              Finalizar
            </Styled.Button>
          </Styled.Side>
        </Styled.Form>
      </Styled.Container>
    </>
  );
}
