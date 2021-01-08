const EventEmitter = require('events'); // clase EventEmitter
const emitter = new EventEmitter();     // Object emitter

// Registra un oyente para el evento
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

const log = require('./logger');
log('message');