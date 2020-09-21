/*
    Quatro operações da modelagem de dados

    1) CREATE (criação ou insersão)
        Cria um novo objeto no banco de dados

    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partir do BD

    3) UPDATE (atualização)
        Altera os dados de um objeto já existente no BD

    4) DELETE (exclusão)
        Elimina um objeto no BD

    (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD

    Verbos https associados as operações crud

    Verbo       Operação
    POST        Create
    GET         Retrieve
    PUT         Update
    DELETE      Delete
*/

//Importar model para dentro do controller
const Professor = require('../models/Professor')

//Objeto das funções do CRUD
const controller = {}

//req = requisição
//res = resposta
//Novo método, implementando a operação CREATE
//async significa que a sincronia de execução do código não é tão rigida e pode ser alterada
controller.novo = async (req, res) => {
    //try, tenta efetuar a inserção no BD
    try {
        //Envia os dados dentro da req.body para o DB para criação
        //Body são os dados a serem enviados
        //Espera a resposta, para a execução para isso
        //await, significa que as proximas linhas do escopo só podem ser executadas após o retorno da requisão dá linha 41
        //Caso haja erro no await, as proximas linhas do escopo não são executadas, mas sim o catch
        await Professor.create(req.body)
        //HTTP 201: Created
        //Retornando protocolo 201, de criação bem sucedida
        res.status(201).end()
    }
    //cacth é chamado quando o await do try retorna um erro na criação/
    catch (erro) {
        console.error(erro)
        //Retorna protocolor 500
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//Método listar(), implementando RETRIEVE (all)
//Todo await, necessita de um async
controller.listar = async (req, res) => {
    try {
        //find() sem parametros é para trazer tudo do Banco de Dados Curso
        let dados = await Professor.find()
        res.send(dados)
    }
    catch (erro) {
        //caso dê erro
        console.log(erro) //Vai com status HTTP: 200
        res.status(500).send(erro)
    }

}

//Metodo obterUm, implementando a operação RETRIEVE (one)
controller.obterUm = async (req, res) => {
    const id = req.params.id //capturando o parametro id
    let obj = await Professor.findById(id) //Capturando o parametro id

    //Se o objeto estiver preechido(achou), então o retornamos
    if (obj) res.send(obj)
    //Senão (Objeto Vazio), enviamos o status HTTP 404: Not Found
    else res.status(404).end()

}

//Método atualizar(), implementando a operação UPDATE
controller.atualizar = async (req, res) => {
    try {
        //Isolar o _id do objeto para fins de busca
        const id = req.body._id
        //Busca o objeto pelo id e, encontrando-o substitui o conteudo por req.body
        let obj = await Professor.findByIdAndUpdate(id, req.body)

        //Se encontrou e substitui, retornamos o HTTP 204: No content
        if (obj) res.status(204).end()
        //Caso contrário, retorna HTTP 404: Not Found
        else res.status(404).end()
    } catch {
        console.error(erro)
        res.status(500).end()
    }
}

//Método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try {
        //Isolando o ID para exclusão 
        const id = req.body._id
        //Bucar e deletar por id
        let obj = await Professor.findByIdAndDelete(id)

        //Encontra e exclui
        if (obj) res.status(204).end()
        //Objeto não foi encontrado para exclusão
        else res.status(404).end()
    } catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}
//Exportação do Objeto
module.exports = controller