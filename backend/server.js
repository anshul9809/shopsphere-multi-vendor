require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8000;
const db = require("./config/db");



const app = express();

app.listen(port, (err)=>{
    if(err){
        console.log(`Error while starting the server: ${err}`);
        return
    }
    console.log("Server is listening at port ", port);
});