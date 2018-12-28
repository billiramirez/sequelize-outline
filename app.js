const sequelize = require('./database');
const Product = require('./models/product');
const User = require('./models/user');



// CREATE A MIDDLEWARE FOR THE INCOMMING REQUEST, JUST FOR HAVING A DUMMY USER, AND MAKE USE OF THE METHODS OF SEQUELIZE
// THE INCOMMING REQUEST ARE AVAILABLE ONLY IF THE WEB SERVER IS INITILIZED CORRECTLY. 

app.use((req, res, next)=>{
    User.findById(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
})



// RELATE THE ENTITIES

 Product.belongsTo(User, {
     constraints: true,
     onDelete: 'CASCADE'
 });
 User.hasMany(Product);

sequelize
    // .sync({force: true})//this sync create the tables
    .sync()//this sync create the tables
    .then(result => {
        return User.findById(1);
        // console.log(result);// if the creation went well lets console the result
    })
    .then(user => {
        if(!user){
            return User.create({name: 'Billi', email: 'billi@billi.com'});
        }

        return user;
    })
    .then(user => {
        console.log(user);
        // here YOU can initialize the server
    })
    .catch(err => console.log(err)); //throw an error