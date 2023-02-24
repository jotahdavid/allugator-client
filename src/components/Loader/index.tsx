import ReactDOM from 'react-dom';

import * as Styled from './styles';

interface LoaderProps {
  loading: boolean;
}

export function Loader({ loading }: LoaderProps) {
  if (!loading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Styled.Overlay>
      <Styled.Loading />
    </Styled.Overlay>,
    document.getElementById('loader-root')!,
  );
}
