const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);
//metodos: GET, POST, PUT, DELETE, PATCH, OPTIONS.
//body: informacion de la peticion, datos del usuario que se quiere agregar.
//query: informacion extra, orden en el que quieres que se devuelvan los datos, parametros a medir.
//headers: info contextual de la app.
router.get('/message', function(req, res) {
    //pedir cabeceras, que esta utilizando
    console.log(req.headers);
    //cabecera personalizada.
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'lista de mensajes');
    
    //res.send('lista de mensajes');
})

router.post('/message', function(req, res) {
    //valor de las querys que esta enviando
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores')
    }else {
        //coherencia en respuestas
        response.success(req, res, 'Creado correctamente', 201);
    }
    
    //valor del body que esta enviando
    //console.log(req.body);
    //enviar respuestas,
    //respuesta estructurada
    //--->res.status(201).send({error: '', body: 'Creado correctamente'});
    //respuesta plana
    //---->res.status(201).send();
    //respuesta vacia
    //---->res.send();
    //res.send('Mensaje ' + req.body.text + ' eliminado');
})

/*
app.use('/', function(req, res) {
    res.send('hola');
})
*/
//servidor de estaticos de node
app.use('/app', express.static('public'));

app.listen(3000);
console.log('la app esta eschuchando http://localhost:3000')