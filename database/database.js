/*IMPORTAÇÃO DO SEQUELIZE*/
const sequelize = require('sequelize');

/*

CRAÇÃO DA CONEXÃO COM O BANCO DE DADOS
PARAMETROS:
1 - NOME DO BANCO
2 - USUÁRIO
3 - SENHA
4 - OBJETO JSON QUE DETERMINA AS COFIGURAÇÕES DA CONEXÃO:
    4.1 - HOST DO BANCO
    4.2 - PORTA LÓGICA
    4.3 - DIALETO SQL
    4.4 - TIMEZONE -3
*/
const connection = new sequelize(
    'pw2_api_livraria',
    'root',
    '',
    {
        host:'localhost',
        port:'3307',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;