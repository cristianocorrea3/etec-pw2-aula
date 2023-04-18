const express = require('express');

const categoriaModel = require('../model/categoriaModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/categoria/inserir', (req,res)=>{

    let nome_categoria = req.body.nome_categoria;
    
    categoriaModel.create(
        {nome_categoria}
    ).then(
        ()=>{
            res.send('CATEGORIA INSERIDA')
        }   
    )

    //res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/categoria/selecionar', (req,res)=>{
    
    categoriaModel.findAll()
    .then(
        (categorias)=>{
            //console.log(categorias);
            res.json(categorias);
        }
    )

})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/categoria/alterar', (req,res)=>{

    let id = req.body.id;
    let nome_categoria = req.body.nome_categoria;

    categoriaModel.update(
        {nome_categoria},
        {where:{id}}
    ).then(
        ()=>{
            res.send("CATEGORIA ALTERADA")
        }
    )

    //
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/categoria/excluir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;