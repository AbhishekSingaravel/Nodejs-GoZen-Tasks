const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require('express-validator');
const validatePayload = require('../utils/validationMiddleware');

// Get all products
router.get('/', productController.getAllProducts);

// Get a product by ID
router.get('/:id', productController.getProductById);

// Create a new product
router.post(
  '/',
  [
    body('name').isString().withMessage('Name must be a string'),
    body('price').isNumeric().withMessage('Price must be a number')
  ],
  validatePayload,
  productController.createProduct
);

// Update an existing product
router.put(
  '/:id',
  [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('price').optional().isNumeric().withMessage('Price must be a number')
  ],
  validatePayload,
  productController.updateProduct
);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
