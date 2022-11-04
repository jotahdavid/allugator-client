import { useState } from 'react';

import { Header } from '@components/Header';
import * as Styled from './styles';

function SignInForm() {
  return (
    <Styled.Form>
      <Styled.Input
        type="email"
        placeholder="Endereço de e-mail"
      />
      <Styled.Input
        type="password"
        placeholder="Senha"
      />

      <Styled.ButtonSubmit disabled>
        Entrar
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
}

function SignUpForm() {
  return (
    <Styled.Form>
      <Styled.Input
        placeholder="Nome"
      />
      <Styled.Input
        type="email"
        placeholder="Endereço de e-mail"
      />
      <Styled.Input
        type="password"
        placeholder="Senha"
      />
      <Styled.Input
        type="password"
        placeholder="Confirmar senha"
      />

      <Styled.ButtonSubmit disabled>
        Registrar
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
}

type Tab = 'signin' | 'signup';

export function Login() {
  const [tab, setTab] = useState<Tab>('signin');

  function handleTabClick(tabClicked: Tab) {
    if (tabClicked !== tab) {
      setTab(tabClicked);
    }
  }

  return (
    <>
      <Header />

      <Styled.Container as="main">
        <Styled.Tabs>
          <Styled.Tab
            active={tab === 'signin'}
            onClick={() => handleTabClick('signin')}
          >
            Acessar conta
          </Styled.Tab>
          <Styled.Tab
            active={tab === 'signup'}
            onClick={() => handleTabClick('signup')}
          >
            Registrar-se
          </Styled.Tab>
        </Styled.Tabs>

        {tab === 'signin' ? <SignInForm /> : <SignUpForm />}
      </Styled.Container>
    </>
  );
}
