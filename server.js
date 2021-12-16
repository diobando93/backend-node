const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://diobando:123Labomba@cluster0.l6dw3.mongodb.net/telegram');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la app esta eschuchando http://localhost:3000')