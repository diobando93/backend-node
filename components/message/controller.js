const store = require('./store');

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageConstroller] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        store.add(fullMessage);
        //console.log(fullMessage);
        resolve(fullMessage);
    })
}

function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage
}