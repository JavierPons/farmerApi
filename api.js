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


    router.delete("/deleteItem/", async function (req, res) {
            const id = req.query.id;
            console.log('dddd',id);

           
         FarmDb.destroy({
                where: {id:id}
        }).then(num=> {
            if(num == 1){
                res.send({message: 'Deleted successfully!'})
            } else {
                res.send({
                    message: "Cannot delete"
                })
            }
        }).catch(err => {
            res.status(500).send({
                message: 'Could not delete'
            })
        })
    })  


        module.exports = router;