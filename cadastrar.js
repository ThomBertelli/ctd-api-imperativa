const fs = require('fs');

const arquivo = fs.readFileSync(__dirname + '/banco-de-dados.json', 'utf-8')

const arquivoEmLiteral = JSON.parse(arquivo);

function CadastrarProfessor(nomeDoProfessor, sobrenomeDoProfessor){

    var nome = nomeDoProfessor;
    var sobrenome = sobrenomeDoProfessor;

    function salvarNoBancoDeDados(){

        if(veficaSeString()){

            arquivoEmLiteral.push({
                nome,
                sobrenome
            });

            const arquivoEmString = JSON.stringify(arquivoEmLiteral);
           
            fs.writeFileSync(__dirname + '/banco-de-dados.json', arquivoEmString);
        }else {
            return 'Não é um nome válido';
        }
    }
   function veficaSeString() {
       var naoVazio = (nome && sobrenome);
       var ehString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string');

       return (naoVazio && ehString);
   }
   salvarNoBancoDeDados();

}

module.exports = CadastrarProfessor;