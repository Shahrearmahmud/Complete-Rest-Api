const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { listen } = require('express/lib/application');
const usersRouter = require('./routes/users.route');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use("/",usersRouter)

//home route

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/views/index.html");
})

//route not found error

app.use((req,res,next)=>{
    res.status(404).json({message:"bad request"});
});

//server error
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Something Broke"});
});

module.exports =app;