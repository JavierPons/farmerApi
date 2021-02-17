const  Sequelize  = require("sequelize");
const db = require("./index")

 const farmer =  db.define('farmerdb',{
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: {
                        type: Sequelize.STRING
                    },
                    tel: {
                        type: Sequelize.STRING
                    },
                    gender: {
                        type: Sequelize.STRING
                    }
    })
   
   
   module.exports = farmer;