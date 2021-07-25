const express = require('express');
const routes = express.Router();

let bancoDeDadosSimulado = require('./db/banco-de-dados');

routes.get('/tasks', (req, res) => {
  return res.json(bancoDeDadosSimulado);
});

routes.post('/addtask', (req, res) => {
  const body = req.body;

  if (!body) return res.status(400).end();

  bancoDeDadosSimulado.push(body);

  return res.json(body);
});

routes.delete('/removetask/:id', (req, res) => {
  const removeId = req.params.id;

  const novoBancoDeDadosSimulado = bancoDeDadosSimulado.filter((task) => {
    return Number(task.id) !== Number(removeId);
  });

  bancoDeDadosSimulado = novoBancoDeDadosSimulado;

  return res.send(novoBancoDeDadosSimulado);
});

module.exports = routes;