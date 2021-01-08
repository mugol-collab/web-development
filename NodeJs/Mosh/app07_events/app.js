
const EventEmitter = require('events'); // clase EventEmitter

const Logger = require('./logger');
const logger = new Logger();

// Registra un oyente para el evento
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');