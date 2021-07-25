const express = require('express');
const routes = express.Router();
const bancoDeDadosSimulado = require('../db/banco-de-dados');

routes.get('/tasks', (req, res) => {
  return res.json(bancoDeDadosSimulado);
});

routes.post('/addtask', (req, res) => {
  const body = req.body;

  if (!body) return res.status(400).end();

  bancoDeDadosSimulado.push(body);

  return res.json(body);
});

module.exports = routes;
