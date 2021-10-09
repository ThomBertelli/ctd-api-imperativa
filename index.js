const express = require("express")

const aplicativo = new express();

const cadastrar = require('./cadastrar');

const Professores = require('./listar');

const professores = new Professores();

const handlebars = require('express-handlebars');


aplicativo.use(express.json());

aplicativo.use(express.urlencoded({extended: true}));

aplicativo.set('views', './visualizacoes');
aplicativo.set('view engine', 'handlebars');

aplicativo.engine('handlebars', handlebars({ defaultLayout: 'modelo' }));

aplicativo.get('/', (_, res) => {res.render('cadastrar')});

aplicativo.get('/listar',(_, res) => {res.json(professores.listar())
});

aplicativo.post('/cadastrar',(req, res) => {
    const {nome , sobrenome} = req.body;

    new cadastrar(nome, sobrenome);

    res.render('resultado');

});

aplicativo.listen(8081, () => console.log('Servidor está funcionando!'));