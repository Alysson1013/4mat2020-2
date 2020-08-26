//Fazendo Requisição
const mongoose = require('mongoose')


//Conexão com banco de dados
module.exports = uri => {
    mongoose.connect(uri)
}

