import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';

import ProductsService, { ProductResponse } from '@services/ProductsService';
import R$ from '@utils/formatCurrency';
import toast from '@lib/toast';

import { Header } from '@components/Header';
import { Loader } from '@components/Loader';

import * as Styled from './styles';

type Product = ProductResponse;

export function ProductInfo() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id: productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const productData = await ProductsService.getProductById(productId!);
        setProduct(productData);
      } catch {
        toast.danger('Produto não encontrado');
        navigate('/', { replace: true });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId, navigate]);

  if (isLoading || !product) {
    return <Loader loading />;
  }

  return (
    <>
      <Header />

      <Styled.Container as="main">
        <Styled.Preview>
          <img
            src={product.imageUrl}
            alt={`Imagem do ${product.name}`}
          />
        </Styled.Preview>

        <Styled.Details>
          <h2 className="product-name">{product.name}</h2>
          <span className="product-price">
            {R$(product.rentPrice)}
          </span>

          <p>Período de assinatura: 12 meses</p>

          <Link to={`/checkout/${product.id}`}>
            <Styled.Rent>
              <ShoppingBag weight="bold" size={24} />
              Alugar
            </Styled.Rent>
          </Link>
        </Styled.Details>
      </Styled.Container>
    </>
  );
}
