const express = require('express');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/categoria/inserir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/categoria/selecionar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/categoria/alterar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/categoria/excluir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;