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

const whiteList = [process.env.FRONTEND_URL];
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

app.use(cors());
app.use('/',routes());

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen( port, host, () => {
  console.log('Servidor funcionando en el puerto' + port);
})