
let person = {
    name: 'Juan',
    age: 30
};

console.log(person);

/* Hay dos formas de acceder a las propiedades de un objeto
    Notación punto e Notación de corchetes
*/
// Dot Notation
// person.name = 'Jose';
// console.log(person);

// Bracket notation
person['name'] = 'Maria';
person['age'] = 8;
// console.log(person);

/* Aunque es mas usada la notación de punto, cuando se necesita 
   que el usuario asigne el valor a una propiedad en tiempo de 
   ejecución, se utiliza notación de corchetes 
*/
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);