const express = require("express")

const aplicativo = new express();

const cadastrar = require('./cadastrar');

aplicativo.use(express.json());

aplicativo.use(express.urlencoded({extended: true}));

aplicativo.get('/', (req, res) => res.sendFile(__dirname + '/cadastrar.html'));

aplicativo.post('/cadastrar',(req, res) => {
const {nome , sobrenome} = req.body;

new cadastrar(nome, sobrenome);

});

aplicativo.listen(8081, () => console.log('Servidor está funcionando!'));