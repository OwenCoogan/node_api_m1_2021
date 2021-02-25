//IMPORTS
require('dotenv').config();
const express = require('express');


// SERVER DEFINITION

class ServerClass{
    constructor(){
        this.server=express();
        this.port=process.env.PORT;

        

    }
    launch(){
        this.server.listen(this.port, ()=>{
            console.log({node:`http://localhost:${this.port}`})



        })
    }
}

// START SERVER

const MyServer= new ServerClass();
MyServer.launch();