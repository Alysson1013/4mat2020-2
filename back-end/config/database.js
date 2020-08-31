//Fazendo Requisição
const mongoose = require('mongoose')


//Conexão com banco de dados
module.exports = uri => {
    mongoose.connect(uri, {
        //Suprimindo Warning
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log("==> Mongoose! Conectado com sucesso ao servidor")
    })

    // Dá sinal de encerramento
    process.on('SIGINT', () => 
      mongoose.connection.close(() => {
        console.log('* Mongoose! Desconectado pelo término da aplicação');
        //0 indica que a finalização ocorreu sem erros 
        process.exit(0);
      })
    )

    //Dá sinal de queda 
    mongoose.connection.on('disconnected', ()=>{
        console.log('==> Monsgoose! desconetado do servidor')
    })
}

