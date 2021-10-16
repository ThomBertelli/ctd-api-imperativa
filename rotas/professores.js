
const express = require('express');

const rotas = express.Router();

//Importa Controles
const{
    cadastrarProfessores,
    listarTodosOsProfessoresEmJson,
    exibirPaginaDeCadastroListaDeProfessores
} = require('../controles/professores');

//Rotas dos Professores
rotas.get('/', exibirPaginaDeCadastroListaDeProfessores );

rotas.get('/listar', listarTodosOsProfessoresEmJson);

rotas.post('/cadastrar', cadastrarProfessores);

module.exports = rotas;