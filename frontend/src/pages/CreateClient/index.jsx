import React from 'react';
import { Link } from 'react-router-dom';
import { FiSave, FiX } from 'react-icons/fi';

import Header from '../../components/Header/index';
import InputBase from '../../components/Input/index';

import {
  Wrapper, Content, BoxButton, Confirm, Cancel,
} from './styles';

export default function CreateClient({ ...props }) {
  return (
    <Wrapper>
      <Header />

      <Content>
        <p>Tipo Pessoa: 1=Fisica 2=Juridica*</p>
        <InputBase
          placeholder="Tipo de Pessoa"
          {...props}
        />
        <p>Cpf / Cnpj *</p>
        <InputBase
          placeholder="Cpf / Cnpj"
          {...props}
        />
        <p>Nome *</p>
        <InputBase
          placeholder="Nome"
          {...props}
        />
        <p>Endereço *</p>
        <InputBase
          placeholder="Endereço"
          {...props}
        />
        <p>Numero *</p>
        <InputBase
          placeholder="Numero"
          {...props}
        />
        <p>Bairro *</p>
        <InputBase
          placeholder="Bairro"
          {...props}
        />
        <p>Cidade *</p>
        <InputBase
          placeholder="Cidade"
          {...props}
        />
        <p>UF *</p>
        <InputBase
          placeholder="UF"
          {...props}
        />
        <p>CEP *</p>
        <InputBase
          placeholder="CEP"
          {...props}
        />

        <BoxButton>
          <Confirm>
            <FiSave size={20} color="#fff" />
            <p>Cadastrar</p>
          </Confirm>
          <Cancel>
            <Link to="/">
              <FiX size={20} color="#fff" />
              <p>Cancelar</p>
            </Link>
          </Cancel>
        </BoxButton>

      </Content>
    </Wrapper>
  );
}
