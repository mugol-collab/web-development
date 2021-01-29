
const http = require('http');           // importa core module http
const url = 'http://nodeprogram.com';   // url donde se hará la get request

http.get(url, (response) => {
    let cont = 0;
    response.on('data', (chunk) => {
        cont++;
        console.log(chunk.toString('utf8'));
    });

    response.on('end', () => {
        console.log(`response has ended with ${cont} chunk(s)`);
    });
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`);
});
