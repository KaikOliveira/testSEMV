import React from 'react';
import { FiMenu, FiLogOut, FiUser, FiSlack } from 'react-icons/fi';
import { Link } from "react-router-dom";


import { 
  ContainerHeader, 
  Logo, 
  Content, 
  LineTop, 
  Menu, 
  BoxLeft, 
  Admin, 
  Quit,
  BoxLeftLabel,
  LineBottom,
  Title,
  BoxNav
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

        <LineBottom>
          <h1>Clientes do Moddle</h1>

          <BoxNav>
            <FiSlack size={14} color="#333" />
            <p>Desenvolvimento </p> <pre>{'>'}</pre>
            <Link to="#">Clients do Moddle</Link>
          </BoxNav>
        </LineBottom>
      </Content>
    </ContainerHeader>
  )
}