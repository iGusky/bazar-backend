const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL,{
  useNewUrlParser: true
})

const app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    
    // Revisar si la petición viene de un servidor en white list
    const existe = whiteList.some( dominio => dominio === origin );
    if( existe ) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}

app.use(cors(corsOptions));
app.use('/',routes());

app.listen( 4000, 'localhost', ()=>{
  console.log('Servidor funcionando en el puerto 4000');
})