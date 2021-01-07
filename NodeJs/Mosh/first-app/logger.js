console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log'

function log(message){
    // send HTTP request
    console.log(message);
}


// module.exports.log = log;       // aqui estou agregando un metodo llamado log, al objeto module 
                                // con la propiedad exports (la cual almacena objetos) que va 
                                // a llamar a la funcion log()

/*
    Ya que el objeto solo tiene un metodo puedo exportar, 
    solo este método y no un objeto, que es más útil cuando 
    se tienen varios métodos o propiedades
*/

module.exports = log; 