const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const config = require('./config');

//db('mongodb+srv://user:password@cluster0.l6dw3.mongodb.net/telegram');
db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);
router(app);

app.use(config.publicRoute, express.static('public'));

server.listen(config.port, function(){
    console.log('la app esta eschuchando ' + config.host + ':' + config.port);
});
