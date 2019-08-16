import React from 'react';

import logo from '../../media/logo.svg';

import {
  MainHolder, FiapLogo, HeaderMenu, LogoutButton, LogoutContainer, WelcomeText, SubWelcomeText,
} from './styles';

const Header = () => (
  <MainHolder>
    <HeaderMenu>
      <FiapLogo src={logo} alt='Logo' />
      <LogoutContainer>
        <LogoutButton />
        SAIR
      </LogoutContainer>
    </HeaderMenu>

    <WelcomeText>
      Olá Gabriel,
      <SubWelcomeText>
        Seja bem-vindo ao portal do aluno.
      </SubWelcomeText>
    </WelcomeText>
  </MainHolder>
);

export default Header;
