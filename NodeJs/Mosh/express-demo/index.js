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
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' } 
];

app.get('/', (req, res) => {
     res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    // console.log(result);

    if (result.error){
      // 400 Bad Request
      res.status(400).send(result.error);
      return;
    }

    /** para crear cursos 1ro se debe leer el objeto 'course' el cual debe 
     *  estar en el cuerpo de la request, usar sus propiedades para crear 
     *  un nuevo objeto courses, y después agregar ese objeto course al
     *  arreglo courses
     */
    const course = {  // creación del objeto course
      id: courses.length + 1,   // el id se agrega manual, incrementando el # de elementos del array (generalmente el id se asigna de la base de datos)
      name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// update resources
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // if not existing, return 404

    // Validate
    // If invalid, return 400 - Bad request

    // Update course
    //Return the updated course
});

app.get('/api/courses/:id', (req, res) =>{
  // res.send(req.params.id);
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course)  {
    res.status(404).send('The course with the given id was not found'); // 404
  }
  res.send(course);
});



// app.get('/api/posts/:year/:month', (req, res) => {
//   // res.send(req.params);
//     res.send(req.query);
// });
 
// PORT environment variable
const port = process.env.PORT || 3020;

app.listen(port, () => console.log(`Listening on port ${port}...`));