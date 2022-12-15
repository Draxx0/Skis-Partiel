const express = require("express");
const ShopController = require("../controllers/shop.controller");
const router = express.Router();

const endPoint = "/shops";

router.get(`${endPoint}`, ShopController.getAll);
router.post(`${endPoint}`, ShopController.create);
router.delete(`${endPoint}/:id`, ShopController.delete);
router.put(`${endPoint}/:id`, ShopController.update);

module.exports = router;
