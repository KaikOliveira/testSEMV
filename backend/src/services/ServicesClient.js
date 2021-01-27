class ServiceClient {

  constructor(db) {
      this._db = db;
  }

  //Promise ADICIONAR LIVRO
  adiciona(client){
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
          `,[
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
            function (err) {
                if (err) {
                    console.log(err);
                    return reject ('Não foi possivel adicionar um novo Client');
                }
                resolve();
            }
          )
      });
  }
  //Promise LISTAR LIVRO
  lista(){
      return new Promise ((resolve, reject) => {
          this._db.all(
              "SELECT * FROM clientes",
              (erro, resultados) => {
                  if (erro)
                  return reject('Não foi possivel listar os clients!');

                  return resolve(resultados);
              }
                  
          )
      });
      
  }
  //Promise BUSCAR POR ID Livro
  buscaPorId(id) {
      return new Promise((resolve, reject) =>{
          this._db.get(`
              SELECT * FROM livros WHERE id = ?
          `, 
          [id],
          (erro, livro) => {
              if (erro) {
                  return reject ('Não foi possivel encontrar o livro !');
              }
                  return resolve(livro);
             }
          );
      });
  }
  //Promise Atualiza
  atualiza(livro) {
      return new Promise ((resolve, reject) => {
          this._db.run(`
              UPDATE livros SET 
                  titulo = ?,
                  preco = ?,
                  descricao = ?
              WHERE id = ?
          `,
              [
                  livro.titulo,
                  livro.preco,
                  livro.descricao,
                  livro.id
              ],
             erro  => {
                  if (erro) {
                      return reject ('Não foi possivel atualizar o livro!');
                  }
                  resolve();
          });
      });
  }

  //Promise Remove Livro por ID
  remove(id) {
      return new Promise ((resolve, reject) => {
          this._db.get(`
              DELETE FROM livros WHERE id = ?
          `,
              [id],
              (erro) => {
                  if (erro) {
                      return reject ('Nao foi possivel remover o Livro!');
                  }
                  return resolve();
              }
          );
      });
  }
}

module.exports = ServiceClient;