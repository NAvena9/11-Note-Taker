const express = require('express');
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express(); //With this we tell node we are creating the 'express' server
const PORT = process.env.PORT || 3000; //setting up the port


//set up the express app to handle data parsing, static and route middleware
app.use(express.json());  //es como un default, viene en otros ejemplos
app.use(express.urlencoded({ extended: true }));  //es como un default, viene en otros ejemplos
// app.use(express.static('public'));
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//LISTENER
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));// This is the Listener, 'starts' the server on the port (default code)