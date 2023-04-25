const express = require('express');

const categoriaModel = require('../model/categoriaModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE CATEGORIA(POST)*/
router.post('/categoria/inserir', (req,res)=>{

    let nome_categoria = req.body.nome_categoria;
    
    categoriaModel.create(
        {nome_categoria}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'CATEGORIA INSERIDA COM SUCESSO'
           });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/categoria/selecionar', (req,res)=>{
    
    categoriaModel.findAll()
    .then(
        (categorias)=>{
            //console.log(categorias);
            res.json(categorias);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/categoria/alterar', (req,res)=>{

    let id = req.body.id;
    let nome_categoria = req.body.nome_categoria;

    categoriaModel.update(
        {nome_categoria},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CATEGORIA ALTERADA COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/categoria/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    categoriaModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CATEGORIA EXCLUIDA COM SUCESSO'
               });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;