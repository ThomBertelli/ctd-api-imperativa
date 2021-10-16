const express = require("express")

const handlebars = require('express-handlebars');

const rotasDosProfessores = require('./rotas/professores');

const aplicativo = new express();

aplicativo.use(express.json());
aplicativo.use(express.urlencoded({extended: true}));

aplicativo.set('views', './visualizacoes');
aplicativo.set('view engine', 'handlebars');
aplicativo.engine('handlebars', handlebars({ defaultLayout: 'modelo' }));

aplicativo.use('/professores', rotasDosProfessores);

aplicativo.listen(8081, () => console.log('Servidor está funcionando!'));
