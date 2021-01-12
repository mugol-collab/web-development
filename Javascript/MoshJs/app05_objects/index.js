
let person = {
    name: 'Juan',
    age: 30
};

/* Hay dos formas de acceder a las propiedades de un objeto
    Notación punto e Notación de corchetes
*/
// Dot Notation
person.name = 'Jose';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);