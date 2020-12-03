/* 
The scope of a variable is the region of your program in which it is defined. 
JavaScript variables have only two scopes.

> Global Variables − A global variable has global scope which means it can be 
defined anywhere in your JavaScript code.

> Local Variables − A local variable will be visible only within a function 
where it is defined. Function parameters are always local to that function. 

*
Dentro del cuerpo de una función, una variable local tiene prioridad sobre una 
variable global con el mismo nombre. Si declara una variable local o un parámetro 
de función con el mismo nombre que una variable global, efectivamente oculta la 
variable global.
*
*/

var myVar = "global";

function checkScope(){
    var myVar = "local";
    alert(myVar);
}