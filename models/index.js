const dbConfig = require('../config/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD,{
    host: dbConfig.DB_HOST,
    dialect: "mysql",
    port: dbConfig.PORT,
    logging: false
});

sequelize.authenticate().then(()=> {
    console.log("Connection has been stablised successfully.");
}).catch(err => {
    console.log("Unable to connect" , err);
})
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.tutorials = require("./model")(sequelize, Sequelize);

module.exports = sequelize;
