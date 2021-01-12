/**
 *   Data Types in Js
 * 
 * - Primitives / Value Types         
 *   String
 *   Number
 *   Boolean
 *   undefined (es un tipo pero también un valor de variable)
 *   null
 * 
 * - Reference Types
 * 
 *   Objects
 *   Array
 *   Function
 * 
 *  Languages
 * 
 * - Static Languages (Statically-typed)
 *   
 *   Al declarar una variable, el tipo de esta 
 *   variable permanece fijo, no puede cambiar
 * 
 *   string name = 'Juan';
 * 
 * - Dynamic (Dynamically-typed)
 * 
 *  El tipo de una variable puede cambiar en 
 *  tiempo de ejecución
 * 
 *  string name = 'Juan';
 *  let name = 'Juan';
 */

let name = 'Juan';      // String Literal
let age = 30;           // Number literal
let isApproved = true;  // Boolean Literal
let firstName = undefined;  // un tipo de null
let selectedColor = null;   // se usa null cuando se quiere tener la opción de limpiar la variable

/* Digital en la consola del navegador
   > typeof name
     "string"
   > name = 1
   > typeof name
     "number"
     
   . . .

   > typeof selectedColor
   "Object"
*/