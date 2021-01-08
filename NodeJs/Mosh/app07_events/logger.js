const EventEmitter = require('events'); // clase EventEmitter

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        // send HTTP request
        console.log(message);
    
        // Genera un evento
        this.emit('messageLogged', { id: 1, url: 'http://' }); 
    }        
}


module.exports = Logger;