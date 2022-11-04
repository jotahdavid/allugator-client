import { MagnifyingGlass } from 'phosphor-react';

import { Form, SearchInput } from './styles';

export function Search() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <div>
        <SearchInput placeholder="Nome do produto" />
        <MagnifyingGlass color="#171717" size={20} weight="bold" />
      </div>

      <button type="submit">Buscar</button>
    </Form>
  );
}
