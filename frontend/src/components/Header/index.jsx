import React from 'react';
import { FiMenu, FiLogOut, FiUser } from 'react-icons/fi';


import { 
  ContainerHeader, 
  Logo, 
  Content, 
  LineTop, 
  Menu, 
  BoxLeft, 
  Admin, 
  Quit,
  BoxLeftLabel
} from './styles';

export default function Header() {
  return(
    <ContainerHeader> 
      <Logo />

      <Content>
        <LineTop>
          <Menu>
            <FiMenu size={28} color="#fff" />
          </Menu>

          <BoxLeft>
            <Admin>
              <FiUser size={18} color="#fff" />
              <BoxLeftLabel>admin</BoxLeftLabel>
            </Admin>
            <Quit>
              <FiLogOut size={18} color="#fff" />
              <BoxLeftLabel>Sair</BoxLeftLabel>
            </Quit>
          </BoxLeft>
        </LineTop>
      </Content>
    </ContainerHeader>
  )
}