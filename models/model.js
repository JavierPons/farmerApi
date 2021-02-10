const Sequelize = require("sequelize");
const db = require("./index")

    const Farmer = db.define("farmerdb",{
        farmID:{
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
    });
   
module.exports = Farmer;