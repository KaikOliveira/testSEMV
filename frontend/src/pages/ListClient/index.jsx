import React from 'react';

import Header from '../../components/Header/index';

import {
  Wrapper,
  ContentContainer,
  Status,
  SearchContainer,
} from './styles';

export default function PageList() {
  return (
    <Wrapper>
      <Header />

      <ContentContainer>
        <Status />

        <SearchContainer />
      </ContentContainer>
    </Wrapper>
  );
}
