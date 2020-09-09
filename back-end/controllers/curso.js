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
const Curso = require('../models/Curso')

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
        await Curso.create(req.body)
        //HTTP 201: Created
        //Retornando protocolo 201, de criação bem sucedida
        res.status(201).end()
    }
    //cacth é chamado quando o await do try retorna um erro na criação/
    catch(erro){
        console.error(erro)
        //Retorna protocolor 500
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//Exportação do Objeto
module.exports = controller