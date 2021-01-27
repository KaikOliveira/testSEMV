const express = require('express');
const db = require('./config/database');
const ServicesClient = require('./services/ServicesClient');

const router = express.Router();

router.get('/listar', (req, res) => {
  const servicesClient = new ServicesClient(db);

  servicesClient.lista()
    .then(client => res.json(client));
});

router.post('/adiciona', (req, res) => {
  console.log(req.body);

  const servicesClient = new ServicesClient(db);

  servicesClient.adiciona(req.body)
    .then(res.send('Adicionado com sucesso'))
    .catch(erro => console.log(erro));
});

module.exports = router;