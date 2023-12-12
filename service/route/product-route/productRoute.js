const express = require("express");
const productRoute = express.Router();

const productController  = require('../../controller/productController');

productRoute.post("/brand/create", productController.createBrand);
productRoute.get("/brand", productController.findBrand);

productRoute.post("/create", productController.createOne);
productRoute.get("/allproduct", productController.findAll);
productRoute.get("/phone", productController.findOne);
productRoute.get("/phone/image", productController.findImage);

productRoute.delete("/delete/:id", productController.deleteOne);

module.exports = productRoute;
