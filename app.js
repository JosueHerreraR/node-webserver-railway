
// Sección 7 => 88. Introduccion a EXPRESS

/*
const express = require('express')
const app = express()
const port = 8082;

app.get('/', function (req, res) {
  res.send('Home Page')
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola Copa Mundial en su respectiva ruta')
});

app.get('*', function (req, res) {
    res.send('404 | Page not Found')
});

app.listen( port, () => {
    console.log(`Escuchando desde el puerto: http://localhost:${port}`)
});
*/

// Sección 7 => 89. Servir contenido estático

/*
const express = require('express')
const app = express()
const port = 8082;

/Servir contenido estático
app.use(express.static('public'));


app.get('/hola-mundo', function (req, res) {
    res.send('Hola Copa Mundial en su respectiva ruta');
});

/ Funciona para redirigir una pagina estatica a un directorio que no fue declarado /
app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`Escuchando desde el puerto: http://localhost:${port}`);
});
*/

// Sección 7 => 90. Servir un sitio web completo

/*
const express = require('express')
const app = express()
const port = 8082;

app.use(express.static('public'));

app.get('/generic', function (req, res) {
    res.sendFile( __dirname + '/public/generic.html')
});

app.get('/elements', function (req, res) {
    res.sendFile( __dirname + '/public/elements.html')
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`Escuchando desde el puerto: http://localhost:${port}`);
});
*/

// Sección 7 => 91. Handlebars y 92. Argumentos desde el controlador

/*
const express = require('express')
const app = express()
const port = 8082;

// TODO: require('hbs');
app.set('view engine', 'hbs');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render( 'home', {
        nombre: 'Josue Herrera',
        titulo: 'Curso de Node JS',
        caracteristica: 'Curso de Induccion de Upnify'
    });
});

app.get('/generic', function (req, res) {
    res.sendFile( __dirname + '/public/generic.html' );
});

app.get('/elements', function (req, res) {
    res.sendFile( __dirname + '/public/elements.html' );
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`Escuchando desde el puerto: http://localhost:${port}`);
});
*/

// Sección 7 => 93. Usando parciales con HBS y 94. Preparar Webserver para subirlo a un hosting

require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars 
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render( 'home', {
        nombre: 'Josue Herrera',
        titulo: 'Curso de Node JS',
        caracteristica: 'Curso de Induccion de Upnify'
    });
});

app.get('/generic', function (req, res) {
    res.render( 'generic', {
        nombre: 'Josue Herrera',
        titulo: 'Curso de Node JS',
        caracteristica: 'Curso de Induccion de Upnify'
    });
});

app.get('/elements', function (req, res) {
    res.render( 'elements', {
        nombre: 'Josue Herrera',
        titulo: 'Curso de Node JS',
        caracteristica: 'Curso de Induccion de Upnify'
    });
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`Escuchando desde el puerto: http://localhost:${port}`);
});
