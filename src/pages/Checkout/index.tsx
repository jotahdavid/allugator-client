import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import ProductsService from '@services/ProductsService';
import { useAuth } from '@hooks/useAuth';

import { Header } from '@components/Header';
import { InputField } from '@components/InputField';
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
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'all',
  });

  const { id: productId } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

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

  const onSubmit: SubmitHandler<CheckoutData> = (data) => {
    console.log(data);
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

            <InputField label="Número do cartão" value="5599 1050 4341 1183" />

            <InputField label="CVV" value="943" />

            <InputField label="Data de expiração" value="03/24" />

            <InputField label="Nome no cartão" value={user?.name} />

            <Styled.Button>
              Finalizar
            </Styled.Button>
          </Styled.Side>
        </Styled.Form>
      </Styled.Container>
    </>
  );
}
