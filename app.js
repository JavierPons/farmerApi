const express = require("express");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require('./api');

const app = express();
require('./models/index')

app.use(fileupload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Resolving CORS problems
app.use(cors())




app.use("/api", route);

// DB

const db = require('./models/index')
async ()=> {
    try{
        await db.sync()
    }catch(e){
        console.log(e);  
    }
};


app.post("/farm", (req, res) => {
    // if(req.body !== null && req.body !== undefined){
        const name = req.body.name;
        const tel = req.body.tel;
        const gender = req.body.gender

        FarmDb.create({name: name, tel: tel, gender: gender}).then((data)=> {
            res.send(data)
        })

    // }
})

app.get("/", (req,res) => {
    res.json({message: "This is the api for farmer search"})
})



const PORT = process.env.PORT || 3004;
app.listen(PORT, ()=> {
    console.log(`Running... ${PORT}`);
})