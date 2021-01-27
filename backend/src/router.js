const express = require('express');
const bd = require('./config/database');

const router = express.Router();

router.get('/listar', (req, res) => {
  bd.each("SELECT * FROM clientes", (err, client) => {
    const c = client;
  
    res.status(200).json(c);
  });
});

module.exports = router;