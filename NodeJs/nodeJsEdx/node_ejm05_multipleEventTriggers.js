/**
    En este ejemplo se lanzan 2 eventos, y se definen
    2 oyentes.
    Cuando se ejecuta el primer evento, ambos oyentes
    responden en su respectivo orden, y cuando se ejecuta
    el 2do evento igual ambos eventos responden en su 
    respectivo orden, este 1ro whos's there y despues 
    go away.
    
 */
const EventEmitter = require('events');

class Emitter extends EventEmitter {}
emitter = new Emitter();

emitter.on('knock', function() {
    console.log('Who\' s there?');
});

emitter.on('knock', function() {
    console.log('Go away!');
});

emitter.emit('knock');
emitter.removeAllListeners();
emitter.emit('knock');

