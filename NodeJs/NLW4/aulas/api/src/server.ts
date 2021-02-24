import express from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar 
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteracao especifica 
 */

 //http://localhost:3333/users

 app.get("/", (request, response) => {
    // return response.send("Hello World - NLW04");
    return response.json({message: "Hello World - NLW04"});
 });

// 1 param => rota (Recurso API)
// 2 param => request, response

 app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
 });

app.listen(3333, () => {
    console.log("Server is running!");
})