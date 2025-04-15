import express from "express";

const router = express.Router();

router.get("/loja", (req,res) =>{

    const loja = [
        {nome: "Vandal preludio", preco: 2175, categoria: "Edição Exclusiva"},
        {nome: "Vandal reaver", preco: 1775, categoria: "Edição Exclusiva"},
        {nome: "Vandal forsaken", preco: 1775, categoria: "Edição Exclusiva"},
        {nome: "Vandal Elderflame", preco: 2475, categoria: "Edição Ultra"}
    ]
    res.render("loja",{
        loja:loja,
    })
})

export default router