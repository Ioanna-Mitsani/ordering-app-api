// Imports
const router = require('express').Router();

// APIs
const api = require('./api');

// Routers for APIs
router.use('/', api)

// Export
module.exports = router;
