//Chamar Mongoose
const mongoose = require('mongoose')

//definição de metadados
const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    data_inicial: {
        type: Date,
        required: true
    },
    data_final: {
        type: Date,
        required: true
    },
    //O atributo dias da semana é um vetor no DB, por isso os cochetes antes das chaves
    dias_semana: [{
        type: String,
        required: true,
        enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
    }],
    horario_inicial: {
        type: String,
        required: true
    },
    horario_final: {
        type: String,
        required: true
    },
    //Pegando o Curso, ou seja referencia á um objeto de um outro model
    curso: {
        // mongoose.ObjectId, quer dizer que se trata de um model no DB
        type: mongoose.ObjectId,
        ref: 'Curso',
        required: true
    },
    professor: {
        type: mongoose.ObjectId,
        ref: 'Professor',
        required: true
    },
    sala_aula: {
        type: mongoose.ObjectId,
        ref: 'SalaAula',
        required: true
    }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minuscula, plural do
//       nome do model)

//Exportando Models
module.exports = mongoose.model('Turma', esquema, 'turmas')
