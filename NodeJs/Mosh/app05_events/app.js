
const EventEmitter = require('events'); // clase EventEmitter

const emitter = new EventEmitter();     // objeto emitter instanciado de la clase EventEmitter


/* 
    Registra un oyente para el evento
*/

// emitter.on('messageLogged', function(){
//     console.log('Listener called');
// });

emitter.on('messageLogged', (arg) => {                      // Recibe datos con el evento
    console.log('Listener called', arg);
});


/* 
    Genera un evento
*/
// emitter.emit('messageLogged', 1, 'url');

emitter.emit('messageLogged', { id: 1, url: 'http://' });   // envia datos con el evento 
                                                            // encapsulados en un objeto
            
