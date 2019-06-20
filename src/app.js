'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const db = require("../bin/db")
const config = require("./config")

const app = express();
const router = express.Router();

//conecta ao mongo
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/blogapp', { useNewUrlParser: true }).then(() => {
       // config.connectionString, { useNewUrlParser: true }).then(() => {
        console.log("Conectado ao mongo!")
    }).catch((e) => {
        console.log("Erro ao conectar ao mongo: " + e)
    } )

//Carrega os models
    const Product   = require('./models/product');
    const Customer  = require('./models/customer');
    const Order     = require('./models/order');

//carrega as rotas
    const indexRoute = require("./routes/index-route");
    const productRoute = require("./routes/products-route");
    const customerRoute = require("./routes/customer-route");
    const orderRoute = require("./routes/order-route");

app.use(bodyParser.json({
    limit: '5mb'    //Define o tamanho maximo de um json
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');  //pode definir as URLs que podem acessar seu site
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token'); //define quais tipos de Headers podem ser usados
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //definir methods permitidos
    next();
})


app.use('/', indexRoute)
app.use('/products', productRoute);
app.use('/customer', customerRoute);
app.use('/order', orderRoute);


module.exports = app;
