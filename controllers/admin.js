const Product = require('./models/products');
// The fields
const title = "phone";
const description = "this is a good phone";
const urlAvatar = "http://www.google.com?lkajlfjalfkfkaasfa.png";
const price = 32;
// Let's create a new Product
Product.create({
    title: title,
    price: price,
    urlAvatar: urlAvatar,
    description: description
}).then(res => console.log(res)).catch(err => console.log(err));

