import React from 'react';
import {
  FiMenu, FiLogOut, FiUser, FiSlack,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  ContainerHeader,
  Logo,
  Content,
  LineTop,
  BoxLeft,
  LineBottom,
} from './styles';

export default function Header() {
  return (
    <ContainerHeader>
      <Logo />

      <Content>
        <LineTop>
          <div>
            <FiMenu size={28} color="#fff" />
          </div>

          <BoxLeft>
            <div>
              <FiUser size={18} color="#fff" />
              <p>admin</p>
            </div>
            <div>
              <FiLogOut size={18} color="#fff" />
              <p>Sair</p>
            </div>
          </BoxLeft>
        </LineTop>

        <LineBottom>
          <h1>Clientes do Moddle</h1>

          <div>
            <FiSlack size={14} color="#333" />
            <p>Desenvolvimento </p>
            {' '}
            <pre>{'>'}</pre>
            <Link to="/create">Clientes do Moddle</Link>
          </div>
        </LineBottom>
      </Content>
    </ContainerHeader>
  );
}
