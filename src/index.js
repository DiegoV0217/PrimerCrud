const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/CRUD-database')
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

// ************************ SETTINGS
app.set('port', process.env.PORT || 8080);  // process.env.PORT toma el puerto que entrega el S.O

//*********************   MIDDLEWARES */
app.use (morgan('dev'));
app.use (express.json());




// ****************RUTAS


app.use('/tasks',require ('./routes/tasks'));
 



// ******************* STATIC FILES
app.use(express.static(__dirname + '/public'));


//**************************   SERVER LISTENING
app.listen(app.get('port'), function(){               
    console.log('Servidor ok');

});