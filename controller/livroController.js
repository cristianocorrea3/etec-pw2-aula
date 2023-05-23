const express = require('express');
const livroModel = require('../model/livroModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/livro/inserir', (req,res)=>{
    
    let { titulo, preco, imagem_peq, imagem_grd, detalhes, tblCategoriumId } = req.body;

    livroModel.create(
        {
            titulo,
            preco,
            imagem_peq,
            imagem_grd,
            detalhes,
            tblCategoriumId
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'LIVRO CADASTRADO COM SUCESSO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/livro/selecionar', (req,res)=>{
    livroModel.findAll()
        .then(
            (livros)=>{
                res.json(livros);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.get('/livro/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    livroModel.findByPk(id)
        .then(
            (livro)=>{
                res.json(livro);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.get('/livro/selecionar/:titulo', (req,res)=>{
    let {titulo} = req.params;
    livroModel.findOne({where:{titulo:titulo}})
        .then(
            (livro)=>{
                res.json(livro);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});


/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/livro/alterar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/livro/excluir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;