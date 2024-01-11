const express = require("express");
// const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// get all products
router.get("/", getProducts);

// get a product by id
router.get("/:id", getProduct);

// create/add product
router.post("/", addProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;