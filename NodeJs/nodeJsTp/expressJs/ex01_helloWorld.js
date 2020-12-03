/**
 * 
    Express Overview
    
    Express is a minimal and flexible Node.js web 
    application framework that provides a robust 
    set of  features  to  develop web and mobile 
    applications.  It  facilitates  the  rapid 
    development of Node based Web applications. 
    Following are  some of the core features of 
    Express framework −

    Allows to set up middlewares to respond to 
    HTTP Requests.

    Defines a routing table which is used to 
    perform different actions based on HTTP 
    Method and URL.

    Allows to dynamically render HTML Pages 
    based on passing arguments to templates.

 */

 var express = require('express');
 var app = express();

 app.get('/', function(req, res){
    res.send('Hello World');
 })

 var server = app.listen(3074, function(){
     var host = server.address().address
     var port = server.address().port

     console.log("Example app listening at http://localhost:3074")
 })