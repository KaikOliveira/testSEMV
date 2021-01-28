import React, { useEffect, useState } from 'react';
import api from '../../service/api';

import Header from '../../components/Header/index';

import {
  Wrapper,
  ContentContainer,
  Status,
  SearchContainer,
  ListClients,
  List,
  Name,
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
        <Status />

        <SearchContainer />

        <ListClients>
          {dataClient.map((client) => (
            <List key={client.id}>
              <Name>{client.nome}</Name>
              <AddressAndContact>
                <p>
                  <strong>Tipo de pessoa:</strong>
                  {' '}
                  {client.tipopessoa}
                </p>
                <p>
                  <strong>Cpf/Cnpj: </strong>
                  {' '}
                  {client.cpf_cnpj}
                </p>
                <p>
                  <strong>Nome: </strong>
                  {' '}
                  {client.nome}
                </p>
                <p>
                  <strong>Endereço: </strong>
                  {' '}
                  {client.endereco}
                </p>
                <p>
                  <strong>Numero: </strong>
                  {' '}
                  {client.nro_logradouro}
                </p>
                <p>
                  <strong>Bairro: </strong>
                  {' '}
                  {client.bairro}
                </p>
                <p>
                  <strong>Cidade: </strong>
                  {' '}
                  {client.cidade}
                </p>
                <p>
                  <strong>UF: </strong>
                  {' '}
                  {client.uf}
                </p>
                <p>
                  <strong>Cep: </strong>
                  {' '}
                  {client.cep}
                </p>
              </AddressAndContact>
            </List>
          ))}
        </ListClients>
      </ContentContainer>
    </Wrapper>
  );
}
