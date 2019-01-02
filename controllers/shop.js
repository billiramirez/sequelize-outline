// Fetching a car


req.user.getCart()
    .then(cart => console.log(cart))
    .catch(err => console.log(err));