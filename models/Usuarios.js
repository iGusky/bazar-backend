const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  email : {
    type: String,
    required: 'Ingrese su email',
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Usuarios', usuarioSchema);