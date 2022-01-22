// Importing
const router = require('express').Router();

// APIs
const stores = require('./stores');
const products = require('./products');

// Routing
router.use('/', stores)
router.use('/', products)

// Exports
module.exports = router;