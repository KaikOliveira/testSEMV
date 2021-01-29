import React from 'react';
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
          {...props}
        />
        <p>Cpf / Cnpj *</p>
        <InputBase
          {...props}
        />
        <p>Nome *</p>
        <InputBase
          {...props}
        />
        <p>Endereço *</p>
        <InputBase
          {...props}
        />
        <p>Numero *</p>
        <InputBase
          {...props}
        />
        <p>Bairro *</p>
        <InputBase
          {...props}
        />
        <p>Cidade *</p>
        <InputBase
          {...props}
        />
        <p>UF *</p>
        <InputBase
          {...props}
        />
        <p>CEP *</p>
        <InputBase
          {...props}
        />

        <BoxButton>
          <Confirm>
            <FiSave size={20} color="#fff" />
            <p>Cadastrar</p>
          </Confirm>
          <Cancel>
            <FiX size={20} color="#fff" />
            <p>Cancelar</p>
          </Cancel>
        </BoxButton>

      </Content>
    </Wrapper>
  );
}
