const { createProduct, viewProducts, getProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')

module.exports = (app) => {

    app.get('/api/products', viewProducts)

    app.post('/api/products/create', createProduct)

    app.get('/api/products/:id', getProduct )

    app.put('/api/products/:id', updateProduct )

    app.delete('/api/products/:id/delete', deleteProduct)

}