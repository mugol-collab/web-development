
// UUID => universally unique identifier

// function enviarEmail(para, id, assunto, texto) {
//     // Biblioteca de envio de email
//     console.log(para, id, assunto, texto);
// }

// class EnviarEmailParaUsuario {
//     send() {
//         enviarEmail("juan_jg@hotmail.com", 9899, "Olá", "Tudo bem?");
//     }
// }

interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({ para, id, assunto, texto }: DadosDeEnvioEmail) {
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "juan_jg@hotmail.com", 
            id:"9899", 
            assunto: "Olá", 
            texto: "Tudo bem?"
        });
    }
}