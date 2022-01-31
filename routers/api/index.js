// Importing
const router = require("express").Router();

// APIs
const stores = require("./stores");
const store = require("./store");
const products = require("./products");
// Routing
router.use("/", stores);
router.use("/stores", store);
router.use("/stores", products);

// Exports
module.exports = router;
