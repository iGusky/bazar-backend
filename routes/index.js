const express = require('express');
const usuarioController = require('../controllers/usuariosController');
const pedidosController = require('../controllers/pedidosController');

const router = express.Router();

module.exports = function() {
  router.post('/crear-cuenta', usuarioController.registrarUsuario);
  router.post('/iniciar-sesion', usuarioController.autenticarUsuario );

  router.post('/pedidos', pedidosController.nuevoPedido);
  router.get('/pedidos', pedidosController.mostrarPedidos);
  router.put('/pedidos/:id', pedidosController.actualizarPedido);
  router.delete('/pedidos/:id', pedidosController.eliminarPedido);

  return router;
}