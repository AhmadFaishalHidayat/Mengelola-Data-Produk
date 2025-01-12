const express = require("express");
const router = express.Router();
const Controller = require('../controllers/product.controller');


router.get('/', Controller.getProducts);
router.get("/:id", Controller.getProduct);

router.post("/", Controller.createProduct);

// update a product
router.put("/:id", Controller.updateProduct);

// delete a product
router.delete("/:id", Controller.deleteProduct);




module.exports = router;