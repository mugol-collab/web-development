/*
    Importación de métodos de node_ejm03_greetings.js con require()

*/

var greetings = require('./node_ejm03_greetings.js')

console.log('Swedish: ' + 
    greetings.sayHelloInSwedish() + 
    ' & English: ' + 
    greetings.sayHelloInEnglish() + 
    ' & Tatar: ' + 
    greetings.sayHelloInTatar())