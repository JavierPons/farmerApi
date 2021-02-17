const express = require("express");
const router = express.Router();

const FarmDb = require('./models/model');



    router.post("/farm/", function (req, res) {
            // if(req.body !== null && req.body !== undefined){
                const name = req.body.name;
                const tel = req.body.tel;
                const gender = req.body.gender
                    console.log(name);
                    console.log(tel);
                    console.log(gender);
                FarmDb.create({name: name, tel: tel, gender: gender}).then((data)=> {
                    res.send(data)
                })
        
            // }
        })


        module.exports = router;