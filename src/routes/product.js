const express = require("express");

const router = express.Router();
const productsController = require("../controllers/productController");

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProduct);
router.post("/", productsController.addProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.removeProduct);
module.exports = router;
