const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async ( req, res, next ) => {
  const pedido = new Pedidos( req.body );
  try {
    await pedido.save();
    res.json({mensaje: 'Se agrego el pedido'});
  } catch (error) {
    console.error(error);
    next();
  }
}

exports.mostrarPedidos = async ( req, res, next ) => {
  try {
      const pedidos = await Pedidos.find({});
      res.json( pedidos );
  } catch (error) {
      console.log(error);
      next();
  }
}

exports.actualizarPedido = async ( req, res, next ) => {
  try {
      let pedido = await Pedidos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.json({ pedido });
  } catch (error) {
      console.log( error )
  }
}

exports.eliminarPedido = async ( req, res, next ) => {
  try {
      await Pedidos.findOneAndDelete({ _id: req.params.id });
      res.json({ mensaje:'Pedido eliminado' });
  } catch (error) {
      console.log(error);
      next();
  }
}