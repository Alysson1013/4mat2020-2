//Chamar Mongoose
const mongoose = require('mongoose')

//definição de metadados
const esquema = mongoose.Schema({  
    nome: {
        type: String, //Tipo de variável
        required: true //Define se o campo é obrigatório
    },
    carga_horaria: {
        type: Number,
        required: true,
        min: 4, //Define número mínino
        max: 240, //Define número máximo
        default: 100 //Define valor padrão
    },
    nivel: {
        type: String,
        required: true,
        enum:['Básico', 'Intermediário', 'Avançado'] //Define os valores que podem ser recebidos pelo banco de dados
    },
    valor_curso: {
        type: Number,
        required: true,
        min: 50
    }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minuscula, plural do
//       nome do model)

//Exportando Models
module.exports = mongoose.model('Curso', esquema, 'cursos')
