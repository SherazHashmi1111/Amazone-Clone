const Product = require('../models/productModel');

// Create new product => /api/v1/admin/product/new
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
}

// Getting all products => /api/v1/products
exports.getAllProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all products in database'
    });
}

