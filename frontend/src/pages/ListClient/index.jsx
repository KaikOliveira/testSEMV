import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import api from '../../service/api';

import Header from '../../components/Header/index';
import InputSearch from '../../components/InputSearch/index';
import Select from '../../components/Select/index';

import {
  Wrapper,
  ContentContainer,
  Status,
  SearchContainer,
  ListClients,
  SearchHeader,
  List,
  InfosClient,
  RowTop,
  RowBottom,
  BoxIdSearch,
  BoxContents,
  Confirm,
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

        <SearchContainer>

          <RowTop>
            <BoxIdSearch>
              <p>Código</p>
              <InputSearch />
            </BoxIdSearch>

            <BoxContents>
              <p>Nome</p>
              <InputSearch />
              <Select />
            </BoxContents>

            <BoxContents>
              <p>E-mail</p>
              <InputSearch />
              <Select />
            </BoxContents>

            <BoxContents>
              <p>Senha</p>
              <InputSearch />
              <Select />
            </BoxContents>
          </RowTop>

          <RowBottom>
            <BoxIdSearch>
              <p>Client</p>
              <InputSearch />
              <Select />
            </BoxIdSearch>

            <BoxContents>
              <p>Curso</p>
              <InputSearch />
              <Select />
            </BoxContents>

            <BoxContents>
              <p>Status</p>
              <InputSearch />
              <Select />
            </BoxContents>

            <Confirm type="submit">
              <IoIosSearch size={20} color="#fff" />
              <p>Buscar</p>
            </Confirm>

          </RowBottom>

        </SearchContainer>

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
              <InfosClient>
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
              </InfosClient>
            </List>
          ))}

        </ListClients>
      </ContentContainer>
    </Wrapper>
  );
}
