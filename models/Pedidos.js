const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
  cliente: {
    type: String
  },
  pedido: [{
    producto: {
      type: Schema.Types.Mixed
    },
    cantidad: Number
  }],
  total: {
    type: Number
  }
});

module.exports = mongoose.model('Pedidos', pedidoSchema);