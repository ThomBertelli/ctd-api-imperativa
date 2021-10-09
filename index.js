const express = require("express")

const aplicativo = new express();

const cadastrar = require('./cadastrar');

const Professores = require('./listar');

const professores = new Professores();

aplicativo.use(express.json());

aplicativo.use(express.urlencoded({extended: true}));

aplicativo.get('/', (_, res) => res.sendFile(__dirname + '/cadastrar.html'));

aplicativo.get('/listar',(_, res) => {res.json(professores.listar())
});

aplicativo.post('/cadastrar',(req, _) => {
const {nome , sobrenome} = req.body;

new cadastrar(nome, sobrenome);

});

aplicativo.listen(8081, () => console.log('Servidor está funcionando!'));