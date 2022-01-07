//const db = require('mongoose');
const Model = require('./model');
//para el mock
//const list = [];

function addMessage(message){
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterChat){
    //return list;
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterChat !== null){
            filter = {chat: filterChat}
        }
        const messages = Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    })

}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        id: id
    })
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
    //get
    //update
    //delete
}