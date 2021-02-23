
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

/* Para acessar a elementos del array 
   uso los subindices
 */
console.log("subindice 0: " + selectedColors[0]);
console.log("subindice 1: " + selectedColors[1]);

/* Debido a que js es un lenguaje dinámico, los 
   valores de las variables pueden cambiar en 
   tiempo de ejecución
 */
selectedColors[1] = 'green';
console.log(selectedColors);

/* También es posible agregar diferentes tipos 
   de datos a un arreglo
 */

selectedColors[2] = 1;
console.log(selectedColors);


/* En js un array es un objeto, para comprobar 
   digitar en la console do browser:
   typeof selectedColors
 */
console.log("Object Length: " + selectedColors.length);