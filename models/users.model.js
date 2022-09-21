const {v4: uuidv4} = require("uuid");

const users = [
    {
        id:uuidv4(),
        username:"Shahrear Mahmud",
        email: "asif10252@gmail.com",
    },
    {
        id:uuidv4(),
        username:"Shahrear Asif",
        email: "asif10@gmail.com",
    },



];

module.exports = users;