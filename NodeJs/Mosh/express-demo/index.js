/**
 * HTTP Methods
 * 
 * GET for getting data
 * POST for creating data
 * PUT for updating data
 * DELETE for delete data
 * 
 * Ex:
 *              Request                     Response
 * GET /api/customers                   [
   (solicita lista de clientes)             { id: 1, name: ''},
                                            { id: 2, name: ''},
                                            ...
                                        ]
 * GET /api/customers/1                     { id: 1, name: ''}
   (solicita info del cliente con id=1)      

 * PUT /api/customers/1                 
   (actualiza cliente con id=1)
   { name: ''}                          { id: 1, name: ''}

 * DELETE /api/customers/1    
   (borra cliente con id=1)

 * POST /api/customers                      
   (crea una lista de clientes)  
   { name: ''}                          { id: 1, name: ''}
 *  
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.listen(3020, () => console.log('Listening on port 3020...'));