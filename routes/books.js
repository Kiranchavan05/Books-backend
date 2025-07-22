const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const bookController = require('../controllers/bookController');

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', bookController.getBooks);

// @route   POST api/books
// @desc    Create a book
// @access  Public
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty(),
  ],
  bookController.createBook
);

// @route   GET api/books/:id
// @desc    Get book by ID
// @access  Public
router.get('/:id', bookController.getBookById);

// @route   PUT api/books/:id
// @desc    Update a book
// @access  Public
router.put('/:id', bookController.updateBook);

// @route   DELETE api/books/:id
// @desc    Delete a book
// @access  Public
router.delete('/:id', bookController.deleteBook);

module.exports = router; 