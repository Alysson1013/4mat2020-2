//Chamar Mongoose
const mongoose = require('mongoose')

//definição de metadados
const esquema = mongoose.Schema({  
    nome: { type: String, required: true},
    capacidade: {type: Number, required: true, default: 15, min: 5, max: 25},
    recursos_didaticos: {type: String}
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minuscula, plural do
//       nome do model)

//Exportando Models
module.exports = mongoose.model('SalaAula', esquema, 'salas_aula')
