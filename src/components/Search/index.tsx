import { ChangeEvent } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import * as Styled from './styles';

interface SearchProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

export function Search({ onSearch, placeholder }: SearchProps) {
  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm.trim());
  }

  return (
    <Styled.Container>
      <Styled.SearchInput
        placeholder={placeholder}
        onChange={handleChangeSearchTerm}
      />
      <MagnifyingGlass color="#171717" size={20} weight="bold" />
    </Styled.Container>
  );
}

Search.defaultProps = {
  placeholder: '',
};
