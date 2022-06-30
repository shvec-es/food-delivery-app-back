const express = require("express");

const { getShops, getShopById, getProductById } = require("../../controllers");

const router = new express.Router();

router.get("/", getShops);
router.get("/:shopId", getShopById);
router.get("/:productId", getProductById);

module.exports = router;
