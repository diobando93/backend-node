const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

function listUsers(){
    return Model.find();
}

function deleteUser(id){
    return Model.deleteOne({_id: id});
}

module.exports = {
    add: addUser,
    list: listUsers,
    delete: deleteUser
}