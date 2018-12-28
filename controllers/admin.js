const Product = require('./models/products');
// The fields
const title = "phone";
const description = "this is a good phone";
const urlAvatar = "http://www.google.com?lkajlfjalfkfkaasfa.png";
const price = 32;
// Let's create a new Product

    req.user.createProduct({
        title: title,
        price: price,
        urlAvatar: urlAvatar,
        description: description
    })
        .then(res => console.log(res))
        .catch(err => console.log(err));

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

// updating a record

// The fields
const title = "phonew2";
const description = "this is a good iphone";
const urlAvatar = "http://www.google.com?lkajlfjalfkfkaasfa.png";
const price = 324;

Product.findById(prodId)
    .then(product => {
        product.title = title;
        product.urlAvatar = urlAvatar;
        product.price = price;
        product.description = description;
        return product.save();
    })
    .then(result => {
        console.log('updated product');
        // here maybe render a view or redirect
    })
    .catch(err => console.log(err));

// DELETE A RECORD

Product.findById(prodId)
    .then(product =>{
        product.destroy();
    })
    .then(res => {
        console.log("RECORD DESTROYED");
        // here maybe render a view or redirect
    })
    .catch(err => console.log(err));
