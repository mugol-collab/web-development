/**
 * @brief: programa de ejemplo que muestra el uso de callbacks en
 *         modo de No Bloqueo
 *         Aqui el programa no espera la lectura del archivo y 
 *         procede a imprimir "Program Ended", mientras tanto 
 *         continua leyendo el archivo
 */

var fs = require("fs");

fs.readFile('tpnodejs03_input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})

console.log("Program Ended");