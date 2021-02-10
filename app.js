const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081"
//   };

// app.use(cors(corsOptions));

// DB
const db = require('./models/index')
async ()=> {
    try{
        await db.sync()
    }catch(e){
        console.log(e);
    }
};


app.get("/", (req,res) => {
    res.json({message: "This is the api for farmer search"})
})

const PORT = process.env.PORT || 3004;
app.listen(PORT, ()=> {
    console.log("Running...");
})