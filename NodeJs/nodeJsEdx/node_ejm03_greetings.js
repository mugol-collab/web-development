/* Archivo para exportar todos los métodos de traducción
*/

exports.sayHelloInEnglish = function(){
    return 'Hello'
}

exports.sayHelloInSwedish = function(){
    return 'Hej'
}

exports.sayHelloInTatar = function(){
    return 'Isänme'
}

/* Los métodos también pueden ser exportados como un objeto usando
   module.exports
*/
// module.exports = {
//     sayHelloInEnglish() {
//         return 'Hello'
//     }

//     sayHelloInSwedish(){
//         return 'Hej'
//     }

//     sayHelloInTatar(){
//         return 'Isänme'
//     }
// }

/*
   Independientemente del patrón de exportación que utilice, 
   module.exports terminará siendo un objeto con tres métodos 
   de saludo.
*/