/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* IMPORTAÇÃO DA MODEL DE CATEGORIA */
const categoria = require('./categoriaModel');

const livro = connection.define(
    'tbl_livro',
    {
        titulo:{
            type: sequelize.STRING(500),
            allowNull:false

        },
        preco:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        imagem_peq:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        imagem_grd:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        detalhes:{
            type: sequelize.TEXT,
            allowNull:false
        },
    }

);

/*
A CHAVE PRIMÁRIA (1) DE CATEGORIA VIRA UMA CHAVE ESTRAGEIRA (N) EM LIVRO
*/
categoria.hasMany(livro);

/*
A CHAVE ESTRANGEIRA DE LIVRO (N) É ACHAVE PRIMARIA DE CATEGORIA (1)
*/
livro.belongsTo(categoria);

//livro.sync({force:false});

module.exports = livro;