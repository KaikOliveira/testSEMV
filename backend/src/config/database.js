const sqlite3 = require('sqlite3').verbose();

const bd = new sqlite3.Database('data.db');

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    tipopessoa INTEGER NOT NULL,
    cpf_cnpj VARCHAR(14) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    nro_logradouro VARCHAR(10),
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    cep VARCHAR(8) NOT NULL
)
`;

const INSERIR_CLIENTE_1 = `
INSERT INTO clientes (
  tipopessoa,
  cpf_cnpj,
  nome,
  endereco,
  nro_logradouro,
  bairro,
  cidade,
  uf,
  cep
) SELECT 1, '457.505.742-02', 'Kaik Oliveira', 'Av Brasil', 'n40', 'Centro', 'Quata', 'SP', '12345678' WHERE NOT EXISTS (SELECT * FROM clientes WHERE nome = 'Kaik Oliveira')
`;

const TIPO_PESSOA_SCHEMA = `
CREATE TABLE IF NOT EXISTS tipo_pessoa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao VARCHAR(30) NOT NULL
)
`;

const INSERIR_TIPO_PESSOA_FISICA = `
INSERT INTO tipo_pessoa (
    descricao
) SELECT 'Pessoa Fisica' WHERE NOT EXISTS (SELECT * FROM tipo_pessoa WHERE descricao = 'Pessoa Fisica')
`;

const INSERIR_TIPO_PESSOA_JURIDICA = `
INSERT INTO tipo_pessoa (
    descricao
) SELECT 'Pessoa Juridica' WHERE NOT EXISTS (SELECT * FROM tipo_pessoa WHERE descricao = 'Pessoa Juridica')
`;

bd.serialize(() => {
  bd.run('PRAGMA foreign_keys=ON');
  bd.run(CLIENTES_SCHEMA);
  bd.run(INSERIR_CLIENTE_1);
  bd.run(TIPO_PESSOA_SCHEMA);
  bd.run(INSERIR_TIPO_PESSOA_FISICA);
  bd.run(INSERIR_TIPO_PESSOA_JURIDICA);

  bd.each('SELECT * FROM clientes', (err, client) => {
    console.log('Cliente: ');
    console.log(client);
  });
});

process.on('SIGINT', () => bd.close(() => {
  console.log('BD encerrado!');
  process.exit(0);
}));

module.exports = bd;
