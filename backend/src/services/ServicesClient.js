class ServiceClient {
  constructor(db) {
    this._db = db;
  }

  adiciona(client) {
    return new Promise((resolve, reject) => {
      this._db.run(`
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
              ) values (?,?,?,?,?,?,?,?,?)
          `, [
        client.tipopessoa,
        client.cpf_cnpj,
        client.nome,
        client.endereco,
        client.nro_logradouro,
        client.bairro,
        client.cidade,
        client.uf,
        client.cep,
      ],
      (err) => {
        if (err) {
          console.log(err);
          return reject('Não foi possivel adicionar um novo Client');
        }
        resolve();
      });
    });
  }

  lista() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM clientes',
        (erro, resultados) => {
          if (erro) { return reject('Não foi possivel listar os clients!'); }

          return resolve(resultados);
        },

      );
    });
  }

  buscaPorId(nome) {
    return new Promise((resolve, reject) => {
      this._db.get(`
              SELECT * FROM clients WHERE nome = ?
          `,
      [nome],
      (erro, client) => {
        if (erro) {
          return reject('Não foi possivel encontrar o Client !');
        }
        return resolve(client);
      });
    });
  }

  atualiza(client) {
    return new Promise((resolve, reject) => {
      this._db.run(`
              UPDATE clientes SET
                tipopessoa = ?,
                cpf_cnpj = ?,
                nome = ?
                endereco = ?
                nro_logradouro = ?
                bairro = ?
                cidade = ?
                uf = ?
                cep = ?
              WHERE nome = ?
          `,
      [
        client.tipopessoa,
        client.cpf_cnpj,
        client.nome,
        client.endereco,
        client.nro_logradouro,
        client.bairro,
        client.cidade,
        client.uf,
        client.cep,

      ],
      (erro) => {
        if (erro) {
          return reject('Não foi possivel atualizar os dados do Client!');
        }
        resolve();
      });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      this._db.get(`
              DELETE FROM clients WHERE id = ?
          `,
      [id],
      (erro) => {
        if (erro) {
          return reject('Nao foi possivel remover o Cliente!');
        }
        return resolve();
      });
    });
  }
}

module.exports = ServiceClient;
