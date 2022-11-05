import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';

import ProductsService, { ProductResponse } from '@services/ProductsService';
import R$ from '@utils/formatCurrency';

import { Header } from '@components/Header';
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
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId, navigate]);

  if (isLoading || !product) {
    return null;
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

          <Styled.Rent>
            <ShoppingBag weight="bold" size={24} />
            Alugar
          </Styled.Rent>
        </Styled.Details>
      </Styled.Container>
    </>
  );
}
