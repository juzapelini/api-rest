'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose'); //Era o que eu usava local

//const db = require("../bin/db")
const config = require("./config")

const app = express();
const router = express.Router();

//conecta ao mongo

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zapelini:zap01ok@cluster0-m5sjd.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  console.log("Erro ao conectar ao mongo: " + err)
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
    // mongoose.Promise = global.Promise;

    // mongoose
    //     .connect("mongodb+srv://zapelini:zap01ok@cluster0-m5sjd.gcp.mongodb.net/test?retryWrites=true&w=majority")
    //     .then(() => {
    //         console.log("Conectado ao mongo!")
    //         console.log("Conectado ao mongo!")
    //         console.log("Conectado ao mongo!")
    //     }).catch((e) => {
    //         client.close();
    //         console.log("Erro ao conectar ao mongo: " + e)
    //         console.log("Erro ao conectar ao mongo: " + e)
    //         console.log("Erro ao conectar ao mongo: " + e)
    //     } )  
            

    // mongoose.connect('mongodb://localhost/blogapp', { useNewUrlParser: true }).then(() => {
    //     //mongoose.connect('mongodb://localhost/blogapp', { useNewUrlParser: true }).then(() => {
    //    // config.connectionString, { useNewUrlParser: true }).then(() => {
    //     console.log("Conectado ao mongo!")
    // }).catch((e) => {
    //     console.log("Erro ao conectar ao mongo: " + e)
    // } )

//Carrega os models
    const Customer  = require('./models/customer');

//carrega as rotas
    const indexRoute = require("./routes/index-route");
    const customerRoute = require("./routes/customer-route");
    const callApi = require("./routes/callApi-route");

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
app.use('/customer', customerRoute);
app.use('/api', callApi);


module.exports = app;
