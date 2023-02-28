import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import cookies from 'js-cookie';
import { AxiosError } from 'axios';

import ProductsService from '@services/ProductsService';
import SubscriptionsService from '@services/SubscriptionsService';
import { useAuth } from '@hooks/useAuth';
import toast from '@lib/toast';

import { Header } from '@components/Header';
import { InputField } from '@components/InputField';
import { Loader } from '@components/Loader';
import { Spinner } from '@components/Spinner';

import * as Styled from './styles';

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
  const location = useLocation();

  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated && !isAuthLoading) {
      navigate('/login', { replace: true, state: { redirect: location.pathname } });
    }
  }, [isAuthLoading, isAuthenticated, navigate, location]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        await ProductsService.getProductById(productId!);
      } catch {
        toast.danger('Produto não encontrado');
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
      if (!(err instanceof AxiosError)) {
        console.error(err);
        return;
      }

      // eslint-disable-next-line no-alert
      alert(err.response?.data.error ?? 'Something went wrong');
    }
  };

  if (isLoading) {
    return <Loader loading />;
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
              {isSubmitting && (
                <Spinner color="#FFF" size={16} />
              )}
              Finalizar
            </Styled.Button>
          </Styled.Side>
        </Styled.Form>
      </Styled.Container>
    </>
  );
}
