var x = "Hello world";
console.log(x);

var book = {topic: "JavaScript", fat: true};
console.log(book.topic);
console.log(book["fat"]);

var primes = [2, 3, 5, 7];
console.log(primes[primes.length-1]);
console.log(primes[0] + primes[1]);

function factorial(n){
    var p = 1;
    
    for (var i = 2; i <= n; i++){
        p *= i;
    }
    return p;
}

console.log("===============================");
console.log("\tFuncion Factorial");
console.log("===============================");

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));