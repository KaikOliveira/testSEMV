import React from 'react';

import { 
  ContainerHeader, 
  Logo, 
  Content, 
  LineTop, 
  Menu, 
  BoxLeft, 
  Admin, 
  Quit 
} from './styles';

export default function Header() {
  return(
    <ContainerHeader> 
      <Logo />

      <Content>
        <LineTop>
          <Menu />

          <BoxLeft>
            <Admin />
            <Quit />
          </BoxLeft>
        </LineTop>
      </Content>
    </ContainerHeader>
  )
}