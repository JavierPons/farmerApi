const express = require("express");
const router = express.Router();

const FarmDb = require('./models/model');



    router.post("/farm/", function (req, res) {
                const name = req.body.name;
                const tel = req.body.tel;
                const gender = req.body.gender
                FarmDb.create({name: name, tel: tel, gender: gender}).then((data)=> {
                    res.send(data)
                })
        
          
        });

    router.get("/list/", (req, res)=>{
        FarmDb.findAll().then(list => {
            res.send(list)
        })
        
    })    


        module.exports = router;