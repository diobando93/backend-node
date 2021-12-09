const db = require('mongoose');
const Model = require('./model');
//mongodb+srv://diobando:<password>@cluster0.l6dw3.mongodb.net/telegram
//"mongodb+srv://diobando:123Labomba@cluster0.l6dw3.mongodb.net/co2?retryWrites=true&w=majority"
//para el mock
//const list = [];
db.Promise = global.Promise;
db.connect('mongodb+srv://diobando:123Labomba@cluster0.l6dw3.mongodb.net/telegram', {
    useNewUrlParser: true,
})
console.log('[db] Conectada con exito');

function addMessage(message){
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    //return list;
    let filter = {};
    if(filterUser !== null){
        filter = {user: filterUser}
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        id: id
    })
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText
    //get
    //update
    //delete
}