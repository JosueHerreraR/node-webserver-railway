
// Sección 7 => 86. Inicio del proyecto - WebServer

/*
const http = require('http');

http.createServer( (req, res) =>{

    res.write('Viva Messi');
    res.end();
})
.listen(8082);

console.log('Messi casi pierde el mundial en el tiempo:', 8082);
*/

// Sección 7 => 87. Request y Responde

const http = require('http');

http.createServer( (req, res) =>{

    // <- Atajo para descargar el csv con un nombre que eligamos
    res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' ); 
    res.writeHead(200, {'Content-Type': 'application/csv'});
    
    res.write( 'id, nombre\n' );
    res.write( '1, Josue\n' );
    res.write( '2, Karla\n' );
    res.write( '3, Max\n' );
    res.write( '4, Sofia\n' );
    res.write( '5, Alex\n' );
    res.end();
})
.listen(8082);

console.log('Escuchando desde el puerto:', 8082);
