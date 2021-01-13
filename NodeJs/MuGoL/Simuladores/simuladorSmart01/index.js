
const express = require('express');
const app = express();

app.use(express.json());    // Habilita parsing objetos JSON en el cuerpo de la request

app.get('/', (req, res) => {
    res.send('Simulador SmartFit');
});

// endpoint que testa a saude do servidor
// app.get('/api/servidor', (req, res) => {
app.get('/api/gate/v2/people/futronic_data.json', (req, res) => {
    console.log('recebido: ' + req.url);
    let j = {};
    let cpf = req.query.cpf;
    let acessoLiberado = false;
    let grupo = "turnstile";
    let qtdAcessos = 999;
    let numAcessos = 0;
    let nsValido = true;
    let nome = "CPF inexistente";
    let fingerTemplate = "";
    let foto = "";
    let sysMsgOk = "Acesso Liberado, Bem vindo";
    let sysMsgBlock = "Acesso Bloqueado, por favor procure a recepcao";
    let sysMsg = "";
    let id = "";
    let usarSenha = true;
    let delayResponse = 0;

    if (cpf == "100"){
        // acessoLiberado = true;
        numAcessos += 1;
        nome = "Marcos";
        fingerTemplate = "NCAxMDAgICAgICAgICAgICAgICAgIDY2OSCdAgMDAFASGTF3d3d3d3d3d3d3d3d3d3d3d3d3dw8NCgcDOzo4NTQyMC93d3d3EBAPDAkFADg0MjAvLi53d3d3EhIRDwsHATcyMC4sLSwsd3d3FBQTEQ8KAzcxLSsqKigod3d3FRcXFhQQBzUrKCgnJycnd3d3FxkaGhkXFCYkIyQlJiUlJnd3GRocHR0cHB0fICEiIyQlJnd3GxweHyAfHRsbHB0fIiIlJnd3HR4gIiUmHhcXGRkbHiAgHnd3HyAiJCgqIBQUFhgaHB0dHnd3ICIjJCctExETFhcYGxwcHnd3HiMkJSgyCQ8TFhcXGRobHHd3IyYmJys0CA4RFRcYFxgZG3d3JScnKC03BgwQFBYXFxcXF3d3JScpLDE4BAoOERQVFRYVFXd3JyouMTU5AgcLDhETEQ8QEXd3Ky0xMjU4AAQICw8QDw4MDHd3dzA2Nzc4OwIFCQ0MDQ0ND3d3dzc5OTg5OgEEBgcHBwcIC3d3dzc3Nzk7OwADAwQFBAQEBXd3d3c1Njk7AAEBAgMEBAMDBHd3d3c3Ojo7AAIAAQECAwMEBXd3Ind3Ozo5OTk5OwABAwUGBnd3d3d3d3d3d3d3d3d3d3d3d3dfalJYaRZxMx0vKFZCCWF7V0pjWktzaQ1CPmg9O0IMNwhMPDggGmJwekVXNCYdRmBFAAAAAAAAAAAAAAAAAAAAAAAAAAAADxITLDY/RExPUVJWYGRrgpO5CRodHiUtNTdJSU5QVFhudXqMjZSWlpqbnqCjrrGzugAAAAAAAAAAAAAAAAAAAAAAAAAAAAIOAgQFBhERBQQECAkQBxMKAAIODgQEBwYGBhIQFAYPBQkWAA4OFhYWFxcMAQEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        foto = "https://interlaken-drive.s3.amazonaws.com/marcos/Marcos.jpg";
        sysMsg = sysMsgBlock;
        id = 1;
    }

    if (cpf == "200"){
        acessoLiberado = true;
        numAcessos += 1;
        nome = "Juan";
        fingerTemplate = "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";
        foto = "https://interlaken-drive.s3.amazonaws.com/juan/juan.jpeg";
        sysMsg = sysMsgOk;
        id = 2;
    }

    j = JSON.parse(`{"person":{"access_control_device_status": ${acessoLiberado}, "access_control_type":"${grupo}", 
    "plan_name":"VIP Colaborador", "futronic_fingerprint_template":["${fingerTemplate}"], 
    "photo_url":"${foto}", "system_message":"${sysMsg + " " + nome}", "id":"${id}", 
     "birthday":"0000-00-00", "name": "${nome}", "authentication_password": "ADFRG", 
     "password_acess": "${usarSenha}", "serial_number_found": "${nsValido}", 
     "access_control_device_quantity":${qtdAcessos}, "numero de acessos": ${numAcessos}, 
     "serial_number":"123456789", "cpf": "${cpf}"}}`);
    // res.send('cpf: ' + cpf);
    res.send(j);
    console.log("Respuesta: " + JSON.stringify(j));
});


app.listen(3050, () => {
    console.log('Simulador smartfit rodando na porta 3050');
});