import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSave, FiX } from 'react-icons/fi';
import api from '../../service/api';

import Header from '../../components/Header/index';
import InputBase from '../../components/Input/index';

import {
  Wrapper, Content, BoxButton, Confirm, Cancel,
} from './styles';

export default function CreateClient({ ...props }) {
  const history = useHistory();

  const [tipopessoa, setTipopessoa] = useState(1);
  const [cpf_cnpj, setCpf_cnpj] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nro_logradouro, setNro_logradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!tipopessoa
      || !cpf_cnpj
      || !nome
      || !endereco
      || !nro_logradouro
      || !bairro
      || !cidade
      || !uf
      || !cep) {
      alert('Preencha todos os campos');
    } else {
      await api.post('adiciona',
        {
          tipopessoa,
          cpf_cnpj,
          nome,
          endereco,
          nro_logradouro,
          bairro,
          cidade,
          uf,
          cep,
        });
      history.push('/');
    }
  }

  return (
    <Wrapper>
      <Header />

      <Content>
        <form onSubmit={handleSubmit}>
          <p>Tipo Pessoa: 1=Fisica 2=Juridica*</p>
          <InputBase
            placeholder="Tipo de Pessoa"
            value={tipopessoa}
            onChange={(e) => setTipopessoa(e.target.value)}
            {...props}
          />
          <p>Cpf / Cnpj *</p>
          <InputBase
            placeholder="Cpf / Cnpj"
            value={cpf_cnpj}
            onChange={(e) => setCpf_cnpj(e.target.value)}
            {...props}
          />
          <p>Nome *</p>
          <InputBase
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            {...props}
          />
          <p>Endereço *</p>
          <InputBase
            placeholder="Endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            {...props}
          />
          <p>Numero *</p>
          <InputBase
            placeholder="Numero"
            value={nro_logradouro}
            onChange={(e) => setNro_logradouro(e.target.value)}
            {...props}
          />
          <p>Bairro *</p>
          <InputBase
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            {...props}
          />
          <p>Cidade *</p>
          <InputBase
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            {...props}
          />
          <p>UF *</p>
          <InputBase
            placeholder="UF"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            {...props}
          />
          <p>CEP *</p>
          <InputBase
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            {...props}
          />

          <BoxButton>
            <Confirm type="submit">
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
        </form>

      </Content>
    </Wrapper>
  );
}
