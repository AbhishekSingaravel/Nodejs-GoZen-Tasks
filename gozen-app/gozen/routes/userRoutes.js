const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const validatePayload = require('../utils/validationMiddleware');

// Get all users
router.get('/', userController.getAllUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Create a new user
router.post(
  '/',
  [
    body('username').isString().withMessage('Username must be a string'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  validatePayload,
  userController.createUser
);

// Update an existing user
router.put(
  '/:id',
  [
    body('username').optional().isString().withMessage('Username must be a string'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  validatePayload,
  userController.updateUser
);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
