//Importando controller de Curso
const controller = require('../controllers/curso')
//Importando express
const express = require('express')

//Recebe o fluxo do app.js com o verbo crud
const router = express.Router()

router.post('/', controller.novo)//Create

//Exportando router
module.exports = router 