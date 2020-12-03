
  /*
  JavaScript is untyped language. This means that a JavaScript 
  variable can hold a value of any data type. Unlike many other 
  languages, you don't have to tell JavaScript during variable 
  declaration what type of value the variable will hold. The value 
  type of a variable can change during the execution of a program 
  and JavaScript takes care of it automatically.

  JavaScript variable names are case-sensitive. 
  For example, Name and name are two different variables.

  JavaScript allows you to work with three primitive data types

> Numbers, eg. 123, 120.50 etc.

> Strings of text e.g. "This text string" etc.

> Boolean e.g. true or false.

JavaScript also defines two trivial data types, 

> null and undefined, each of which defines only a single value. 

In addition to these primitive data types, JavaScript supports a 
composite data type known as: 

> object. 
*/

function printData(){
    var num = 3.141592;
    var cadena = "Cadena de caracteres";
    var estadoTrue = true; 
    var estadoFalse = false;

    document.write("num   : ", num +  "<br>")
    document.write("cadena: ", cadena +  "<br>")
    document.write("estadoTrue: ", estadoTrue +  "<br>")
    document.write("estadoFalse: ", estadoFalse +  "<br>")

    alert(num,cadena)
}