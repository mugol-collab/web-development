/* Greeting methods (métodos de saludo)
    Este es un ejemplo de un programa monolítico que utiliza 
    métodos e imprime su valor de retorno. Se busca demostrar
    las ventajas de usar archivos separados y llamarlos como 
    módulos.
*/

var sayHelloInEnglish = function(){
    return 'Hello'
}

var sayHelloInSwedish = function(){
    return 'Hej'
}

var sayHelloInTatar = function(){
    return 'Isänme'
}

console.log('Sweeish: ' + 
    sayHelloInSwedish() + 
    ' & English: ' + 
    sayHelloInEnglish() + 
    ' & Tatar: ' + 
    sayHelloInTatar())