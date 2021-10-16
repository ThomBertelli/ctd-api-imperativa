const fs = require('fs');

const arquivo = fs.readFileSync(__dirname + '/banco-de-dados.json', 'utf-8')

const arquivoEmLiteral = JSON.parse(arquivo);

function Professores(){
    this.listar = function(){
        return arquivoEmLiteral;
    } 
}

module.exports = Professores;