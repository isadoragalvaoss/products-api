const express = require("express");

const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController.getCart);
router.post("/", cartController.addToCart);
router.put("/:id", cartController.updateCart);
router.delete("/:id", cartController.removeFromCart);
module.exports = router;
