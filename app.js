const sequelize = require('./database');


sequelize
    .sync()//this sync create the tables
    .then(result => console.log(result))// if the creation went well lets console the result
    .catch(err => console.log(err)); //throw an error