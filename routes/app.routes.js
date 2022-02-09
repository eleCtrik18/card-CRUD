const productsController = require("../controllers/products.controller");
const express = require("express");
const router = express.Router();

// Create a new Product
router.post("/cards", productsController.create);

// Retrieve all Products
router.get("/cards", productsController.findAll);

// Retrieve a single Product with id


module.exports = router;
