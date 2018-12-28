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

// Retrieving data

Product.findAll()
    .then(products => console.log(products))
    .catch(err =>  console.log(err));

    

// Retreive a single record

Product.findById(prodId)
    .then(product => console.log(product))
    .catch(err => console.log(err));

// alternative, this return an array

Product.findAll({where: { id: prodId }})
    .then(products => {
        res.render('shop/product-detail', {
            product: products[0],
            title: products[0].title,
            path: '/products'
        })
    })
    .catch(err => console.log(err));


