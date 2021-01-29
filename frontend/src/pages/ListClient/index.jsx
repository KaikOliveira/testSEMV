import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import api from '../../service/api';

import Header from '../../components/Header/index';

import {
  Wrapper,
  ContentContainer,
  Status,
  SearchContainer,
  ListClients,
  SearchHeader,
  List,
  AddressAndContact,
} from './styles';

export default function PageList() {
  const [dataClient, setDataClient] = useState([]);

  useEffect(() => {
    api.get('listar').then((response) => {
      setDataClient(response.data);
    });
  }, [dataClient]);

  return (
    <Wrapper>
      <Header />

      <ContentContainer>
        <Status>
          <p>Status</p>
          <IoIosArrowDown size={20} color="#444" />
        </Status>

        <SearchContainer />

        <ListClients>
          <SearchHeader>
            <p>ID</p>
            <p>Tipo de Pessoa</p>
            <p>CPF / CNPJ</p>
            <p>Nome</p>
            <p>CEP</p>
            <p>UF</p>
            <p>Cidade</p>
            <p>Endereço</p>
            <p>Bairro</p>
            <p>Numero</p>
          </SearchHeader>
          {dataClient.map((client) => (
            <List key={client.id}>
              <AddressAndContact>
                <p>
                  {client.id}
                </p>
                <p>
                  {client.tipopessoa}
                </p>
                <p>
                  {client.cpf_cnpj}
                </p>
                <p>
                  {client.nome}
                </p>
                <p>
                  {client.cep}
                </p>
                <p>
                  {client.uf}
                </p>
                <p>
                  {client.cidade}
                </p>
                <p>
                  {client.endereco}
                </p>
                <p>
                  {client.bairro}
                </p>
                <p>
                  {client.nro_logradouro}
                </p>
              </AddressAndContact>
            </List>
          ))}

        </ListClients>
      </ContentContainer>
    </Wrapper>
  );
}
