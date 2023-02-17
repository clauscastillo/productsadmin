const Product = require('../models/product.model');

const viewProducts = (req, res) => {
    Product.find()
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

const createProduct = (req, res) => {
    Product.create(req.body)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

const getProduct = (req, res) => {
    Product.findById(req.params.id)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {title: req.body.title, price: req.body.price, description: req.body.description})
    .then(() => {
        Product.findById(req.params.id)
        .then((result) => {
            res.json(result)
        })
        
    })
    .catch((error) => {
        console.log(error)
    })
}

const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => {
        Product.findById(req.params.id)
        .then((result) => {
            res.json(result);
        })
        
    })
    .catch((error) => {
        console.log(error);
    })
}


module.exports = {
    viewProducts, createProduct, getProduct, updateProduct, deleteProduct
}