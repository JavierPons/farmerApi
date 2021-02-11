const  Sequelize  = require("sequelize");
const db = require("./index")

   module.exports = ( sequelize, type) => {
    return sequelize.define('farmerdb',{
                    id: {
                        type: type.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: {
                        type: type.STRING
                    },
                    tel: {
                        type: type.STRING
                    },
                    gender: {
                        type: type.STRING
                    }
    })
   }
