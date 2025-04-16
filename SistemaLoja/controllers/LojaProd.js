import express from "express";

const router = express.Router();

router.get("/produto", (req,res) =>{

    const produto = [
        {nome: "Vandal preludio", preco: 2175, categoria: "Edição Exclusiva"},
        {nome: "Vandal reaver", preco: 1775, categoria: "Edição Exclusiva"},
        {nome: "Vandal forsaken", preco: 1775, categoria: "Edição Exclusiva"},
        {nome: "Vandal Champions 2021", preco: 2675, categoria: "Edição Exclusiva"},
        {nome: "Vandal Elderflame", preco: 2475, categoria: "Edição Ultra"}
    ]
    res.render("produto",{
        produto:produto,
    })
    
});
router.get("/clientes", (req,res) =>{
    const clientes = [
    { nome: "Luís Goncalves Oliveira", cpf: "688.654.300-87", endereco: "Alameda Santos, 550 - Barra Funda, Santos - SP, CEP 49849-976" },
    { nome: "Clara Lima Rocha", cpf: "568.992.880-10", endereco: "Travessa da Paz, 903 - Copacabana, Ribeirão Preto - SP, CEP 35221-183" },
    { nome: "Leonor Azevedo Castro", cpf: "703.448.280-26", endereco: "Travessa da Paz, 13 - Centro, Santos - SP, CEP 80855-150" },
    { nome: "Thaís Barros Silva", cpf: "761.500.150-17", endereco: "Alameda Santos, 482 - Boa Viagem, São José dos Campos - SP, CEP 54457-392" },
    { nome: "Giovanna Correia Azevedo", cpf: "391.344.430-02", endereco: "Alameda Santos, 113 - Barra Funda, Santos - SP, CEP 82815-539" }
    ];

    res.render('clientes',
     { 
        clientes: clientes
     })
    });

    router.get("/pedidos", (req, res) => {

        const pedidos = [
            { id: 1, data: '2025-04-11', nome: "Clara Lima Rocha", valor: 2175 },
            { id: 2, data: '2025-04-12', nome: "Luís Goncalves Oliveira", valor: 1775 },
            { id: 3, data: '2025-04-13', nome: "Thaís Barros Silva", valor: 1775 },
            { id: 4, data: '2025-04-14', nome: "Leonor Azevedo Castro", valor: 2475 },
            { id: 5, data: '2025-04-15', nome: "Giovanna Correia Azevedo", valor: 2175}
        ];
        
        res.render("pedidos",
             { 
                pedidos: pedidos, 
             });
    });
     

    

export default router