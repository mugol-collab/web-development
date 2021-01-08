const EventEmitter = require('events'); // clase EventEmitter
const emitter = new EventEmitter();     // Object emitter

var url = 'http://mylogger.io/log'

function log(message){
    // send HTTP request
    console.log(message);

    // Genera un evento
    emitter.emit('messageLogged', { id: 1, url: 'http://' }); 
}

module.exports = log;  