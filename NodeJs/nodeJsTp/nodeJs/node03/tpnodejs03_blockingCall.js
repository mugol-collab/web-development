/**
 * @brief: programa de ejemplo que muestra el uso de callbacks en
 *         modo de bloqueo
 *         Aqui el programa se bloquea hasta que lee todo el archivo
 *         y luego procede a finalizar el programa
 */
var fs = require("fs");
var data = fs.readFileSync('tpnodejs03_input.txt');

console.log(data.toString());
console.log("Program Ended");