const dbConfig = require('../config/config');
const Sequelize = require('sequelize');

const farmer = require('./model');

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD,{
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,
  
});

const farmerDB = farmer(sequelize, Sequelize)

sequelize.sync({force: false}).then(()=>{
    console.log('Tables syncronized');
})

sequelize.authenticate().then(()=> {
    console.log("Connection has been stablised successfully.");
}).catch(err => {
    console.log("Unable to connect to the database" , err);
})


module.exports = farmerDB;
