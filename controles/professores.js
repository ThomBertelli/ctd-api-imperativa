//Modelos
const cadastrar = require('../modelos/cadastrar');
const Professores = require('../modelos/listar');
const professores = new Professores();

//Controles
const cadastrarProfessores =  (req, res) => {
    const {nome , sobrenome} = req.body;

    new cadastrar(nome, sobrenome);

    res.render('resultado');

};

const listarTodosOsProfessoresEmJson = (_, res) => {res.json(professores.listar())
};

const exibirPaginaDeCadastroListaDeProfessores =  (_, res) => res.render('cadastrar', {professores: professores.listar()});

module.exports = {
    cadastrarProfessores,
    listarTodosOsProfessoresEmJson,
    exibirPaginaDeCadastroListaDeProfessores
};