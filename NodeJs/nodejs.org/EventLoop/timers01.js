const fs = require('fs');

function someAsyncOperation(callback){
    // tarea que tarda 95ms en completarse
    fs.readFile('../D:\DoCuMeNts/plataformasInterlaken.txt', callback);
}

const timmeScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timmeScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// Realiza la operación asíncrona mientras toma 95 ms en completar

someAsyncOperation(() => {
    const startCallback = Date.now();

    // tarea que tarde 10ms
    while (Date.now() - startCallback < 10){
        // do nothing
    }
});
