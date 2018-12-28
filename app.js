const sequelize = require('./database');
const Product = require('./models/product');
const User = require('./models/user');


// RELATE THE ENTITIES

 Product.belongsTo(User, {
     constraints: true,
     onDelete: 'CASCADE'
 });
 User.hasMany(Product);

sequelize
    .sync({force: true})//this sync create the tables
    .then(result => console.log(result))// if the creation went well lets console the result
    .catch(err => console.log(err)); //throw an error