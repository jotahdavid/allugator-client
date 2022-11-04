import { CaretDown } from 'phosphor-react';

import { Search } from '@components/Search';
import * as Styled from './styles';

export function ProductList() {
  return (
    <Styled.Header>
      <Search />

      <Styled.Filters>
        <Styled.SelectContainer>
          <Styled.Select defaultValue="placeholder">
            <option hidden value="placeholder">Ordenar por</option>
            <option value="high-to-low">Menor preço para o maior</option>
            <option value="low-to-hight">Maior preço para o menor</option>
            <option value="a-z">Ordem alfabética (A-Z)</option>
          </Styled.Select>

          <CaretDown color="#171717" size={20} weight="bold" />
        </Styled.SelectContainer>

        <span>10 itens</span>
      </Styled.Filters>
    </Styled.Header>
  );
}
