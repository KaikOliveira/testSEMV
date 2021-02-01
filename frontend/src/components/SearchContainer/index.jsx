import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

import InputSearch from '../InputSearch/index';
import Select from '../Select/index';

import {
  SearchContainer,
  RowTop,
  RowBottom,
  BoxIdSearch,
  BoxContents,
  Button,
} from './styles';

export default function SearchWrapper() {
  return (
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
          <p>Cliente</p>
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

        <Button type="submit">
          <Link to="create">
            <IoIosSearch size={20} color="#fff" />
            <p>Buscar</p>
          </Link>
        </Button>

      </RowBottom>
    </SearchContainer>

  );
}
