
const EventEmitter = require('events');

class Job extends EventEmitter {}
job = new Job();

/** Test 1
 */

// job.on('done', function(timeDone){
//     console.log('Job was pronounced at', timeDone);
// });

// job.emit('done', new Date());
// job.removeAllListeners();

/** Test 2
 */

 job.on('hecho', function(tiempoCumplido){
     console.log('Job emitido at', tiempoCumplido);
 });
 job.emit('hecho', new Date());
 job.removeAllListeners();