import express from "express";

const app = express();

/*
    GET = Buscas
    POST = Criacao
    PUT = Alteracao 
    DELETE = Deletar 
    PATCH = Alterar uma informacao especifica 
*/

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    });
});

app.listen(3333, () => console.log("Server run on port 3333"));